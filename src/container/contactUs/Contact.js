import React, { useState } from 'react';
import './Contact.css';
import FormInput from '../../form/FormInput';
import Button from '../../Button/Button';
import images from '../../constants/images';
import Subheading from '../../component/Subheading/Subheading';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { BsShop } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { IoCallOutline } from 'react-icons/io5';
import { IoMailOpenOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [isNameFocused, setNameFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [message, setMessage] = useState('');
  const [isMessageFocused, setMessageFocused] = useState(false);

  // this is for name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(false);
  };

  // this is for email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  // this is for message
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageFocus = () => {
    setMessageFocused(true);
  };

  const handleMessageBlur = () => {
    setMessageFocused(false);
  };

  const handleButtonClick = () => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('Please fill all the fields', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Thank you for connecting', {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
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
    <div className='Contact' id='Contact'>
      <Subheading Subheading1='Get in Touch' subheading2='Contact Us' />
      <div className='contact_head'>
        <div className='contact_left'>
          <h2>Any special request?</h2>
          <form className='contact_form'>
            <FormInput
              type='name'
              value={name}
              onChange={handleNameChange}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              placeholder='Enter your name'
              isFocused={isNameFocused}
            />
            <FormInput
              type='mail'
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              placeholder='Enter email address'
              isFocused={isEmailFocused}
            />
            <textarea
              className={
                isMessageFocused
                  ? 'form-input text_area input-focus'
                  : 'form-input text_area_normal'
              }
              type='message'
              value={message}
              onChange={handleMessageChange}
              onFocus={handleMessageFocus}
              onBlur={handleMessageBlur}
              placeholder='Write message for Us!'
              isFocused={isMessageFocused}
            />
            <Button
              type='button'
              text='Submit'
              link='/'
              className='dark btn_sub'
              onClick={handleButtonClick}
            />
          </form>
        </div>
        <div className='contact_middle'>
          <img src={images.contact1} alt='contact' />
        </div>
        <div className='contact_right'>
          <h2>Our Shop Details</h2>
          <p>
            A charming cake shop located in Verma Cauraha, Fatehpur, Uttar Pradesh. Established in
            2022 by Rahul Patel, a passionate cake connoisseur, Princi Cakes is a beloved destination
            for delicious confectionery. With a wide range of beautifully crafted cakes, personalized
            designs, and a commitment to quality
          </p>
          <div className='shop_details'>
            <div className='shop_detail'>
              <BsShop />
              <h3>Princi cakes</h3>
            </div>
            <div className='shop_detail'>
              <IoCallOutline />
              <h3>+91 7007964167</h3>
            </div>
            <div className='shop_detail'>
              <IoMailOpenOutline />
              <h3>princicakes64@gmail.com</h3>
            </div>
            <div className='shop_detail'>
              <SlLocationPin />
              <h3>Verma cauraha, Fatehpur, Uttar Pradesh</h3>
            </div>
          </div>
          <div className='social_icons'>
            <RiInstagramFill size={40} onClick={shareOnInstagram}/>
            <IoLogoWhatsapp size={40} onClick={shareOnWhatsApp} />
            <FaFacebook size={36} onClick={shareOnFacebook} />
          </div>
        </div>
      </div>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10149.508676602029!2d80.80550110495562!3d25.92231092608767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b62af6c8d34bb%3A0x63f6cad7e06f6069!2sPritam%20Cakes!5e0!3m2!1sen!2sin!4v1684673679569!5m2!1sen!2sin'
          width='100%'
          height='500px'
          style={{ border: '0px' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='map'
        ></iframe>
      </div>
      <ToastContainer style={{ fontSize: '1.6rem' }} />
    </div>
  );
};

export default Contact;
