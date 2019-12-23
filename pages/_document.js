import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })

      const props = await Document.getInitialProps(ctx)
      return {
        ...props,
        styles: <>{props.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
          <meta http-equiv="Cache-Control" content="no-siteapp"/>
          <meta http-equiv="Cache-Control" content="no-transform"/>
          <meta name="applicable-device" content="pc,mobile"/>
          <meta name="MobileOptimized" content="width"/>
          <meta name="HandheldFriendly" content="true"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
          <meta name="keywords"
            content="开发者,博客,程序猿,程序媛,编程,代码,开源,IT网站,,响应式,技术博客,前端,全站,全栈,Developer,Programmer,Coder,Geek,个人博客，HTML,CSS,react,React,Hooks,Nodejs,Javascript" />
          <meta name="description"
            content="手里有糖个人博客是一个前端小白技术分享博客，利用react hooks编写，nodejs后台，在前端的路上慢慢爬行。手里有糖，心里美滋滋！" />
          <meta name="apple-mobile-web-app-title" content="手里有糖" />
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="static/favicon.ico" />
          <link rel="apple-touch-icon" href="static/logo.png" />
          {/* <link rel="stylesheet" href="./static/css/font-awesome.min.css" /> */}
          <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
