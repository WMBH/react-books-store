import { addBook, removeBook } from '../../reducers/cart-reducer';
import { connect } from 'react-redux';
import BookItem from './BookItem';

const mapStateToProps = (state, { id }) => {
	return {
		totalCount: state.cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (obj) => dispatch(addBook(obj)),
		removeBook: (id) => dispatch(removeBook(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
