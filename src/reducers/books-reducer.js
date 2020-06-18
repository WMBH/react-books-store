import * as axios from 'axios';
const SET_BOOKS = 'SET_BOOKS';
const SET_IS_READY = 'SET_IS_READY';

const initialState = {
	items: null,
	isReady: false
};

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload,
				isReady: true
			};
		case 'SET_IS_READY':
			return {
				...state,
				isReady: action.payload
			};
		default:
			return state;
	}
};

export const setBooks = (items) => ({ type: SET_BOOKS, payload: items });
export const setIsReady = (boolean) => ({ type: SET_IS_READY, payload: boolean });
export const requestBooks = () => {
	return (dispatch) => {
		axios.get('/books.json').then(({ data }) => {
			setBooks(data);
		});
	};
};

export default booksReducer;
