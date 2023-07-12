import React from 'react'
import {useParams} from "react-router-dom";
import './Category.css';
import Products from '../cakes/Products';
import Subheading from '../../component/Subheading/Subheading';
import useFetch from '../../hooks/useFetch';

const Category = () => {
  const {id} = useParams();

  const {data} = useFetch( `/api/products?populate=*&[filters][categories][id]=${id}`)
  return (
    <div className="category_main_content">
        <div className="layout">
            <Subheading Subheading1="Cakes" subheading2={
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }/>
            <Products innerPage={true} products={data}/>
        </div>
    </div>
  )
}

export default Category