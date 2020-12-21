import { createStore, applyMiddleware } from 'redux'
import { featuresReducer } from '../Reducers/index'

import {logger} from 'redux-logger'



const store = createStore(featuresReducer, applyMiddleware(logger))
console.log('state: ', store.getState());

export default store