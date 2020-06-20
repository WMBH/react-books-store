import React, { useEffect } from 'react';
import { Container, Card } from 'semantic-ui-react';
import * as axios from 'axios';
import MenuComponent from './Menu';
import BookItem from './BookItem';
import Filter from './Filter';

function Main(props) {
	const { books } = props;
	const { setBooks, isReady, setIsReady } = props;

	useEffect(() => {
		axios.get('/books.json').then(({ data }) => {
			setBooks(data);
			setIsReady(true);
		});
	}, []);

	return (
		<Container className="App">
			<MenuComponent />
			<Filter {...props} />
			<Card.Group itemsPerRow={5}>
				{!isReady ? 'Загрузка...' : books.map((book) => <BookItem {...book} />)}
			</Card.Group>
		</Container>
	);
}

export default Main;
