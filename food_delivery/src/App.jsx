import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import Login from "./components/Login/Login";
import MyOrders from "./pages/Order/MyOrder";
function App() {

  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
     {showLogin? <Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar  setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path='/myorder' element={<MyOrders/>}/>
        </Routes>
        <AppDownload />
        <Footer />
      </div>
    </>
  );
}

export default App;
