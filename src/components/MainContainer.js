import React from 'react';
import { setBooks, setIsReady, setFilter } from '../reducers/books-reducer';
import { connect } from 'react-redux';
import Main from './Main';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
	switch (filterBy) {
		case 'all':
			return books;
		case 'price_high':
			return orderBy(books, 'price', 'desc');

		case 'price_low':
			return orderBy(books, 'price', 'asc');
		case 'author':
			return orderBy(books, 'price', 'asc');
		case 'popular':
			return orderBy(books, 'rating', 'desc');

		default:
			return books;
	}
};

const mapStateToProps = (state) => {
	return {
		books: sortBy(state.books.items, state.books.filterBy),
		isReady: state.books.isReady
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setBooks: (books) => dispatch(setBooks(books)),
		setIsReady: (boolean) => dispatch(setIsReady(boolean)),
		setFilter: (filterBy) => dispatch(setFilter(filterBy))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
