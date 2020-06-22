import { setBooks, setIsReady } from '../reducers/books-reducer';
import { setFilter, setSearchQuery } from '../reducers/filter-reducer';
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

const sortedBooks = (books, searchQuery) => {
	return books.filter(
		(item) =>
			item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);
};

const searchBooks = (books, filterBy, searchQuery) => {
	return sortBy(sortedBooks(books, searchQuery), filterBy);
};

const mapStateToProps = (state) => {
	return {
		books: state.books.items && searchBooks(state.books.items, state.filter.filterBy, state.filter.searchQuery),
		isReady: state.books.isReady,
		searchQuery: state.filter.searchQuery
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setBooks: (books) => dispatch(setBooks(books)),
		setIsReady: (boolean) => dispatch(setIsReady(boolean)),
		setFilter: (filterBy) => dispatch(setFilter(filterBy)),
		setQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
