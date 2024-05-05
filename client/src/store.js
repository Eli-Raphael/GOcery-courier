import { combineReducers, createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducer } from './reducers/productsReducers';

const finalReducer = combineReducers({
    allProducts: getAllProductsReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    finalReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
