import React from 'react';
import ProductList from '../components/ProductList/Product10';
import Cart from '../components/Cart';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='productContainer'>
      <div className='product'></div>
      <Banner />
      {<ProductList />}
      <Cart />
    </div>
  );
};

export default Home;
