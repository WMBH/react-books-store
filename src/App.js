import React, { useEffect } from 'react';
import { setBooks, setIsReady } from './reducers/books-reducer';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import * as axios from 'axios';
import MenuComponent from './components/Menu';
import BookItem from './components/BookItem';
import './App.css';

function App(props) {
	const { books } = props;
	const { setBooks, isReady, setIsReady } = props;

	useEffect(
		() => {
			axios.get('/books.json').then(({ data }) => {
				setBooks(data);
				setIsReady(true);
			});
		},
		[ books, isReady, setBooks, setIsReady ]
	);
	return (
		<Container className="App">
			<MenuComponent />
			<Card.Group itemsPerRow={5}>
				{!isReady ? 'Загрузка...' : books.map((book, idx) => <BookItem {...book} key={idx} />)}
			</Card.Group>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		books: state.books.items,
		isReady: state.books.isReady
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setBooks: (books) => dispatch(setBooks(books)),
		setIsReady: (boolean) => dispatch(setIsReady(boolean))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
