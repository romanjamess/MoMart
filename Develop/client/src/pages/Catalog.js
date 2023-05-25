import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Catalog = () => {
  return (
    <div className='productContainer'>
      <div className='product'>
        <CategoryMenu />

        <ProductList />
      </div>
      <Cart />
    </div>
  );
};

export default Catalog;
