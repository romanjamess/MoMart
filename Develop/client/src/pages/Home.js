import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
	return (
		<div className='productContainer'>
			<div className='product'></div>
			<Cart />
			<CategoryMenu />
			<ProductList />
		</div>
	)
};

export default Home;
