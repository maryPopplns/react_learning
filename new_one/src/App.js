// import React from 'react';
import './App.css';
import Product from './components/product.js';
import products from './components/productData.js';

function App() {
  const PRODUCTS = products.map((product) => {
    return (
      <>
        <Product
          name={product.name}
          price={product.price}
          description={product.description}
        />
        <br />
      </>
    );
  });
  return <div className='App'>{PRODUCTS}</div>;
}

export default App;
