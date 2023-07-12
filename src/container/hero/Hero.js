import React, { useEffect, useContext } from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import images from "../../constants/images";
import WhyChooseUs from "../ChooseUs/WhyChooseUs";
import Testimonials from '../testimonials/Testimonials';
import { Categories } from "../categories/Categories";
import Products from "../cakes/Products";
import Contact from "../contactUs/Contact";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { Link } from "react-router-dom";

const Hero = () => {
  const { products, setProducts, categories, setCategories, choose, setChoose } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
    getChoose();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getChoose = () => {
    fetchDataFromApi("/api/chooses?populate=*").then((res) => {
      setChoose(res);
    });
  };

  return (
    <>
      <div className="app_hero" id="hero">
        <div className="hero_section">
          <div className="hero_text">
            <h1>Celebrate with cake</h1>
            <p>
              From birthdays to weddings and everything in between, our custom
              cakes are the perfect centerpiece to elevate any celebration
            </p>
            <Button text="Order Now" 
               onClick={() => {
                const cakesSection = document.getElementById("Cakes");
                if (cakesSection) {
                  cakesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
             className="light" />
             <Link to="tel:+917007964167">
            <div className="callUs">
              <img src={images.call} alt="callus" />
              <span className="call_p" style={{color:"#FFEDD9"}}>&nbsp; Call us :&nbsp; +91-7007964167</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <WhyChooseUs choose={choose} />
      <Categories categories={categories} />
      <Products products={products} />
      <Contact />
      <Testimonials />
    </>
  );
};

export default Hero;
