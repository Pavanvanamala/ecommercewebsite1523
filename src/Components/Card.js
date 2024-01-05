import React from 'react'
import { sendItemsCart } from '../store/CounterSlice'
import { removeItemsCart } from '../store/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addToWishlist,removeFromWishlist } from '../store/WishlistSlice'
import { useNavigate } from 'react-router-dom'
const Card = ({ product }) => {

    const { id,image, title, description, price, rating } = product
    const dispatch = useDispatch()
    const cartData=useSelector((state)=>state.user)
    const wishlistData=useSelector((state)=>state.wishlist)
    const isInCart=cartData.some((item) => item.id===id)
    const isInWishlist=wishlistData.some((item) => item.id===id)

    // const [isInCart, setIsInCart] = useState(false)
    // const [isInWishlist,setIsInWishlist]=useState(false)

    const handleButtonClick = () => {
        if (isInCart) {
            // Remove from cart
            dispatch(removeItemsCart({ id: product.id }));
        } else {
            // Add to cart
            dispatch(sendItemsCart({ ...product, quantity: 1 }));
        }
    };

    const navigate=useNavigate()
    
    const handleWishlist = ()=>{
        if (isInWishlist) {
            // Remove from cart
            console.log('ppp',product)
            
            dispatch(removeFromWishlist({ id: product.id }));
        } else {
            // Add to cart
            
            dispatch(addToWishlist({ ...product,quantity:1}));
        }
        
    }


    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 cards p-4' style={{ width: "20rem" }}>
                <img
                    src={image}
                    alt={`Product: ${title}`}
                    
                    style={{ height: "100px", width: "100px", marginLeft: "70px" }}
                />
                <h3 className='title'>Title: {title.slice(0, 20)}</h3>
                <p className='description '>Description: {description.slice(0, 100)}</p>
                <div className='footer d-flex justify-content-between'>
                    <h5><b>Price $:</b>{price}</h5>
                    <h5><b>Rating: </b>{rating.rate}</h5>
                </div>
                <div className='footer d-flex justify-content-between'>
                    <img src={isInWishlist ? 'https://cdn-icons-png.flaticon.com/128/833/833472.png' : 'https://cdn-icons-png.flaticon.com/128/2961/2961957.png'}   style={{ width: "45px", height: "45px", cursor:"pointer"}} onClick={handleWishlist} />{}
                    <button onClick={handleButtonClick} className='btn btn-outline-info'><b>{isInCart ? 'Remove from cart' : 'Add to cart'}</b></button>
                </div>
            </div>
        </div>
    )
}

export default Card
