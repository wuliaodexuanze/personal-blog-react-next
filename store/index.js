import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const composeEnhancers = composeWithDevTools({})

export default (state) => {
  const store = createStore(
    reducer,
    Object.assign({}, state),
    composeEnhancers(
    applyMiddleware(thunk)
  ));
  return store
}