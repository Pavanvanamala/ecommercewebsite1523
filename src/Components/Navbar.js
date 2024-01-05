import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToWishlist } from '../store/WishlistSlice'


const Navbar = ({ onsearch, data,setFilteredData}) => {
  const [search, setSearch] = useState('')
  


  const navigate = useNavigate()
  const dispatch=useDispatch()

  const handleNavigateCart = () => {

    navigate('/cart')
  }
  const handleNavigateWishlist = () => {

    navigate('/Wishlist')
  }

 

  const cartItems = useSelector((state) => state.user)

  const cartItemCount = cartItems.reduce((elem, item) => elem + item.quantity, 0)

  // const displayedData =useSelector((state)=> state.user)

  const wishlistItems=useSelector((state)=> state.wishlist)

  const wishlistItemCount = wishlistItems.reduce((elem,item)=> elem + item.quantity, 0)



  const handlePrice = (cost) =>{
    let priceProducts=[...data]
    if(cost==="low to high"){
      console.log('ppp',cost)
      let sortLowOrders=priceProducts.sort((a,b)=>a.price-b.price)
      setFilteredData(sortLowOrders) 
    }
    if(cost==="high to low"){
      console.log('ppp',cost)
      let sortHighOrders=priceProducts.sort((a,b)=>b.price-a.price)
      setFilteredData(sortHighOrders)
    }
    if(cost==="orginal"){
      console.log('ppp',cost)
      setFilteredData(priceProducts)
    }
  }

  const handleCategory = (ele) => {
    if (ele === "All products")
      setFilteredData(data);
    else {
      let selectedList = data.filter((item) => {
        return item.category === ele;
      });
      setFilteredData(selectedList);
    }
  };
  
  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <b>Price Sorting</b>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={()=>{handlePrice("low to high")}}>Low to high</a></li>
                  <li><a className="dropdown-item" onClick={()=>{handlePrice("high to low")}}>High to low</a></li>
                  <li><a className="dropdown-item" onClick={()=>{handlePrice("orginal")}}>Orignal price</a></li> 
                </ul>
              </div>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fashion
                </a>
                <ul className="dropdown-menu">
                  {/* {
                    categories.map((category) => {
                      return <li><a onClick={() => { onSelectCategory(category) }} className="dropdown-item" href="#">{category}</a></li>
                    })
                  } */}
                <li><a className="dropdown-item"  onClick={()=>{handleCategory("All products")}}><b>Home</b></a></li>
                <li><a className="dropdown-item"  onClick={()=>{handleCategory("men's clothing")}}><b>Him </b></a></li>
                <li><a className="dropdown-item"  onClick={()=>{handleCategory("women's clothing")}}><b>Her</b></a></li>
                <li><a className="dropdown-item"  onClick={()=>{handleCategory("jewelery")}}><b>Jwellery</b></a></li>
                <li><a className="dropdown-item"  onClick={()=>{handleCategory("electronics")}}><b>Electronics</b></a></li>
                
                  

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input onChange={(e) => {
                setSearch(e.target.value)
                onsearch(e)
              }} value={search} className="form-control me-2" type="search" placeholder="Search product" aria-label="Search" />
              <img src='https://cdn-icons-png.flaticon.com/128/3870/3870922.png' onClick={handleNavigateWishlist} style={{width:"60px",height:"60px"}}/><b>{wishlistItemCount > 0 && `(${wishlistItemCount})`}</b>
              <button onClick={handleNavigateCart} className="btn btn-outline-success" type="submit" >Cart <img src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png' style={{ width: "30px", height: "30px" }} />{cartItemCount > 0 && `(${cartItemCount})`}</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
