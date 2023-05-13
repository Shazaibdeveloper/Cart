import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </>
  );
};

export default CartItem;
