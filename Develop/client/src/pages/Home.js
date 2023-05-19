import React from 'react';
import {PRODUCTS} from '../components/ProductItem';
import ProductList from '../components/ProductList';

const Home = () => {
	return (
		<div className='productContainer'>
			<div className='product'></div>
			<ProductList products={PRODUCTS}/>
		</div>
	)
};

export default Home;
