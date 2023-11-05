import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../src/actions/cartActions';
import { Link } from 'react-router-dom';

const MyCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const removeItemFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  // Calculate total price

  // Render cart items and total price
};

function MyCartPage() {
  return (
    <div>
      <h1>My Cart Page</h1>
      {/* Use Link for navigating back to the Home Page */}
      <Link to="/">Back to Home</Link>
      {/* Rest of the content for the My Cart Page */}
    </div>
  );
}

export default MyCartPage;