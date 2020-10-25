import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducers from './rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store