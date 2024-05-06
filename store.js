import {combinedReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composedWithDevTools} from 'redux-devtools-extension'

const finalReducer = combinedReducers({
    getAllProductsReducer: getAllProductsReducer
})

const initialState = {}

const compposeEnhancers = composeWithDevTools({})
const store = createStore (finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store