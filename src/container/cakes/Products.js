import React from 'react';
import './Products.css';
import Subheading from '../../component/Subheading/Subheading';
import Product from './Product';
import ProductsSkeleton from './ProductsSkeleton';

const Products = ({ products, innerPage }) => {
  return (
    <div className='Cakes_head' id='Cakes'>
      {!innerPage && <Subheading Subheading1="Discover the taste of" subheading2="Cake Collections" />}
      <div className="products">
        {products ? (
          products.data.map((item) => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))
        ) : (
          <ProductsSkeleton cards={4}/>
        )}
      </div>
    </div>
  );
};

export default Products;
