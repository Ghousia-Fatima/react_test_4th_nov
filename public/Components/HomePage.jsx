import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../src/actions/cartActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch(fetchProducts(data)));
  }, [dispatch]);

  // Render the list of products and add to cart button
};

const addToCartHandler = (product) => {
    // Check if the product is already in the cart
    if (!cart.find((item) => item.id === product.id)) {
      dispatch(addToCart(product));
    }
  };

  function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        {/* Use Link for navigating to My Cart Page */}
        <Link to="/cart">Go to My Cart</Link>
        {/* Rest of the content for the Home Page */}
      </div>
    );
  }

export default HomePage;