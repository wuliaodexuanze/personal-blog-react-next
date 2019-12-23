import App from 'next/app'
import { Provider } from 'react-redux'
import { BackTop } from 'antd'
import Router from 'next/router'
import withRedux from '../utils/with-redux'
import Header from '../containers/Header'
import Footer from '../common/Footer'
import {get} from '../utils/http'
import {actionCreators} from '../containers/Header/store'
import Loading from '../common/Loading'
import 'antd/dist/antd.css'
import {
  GlobalStyle,
  MainWrapper
} from '../static/style'

class MyApp extends App {
  state = {
    loading: false
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  endLoading = () => {
    this.setState({
      loading: false
    })
  }

  componentDidMount () {
    Router.events.on('routeChangeStart', () => {
      this.startLoading()
      window.localStorage.setItem('history', JSON.stringify({
        pathname: window.location.pathname
      }))
    })
    Router.events.on('routeChangeComplete', this.endLoading)
    Router.events.on('routeChangeError', this.endLoading)
  }

  componentWillUnmount () {
    Router.events.off('routeChangeStart')
    Router.events.off('routeChangeComplate')
    Router.events.off('routeChangeError')
  }

  static async getInitialProps (ctx) {
    const {
      Component
    } = ctx
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const route = ctx.router.route
    if (route === '/' || route === '/blog') {
      ctx.reduxStore.dispatch(actionCreators.showSearch(true))
    }

    const navs = await get('v1/classify') || []
    ctx.reduxStore.dispatch(actionCreators.changeNav(navs))

    return {
      pageProps
    }
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props

    return (
      <>
        <GlobalStyle />
        <Provider store={ reduxStore }>
          {
            this.state.loading ? <Loading /> : null
          }
          <div className = {
            this.state.loading ? 'main-wrapper' : ''
          }>
            <Header />
            <MainWrapper className="wrap">
              <Component { ...pageProps } />
            </MainWrapper>
            <Footer />
            <BackTop visibilityHeight={100} title="回到顶部" />
          </div>
        </Provider>
      </>
    )
  }
}

export default withRedux(MyApp);