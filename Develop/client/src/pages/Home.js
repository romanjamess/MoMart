import React from 'react';
import Cart from '../components/Cart';
import CategoryMenu from '../components/CategoryMenu';
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
