import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({id, data }) => { 
  const navigate = useNavigate();
  return (
    <div className="product_card" onClick={() => navigate("/product/" + id)}>
      <div className="product_image">
        <img
          src={
            data.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="product_detail">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
