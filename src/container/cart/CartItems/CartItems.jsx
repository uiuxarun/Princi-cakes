import React, { useContext } from 'react';
import './CartItems.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Context } from '../../../utils/context';
import { toast } from 'react-toastify';

const CartItems = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

  const handleRemoveItem = (item) => {
    handleRemoveFromCart(item);
    toast.error("Item removed from cart", { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
  };

  return (
    <div className='cart_products'>
      {cartItems.map((item) => (
        <div key={item.id} className="cart_product">
          <div className="img_container">
            <img src={item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="prod_details">
            <span className="name">{item.attributes.title}</span>
            <CloseOutlinedIcon onClick={() => handleRemoveItem(item)} />
            <div className="quantity_buttons">
              <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className='highlight'>&#8377;{item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
