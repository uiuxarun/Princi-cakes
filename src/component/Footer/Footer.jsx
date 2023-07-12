import React, {useState} from "react";
import "./Footer.css";
import images from "../../constants/images";
import FormInput from "../../form/FormInput";
import Button from "../../Button/Button";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
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

  const shareOnInstagram = () => {
    const shareUrl = 'https://www.instagram.com/princicakes161/';
    window.open(shareUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const shareUrl = `https://wa.me/7007964167/`;
    window.open(shareUrl, "_blank");
  };  

  const shareOnFacebook = () => {
    const shareUrl = '  https://www.facebook.com/princicakes161';
    window.open(shareUrl, "_blank");
  };


  return (
    <div className="footer_head">
      <div className="footer_top">
        <div className="footer_top-left">
          <img src={images.logoDark} alt="" />
          <p>
            From birthdays to weddings and everything in between, our custom
            cakes are the perfect centerpiece to elevate any celebration
           </p>
           <div className="footer_icons">
              <RiInstagramFill size={30} onClick={shareOnInstagram}/>
              <IoLogoWhatsapp size={30} onClick={shareOnWhatsApp} />
              <FaFacebook size={28} onClick={shareOnFacebook}/>
           </div>
        </div>
        <div className="footer_top-right">
          <form className="forrm">
          <p>Let's join us!</p>
            <FormInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              placeholder="Enter email"
              isFocused={isEmailFocused}
            />
            <Button type='submit' text='Subscribe' link='/' className='dark btn_sub' />
          </form>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_links link1">
          <span>Cookies policy</span>
          <span>Privacy policy</span>
          <span>Legal terms</span>
        </div>
        <div className="footer_links link2">
          <p>Copyright 2023. All rights reserved</p>
        </div>
        <div className="footer_links link3">
          <p>Design & created by Arun</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;