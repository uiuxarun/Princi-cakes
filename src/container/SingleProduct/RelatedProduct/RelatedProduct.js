import React from 'react'
import './RelatedProduct.css'
import Products from '../../cakes/Products'
import useFetch from '../../../hooks/useFetch'

const RelatedProduct = ({productId, categoryId}) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
);
  return (
    <div className='related_products'>
    <h2>Related products</h2>
        <Products innerPage={true} products={data}/>
    </div>
  )
}

export default RelatedProduct