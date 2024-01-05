import logo from './logo.svg';
import './App.css';
import ProductsList from './Components/ProductsList';
import {Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart'
import SignUp from './Components/SignUp';
import SignIn from './Components/Login';
import { Navigate } from 'react-router-dom';
import Wishlist from './Components/Wishlist';
import CartNavbar from './Components/CartNavbar';




function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Navigate to="/SignIn" />} />
     <Route path="/SignIn" element={<SignIn />} />
     <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/ProductsList' element={<ProductsList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Wishlist' element={<Wishlist/>} />
      <Route path='/CartNavbar' element={<CartNavbar/>} />
     </Routes>
    </div>
  );
}


export default App;
