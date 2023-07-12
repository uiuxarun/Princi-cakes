import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './ProductSkeleton.css';

const ProductsSkeleton = ({ cards }) => {
  return (
    Array(cards).fill(0).map((item, index) => (
      <div key={index} className='product_cards'>
        <div className='product_images'>
          <Skeleton height={300} />
        </div>
        <div className='product_detail'>
          <span className='name'>
            <Skeleton width={200} />
          </span>
          <span className='price'>
            <Skeleton width={100} />
          </span>
        </div>
      </div>
    ))
  );
};

export default ProductsSkeleton;
