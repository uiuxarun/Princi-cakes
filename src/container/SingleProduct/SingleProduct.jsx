import React, { useState, useContext } from "react";
import "./SingleProduct.css";
import Button from "../../Button/Button";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import FormInput from "../../form/FormInput";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {PiCake} from 'react-icons/pi';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const shareOnInstagram = () => {
    const shareUrl = `https://www.instagram.com/?url=${window.location.href}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(
      `Check out this cake: ${window.location.href}`
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(shareUrl, "_blank");
  };

  if (!data) {
    return (
      <div className="single_product_main_content">
        <div className="layout_product">
          <div className="single-product-page">
            <div className="left">
              <Skeleton height={540} style={{ borderRadius: "16px" }} />
            </div>
            <div className="right">
              <Skeleton height={34} width={300} />
              <Skeleton height={24} width={150} style={{ marginTop: "10px" }} />
              <Skeleton count={3} style={{ marginTop: "20px" }} />
              <Skeleton height={40} width={200} style={{ marginTop: "30px" }} />
              <div className="cart_buttons">
                <Skeleton height={50} width={150} style={{ marginLeft: "20px" }} />
              </div>
              <Skeleton height={1} width="100%" style={{ marginTop: "20px" }} />
              <Skeleton height={20} width={200} style={{ marginTop: "20px" }} />
              <Skeleton height={20} width={250} style={{ marginTop: "10px" }} />
              <Skeleton height={20} width={200} style={{ marginTop: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const product = data?.data?.[0]?.attributes;

  return (
    <>
    <div className="single_product_main_content">
      <div className="layout_product">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                product.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>
            <span style={{fontSize:'2rem', fontWeight:"600", marginBottom:"0.6rem" , display:"flex" , flexDirection:"flex-end"}}>Name on cake &nbsp;<PiCake size={24}/></span>
            <FormInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              placeholder="Write name here"
              isFocused={isEmailFocused}
            />

            <div className="cart_buttons">
              <div className="quantity_buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <Button
                text="Add to Cart"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                  toast.success("Item successfully added", {
                     autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER 
                  });
                }}
                className="dark btn_single"
              />
            </div>
            <span className="divider" />
            <div className="info_items">
              <span className="text_bold">
                Category : &nbsp;
                <span> {product.categories.data[0].attributes.title}</span>
              </span>
                  <span className="text_bold">
                    Share:
                    <span className="social_icons1">
                  <RiInstagramFill
                    size={30}
                    onClick={shareOnInstagram}
                    style={{ cursor: "pointer" }}
                  />
                  <IoLogoWhatsapp
                    size={30}
                    onClick={shareOnWhatsApp}
                    style={{ cursor: "pointer" }}
                  />
                  <FaFacebook
                    size={28}
                    onClick={shareOnFacebook}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ fontSize: "1.6rem" }} />
    </div>
        <RelatedProduct
          productId={id}
          categoryId={product.categories.data[0].id}
        />
    </>
  );
};

export default SingleProduct;
