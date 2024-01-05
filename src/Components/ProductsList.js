import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './products.css'
import { useNavigate } from 'react-router-dom'


import { useDispatch } from 'react-redux'
import { sendItemsCart } from '../store/CounterSlice'
import Footer from './Footer'
import Card from './Card'
import Navbar from './Navbar'
import Advertisement from './Advertisement'
import { addToWishlist } from '../store/WishlistSlice'




const ProductsList = () => {
  const [data, setData] = useState([])
  const [searchInp, setSearchInp] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [categories, setCategories] = useState([])


  // const [selectedCategory, setSelectedCategory] = useState('');

  //used to get data from API
  const fetchCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((data) => {
        console.log('ppp', data)
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')  // making an Http get request to fetch the product data
      .then(response => {
        console.log('ppp', data)
        setData(response.data)  // Setting the fetched data to the 'data' state
        setFilteredData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
    fetchCategories()
  }, [])


  const onSearch = (e) => {
    setSearchInp(e.target.value)
    if (e.target.value === "") {
      setFilteredData(data)
    } else {
      let cardsData = data
      let cardsMatching = cardsData.filter((elem) => {
        console.log('ppp')
        return elem.title.toLocaleLowerCase().includes(e.target.value)
      })
      setFilteredData(cardsMatching)
    }
  }

  // const displayedData = searchInp ? filteredData : data;

  const navigate = useNavigate() //navigating to route
  const dispatch = useDispatch()
  const addItems = (selectedProduct) => {
    dispatch(
      sendItemsCart({
        image: selectedProduct.image,
        title: selectedProduct.title,
        price: selectedProduct.price,
      })
    );
    navigate('/cart')
  };

  const addItemsToWishlist = (product) => {
    dispatch(
      addToWishlist({
        image: product.image,
        title: product.title,
        price: product.price,
      })
    );
    navigate('/Wishlist')
  };


  return (
    <div className='rootDivContainer'>
      <Navbar onsearch={onSearch} categories={categories} data={data} setFilteredData={setFilteredData} />
      <Advertisement />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          {filteredData.map((product) => {
            // console.log('ppp',product)
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default ProductsList;


