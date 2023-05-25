import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';

const Home = () => {
  return (
    <div className='productContainer'>
      <div className='product'></div>

      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
