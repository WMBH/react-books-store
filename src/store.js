import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './reducers/books-reducer';
import cartReducer from './reducers/cart-reducer';
import filterReducer from './reducers/filter-reducer';
import logger from 'redux-logger';

let reducers = combineReducers({
	books: booksReducer,
	cart: cartReducer,
	filter: filterReducer
});

let store = createStore(reducers, applyMiddleware(logger));

export default store;
