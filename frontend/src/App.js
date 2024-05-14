import './App.css';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

function App() {

   const [cartItems, setCartItems] = useState([]);

   return (
      <div className="App">
         <Router>
            <div>
               <ToastContainer theme='dark' position="top-center"/>
               <Header cartItems={cartItems}/>
                  <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/search" element={<Home/>}/>
                     <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
                     <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
                     <Route path="/login" element={<Login/>}/>
                     <Route path="/register" element={<Register/>}/>
                  </Routes>
               <Footer/>
            </div>
         </Router>
      </div>
   );
}

export default App;