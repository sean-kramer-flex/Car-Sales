import { createStore } from 'redux'
import { featuresReducer } from '../Reducers/index'

const store = createStore(featuresReducer)

export default store