import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <>
              <div className=' container-fluid bottom d-flex justify-content-around bg-body-secondary  '>
        <div>
          <ul className='list-unstyled'>
            <li id="large"><b>Get to know us</b></li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press releases</li>
            <li>Amazon science</li>
          </ul>
        </div>
        <div>
          <ul className='list-unstyled'>
            <li id="large"><b>Help</b></li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <ul className='list-unstyled'>
            <li id="large"><b>Connect with us</b></li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Iwitter</li>
          </ul>
        </div>
      </div>
      <div className='icon d-flex  justify-content-around bg-body-secondary'>
        <ul className='d-flex justify-content-between list-unstyled'>
          <li><img src='https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png' /></li>
          <li><img src='https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png' /></li>
          <li><img src='https://img.icons8.com/?size=48&id=5MQ0gPAYYx7a&format=png' /></li>
        </ul>
      </div>
      <div className='bg-body-secondary'>
        <button className='btn btn-dark btn-lg' onClick={()=>navigate('/SignIn')}>Logout</button>
      </div>
    </>
  )
}

export default Footer
