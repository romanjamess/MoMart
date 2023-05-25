import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';

const Catalog = () => {
	return (
		<div className='productContainer'>
			<div className='product'></div>
			<CategoryMenu />
			<ProductList />
		</div>
	)
};

export default Catalog;