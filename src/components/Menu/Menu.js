import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Cart = ({ title, id, image, removeBook }) => {
	const removeBookFromCart = () => {
		removeBook(id);
	};
	return (
		<div>
			<List selection divided verticalAlign="middle">
				<List.Item>
					<List.Content floated="right">
						<Button onClick={removeBookFromCart} color="red">
							Remove
						</Button>
					</List.Content>
					<Image avatar src={image} />
					<List.Content>{title}</List.Content>
				</List.Item>
			</List>
		</div>
	);
};

const MenuComponent = ({ totalPrice, amount, items }) => {
	return (
		<Menu>
			<Menu.Item name="bookStore">Book Store</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item name="total">{`Total: ${totalPrice} руб`}</Menu.Item>
			</Menu.Menu>
			<Popup
				content={items.map((i) => <Cart {...i} />)}
				hideOnScroll
				on="click"
				trigger={<Menu.Item name="amount">{`Cart: (${amount})`}</Menu.Item>}
			/>
		</Menu>
	);
};

export default MenuComponent;
