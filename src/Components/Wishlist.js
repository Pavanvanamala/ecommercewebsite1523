import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/WishlistSlice';
import { sendItemsCart, removeItemsCart } from '../store/CounterSlice';
import WishlistNavbar from './WishlistNavbar';

const Wishlist = () => {
  const dispatch = useDispatch();
  const WishlistItems = useSelector((state) => state.wishlist);
  const cartData = useSelector((state) => state.user);

  const handleAddToCart = (product) => {
    const isInCart = cartData.some((item) => item.id === product.id);

    if (isInCart) {
      dispatch(removeItemsCart({ id: product.id }));
    } else {
      dispatch(sendItemsCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <>
      <WishlistNavbar />
      <div className='cart col-lg-4 col-md-6 col-sm-12 d-flex flex-wrap justify-content-around ' style={{ width: '95%', display: 'flex', flexWrap: 'wrap' }}>
        {WishlistItems.map((item, index) => (
          <div key={index} className='card mb-4 cards p-4 ' style={{ width: '25rem', margin: '1rem' }}>
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <img src={item.image} style={{ height: '100px', width: '100px'  }} alt={item.title} />
              <p className='d-flex'><b>Price$: </b>{item.price}</p>
            </div>
            <div className='quantity '>
              <h3>{item.title.slice(0, 30)}</h3>
            <div className='d-flex justify-content-around'>
            <button className='btn btn-info ' onClick={() => dispatch(removeFromWishlist({ id: item.id }))}>Remove</button>
              <button className='btn btn-danger ' onClick={() => handleAddToCart(item)}>
                {cartData.some((cartItem) => cartItem.id === item.id) ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;

