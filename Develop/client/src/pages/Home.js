import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className='productContainer'>
      <div className='product'>test</div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
