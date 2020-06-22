import { addBook, removeBook } from '../../reducers/cart-reducer';
import { connect } from 'react-redux';
import MenuComponent from './Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = (state) => {
	return {
		totalPrice: state.cart.items.reduce((total, item) => total + item.price, 0),
		amount: state.cart.items.length,
		items: uniqBy(state.cart.items, (o) => o.id)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (obj) => dispatch(addBook(obj)),
		removeBook: (id) => dispatch(removeBook(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
