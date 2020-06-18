import React, { useEffect } from 'react';
import { setBooks, setIsReady } from './reducers/books-reducer';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import * as axios from 'axios';
import MenuComponent from './components/Menu';

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
			<ul>
				{!isReady ? (
					'Загрузка...'
				) : (
					books.map((book) => (
						<li>
							<b>{book.title}</b> - {book.author}
						</li>
					))
				)}
			</ul>
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
