import React from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const MenuComponent = (props) => {
	return (
		<Menu>
			<Menu.Item name="bookStore">Book Store</Menu.Item>
			<Menu.Menu position="right">
				{' '}
				<Menu.Item name="total">
					Total : &nbsp; <b>0</b>$
				</Menu.Item>
				<Menu.Item name="cart">Cart</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default MenuComponent;
