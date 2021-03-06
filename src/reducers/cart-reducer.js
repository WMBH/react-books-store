const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
	items: []
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				items: [ ...state.items, action.payload ]
			};
		case 'REMOVE_BOOK':
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload)
			};

		case 'REMOVE_ONE_BOOK':
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload)
			};
		default:
			return state;
	}
};

export const addBook = (obj) => ({ type: ADD_BOOK, payload: obj });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default cartReducer;
