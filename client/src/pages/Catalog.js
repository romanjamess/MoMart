import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Catalog = () => {
  return (
    <div className='productContainer'>
      <div className='product'></div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Catalog;
