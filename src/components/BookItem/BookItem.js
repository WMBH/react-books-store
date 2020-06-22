import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookItem = (book) => {
	const { title, image, author, price, addBook, totalCount } = book;

	const addBookToCart = () => {
		addBook(book);
	};

	return (
		<Card>
			<Image src={image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Meta>
					<span className="date">{author}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<Icon name="rub" />
				{price}
			</Card.Content>
			<Button onClick={addBookToCart}>{`Add To Cart (${totalCount})`}</Button>
		</Card>
	);
};

export default BookItem;
