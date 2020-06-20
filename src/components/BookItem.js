import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const BookItem = ({ title, image, author, price }) => {
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
		</Card>
	);
};

export default BookItem;
