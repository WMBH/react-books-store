import React, { useEffect } from 'react';
import { Container, Card } from 'semantic-ui-react';
import * as axios from 'axios';
import MenuComponent from '../components/Menu/MenuContainer';
import BookItem from '../components/BookItem/BookItemContainer';
import Filter from './Filter';

function Main(props) {
	const { books, setBooks, isReady, setIsReady } = props;

	useEffect(
		() => {
			axios.get('/books.json').then(({ data }) => {
				setBooks(data);
				setIsReady(true);
			});
		},
		[ setBooks, setIsReady ]
	);

	return (
		<Container className="App">
			<MenuComponent />
			<Filter {...props} />
			<Card.Group itemsPerRow={5}>
				{!isReady ? 'Загрузка...' : books.map((book) => <BookItem {...book} key={book.id} />)}
			</Card.Group>
		</Container>
	);
}

export default Main;
