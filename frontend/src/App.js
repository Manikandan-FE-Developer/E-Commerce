import './App.css';
import { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
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
   const [authenticated, setAuthenticated] = useState(false);
   const [firstName, setFirstName] = useState('');

   useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
          const user = JSON.parse(loggedInUser);
          setAuthenticated(true);
          setFirstName(user.firstName);
      }
   }, []);

   const handleLogin = (name) => {
      setAuthenticated(true);
      setFirstName(name);
      localStorage.setItem('user', JSON.stringify({ firstName: name }));
   };

   const handleLogout = () => {
      toast.success('Logout Successful');
      localStorage.removeItem("user");
      setAuthenticated(false);
      setFirstName('');
   };

   useEffect(() => {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
         setCartItems(savedCartItems);
      }
   }, []);

   return (
      <div className="App">
         <Router>
            <div>
               <ToastContainer className="toaster" theme='dark' position="top-center" autoClose={2000}/>
               <Header cartItems={cartItems} authenticated={authenticated} handleLogout={handleLogout} firstName={firstName}/>
                  <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/search" element={<Home/>}/>
                     <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
                     <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
                     <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
                     <Route path="/register" element={<Register handleLogin={handleLogin}/>}/>
                  </Routes>
               <Footer/>
            </div>
         </Router>
      </div>
   );
}

export default App;