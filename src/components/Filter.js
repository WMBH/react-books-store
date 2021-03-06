import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = (props) => {
	const { searchQuery, setQuery } = props;

	const [ activeItem, setActiveItem ] = useState('home');

	const handleItemClick = (e, { name }) => {
		const { setFilter } = props;
		setActiveItem(name);
		setFilter(name);
	};

	const handleFieldChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<Menu secondary>
			<Menu.Item name="all" active={activeItem === 'all'} onClick={handleItemClick} />
			<Menu.Item name="popular" active={activeItem === 'Popular'} onClick={handleItemClick} />
			<Menu.Item name="author" active={activeItem === 'Author'} onClick={handleItemClick} />

			<Menu.Item name="price_high" active={activeItem === 'price_high'} onClick={handleItemClick} />
			<Menu.Item name="price_low" active={activeItem === 'price_low'} onClick={handleItemClick} />

			<Menu.Menu position="right">
				<Menu.Item>
					<Input icon="search" placeholder="Search..." value={searchQuery} onChange={handleFieldChange} />
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default Filter;
