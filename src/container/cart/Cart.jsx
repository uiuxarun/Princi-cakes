import React, { useContext } from 'react'
import './Cart.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CartItems from './CartItems/CartItems'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '../../Button/Button';
import { Context } from '../../utils/context';
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '../../utils/api';
import { Link } from 'react-router-dom';

const Cart = ({setShowCart}) => {
    const {cartItems, cartSubTotal} = useContext(Context);

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
        console.log('the button is clicked')
    };

  return (
    <div className="cart_panel">
        <div className="opac_layer" onClick={()=> setShowCart(false)}></div>
        <div className="cart_content">
            <div className="cart_header">
                <span className="heading">Shopping cart</span>
                <span className="close_btn" onClick={()=> setShowCart(false)}>
                    <CloseOutlinedIcon />
                    <span className="text">Close</span>
                </span>
            </div>
           {!cartItems?.length && <div className="empty_cart">
                <ShoppingCartOutlinedIcon />
                <span>No products in the cart</span>
                <Link to={"/#cakes"}>
                <Button text="Return to shop" className="dark" />
                </Link>
            </div>}
            {!!cartItems?.length &&<>
                <CartItems />
                <div className="cart_footer">
                    <div className="subtotal">
                        <span className="text">Subtotal</span>
                        <div className="text total">&#8377;{cartSubTotal}</div>
                    </div>
                    <Button text="Checkout" className="dark" onClick={handlePayment} />
                </div>
            </>}
        </div>
    </div>
  )
}

export default Cart