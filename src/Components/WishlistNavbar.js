import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendItemsCart ,removeItemsCart} from '../store/CounterSlice'




const WishlistNavbar = ({id,product}) => {
 
  const dispatch = useDispatch()
  
  const cartData=useSelector((state)=>state.user)
  const isInCart=cartData.some((item) => item.id===id)

  const cartItems=useSelector((state)=>state.user)
  const cartItemCount=cartItems.reduce((elem,item)=>elem + item.quantity ,0)

  const navigate=useNavigate()

 
  const handleAddToCart = () => {
    navigate('/Cart')
  };

  const handleNavigateHome=()=>{
    navigate('/ProductsList')
  }

  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <div>
    <a class="navbar-brand" href="#" style={{fontWeight:"bolder"}}>Wishlist</a>           <img src='https://cdn-icons-png.flaticon.com/128/8948/8948777.png' width='40' height='40'/>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div className="container-fluid d-flex justify-content-end">
        <img src='https://cdn-icons-png.flaticon.com/128/2331/2331970.png' onClick={handleAddToCart}width="50" height="50"/>{cartItemCount > 0 && `(${cartItemCount})`}
        <form className="d-flex" role="search">
        <button className="btn btn-primary" onClick={handleNavigateHome} >Home</button>
        </form>
        </div>
    </div>
  </div>
   </nav>
    </>
  )
}

export default WishlistNavbar
