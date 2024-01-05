import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './products.css'
import { decrement, increment, removeItemsCart } from '../store/CounterSlice';
import CartNavbar from './CartNavbar';



const Cart = () => {

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.user);




  return (
    <>
      <CartNavbar />
      <div className=' cart col-lg-4 col-md-6 col-sm-12 d-flex flex-wrap justify-content-around' style={{ width: '95%', display: 'flex', flexWrap: 'wrap' }} >
        {cartItems.map((item, index) => (
          <div key={index} className='card mb-4 cards p-4 ' style={{ width: '25rem', margin: '1rem' }}>
            <img src={item.image} style={{ height: "100px", width: "100px" }} />
            <p><b>Price$: </b>{item.price * item.quantity}</p>
            <h3>{item.title.slice(0, 30)}</h3>
            <div className='quantity d-flex justify-content-between'>
              <button className='btn btn-info ' onClick={() => dispatch(removeItemsCart({ id: item.id }))}>Remove</button>
              <div>
                <button className='btn btn-secondary decrement' disabled={item.quantity < 2 ? true : false} onClick={() => dispatch(decrement({ id: item.id }))}>-- </button>
                <b>Quantity:   {item.quantity}</b>
                <button className='btn btn-secondary' onClick={() => dispatch(increment({ id: item.id }))}>+</button>
              </div>
            </div>
          </div>
        ))}
        <div>
        </div>
      </div>
      <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option selected style={{ fontWeight: "bolder" }}>View price details</option>
          <option value='1'>
          <b>CGST:  ₹0.00</b>
          </option>
          <option value='2'>
          <b>SGST:  ₹0.00</b>
          </option>
          <option value="2" ><h1>Total price₹ {cartItems.reduce((acc, val) => {
            return acc + val.price * val.quantity
          }, 0)}</h1>
          
          </option>


        </select>
      </div>

    </>
  );
};

export default Cart;

