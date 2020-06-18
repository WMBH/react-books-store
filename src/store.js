import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './reducers/books-reducer';
import cartReducer from './reducers/cart-reducer';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';

let reducers = combineReducers({
	books: booksReducer,
	cart: cartReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
