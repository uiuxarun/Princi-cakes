import React from 'react';
import './Categories.css';
import Subheading from '../../component/Subheading/Subheading';
import {useNavigate} from 'react-router-dom';

export const Categories = ({categories}) => {

  const navigate = useNavigate();
  return (
    <div className="categories_head">
      <Subheading Subheading1="Browse Cakes By Types" subheading2="Discover Cakes by Categories!" />
      <div className="shop_by_category">
        <div className="categories">

        {categories?.data?.map((item) => (

            <div key={item.id} className="category"  onClick={() => navigate(`/category/${item.id}`)}>
              <img src={item.attributes.img.data.attributes.url} alt="" />
              <p>{item.attributes.title}</p> 
            </div>

          ))}

        </div>
      </div>
    </div>
  );
};
