import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './Login.css'

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="icon"
          />
        </div>
        <div className="login-popup-input">
            {currentState=== "Login" ? <></> : <input type="text" placeholder="Your name" required/>}
            <input type="email" placeholder="Your email" required/>
            <input type="password" placeholder="Password" required />
        </div>
        <button> {currentState === "Sign Up" ? "Create account" : "Login "} </button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing , i agree to the term and condition of use and privacy policy</p>

        </div>
        {currentState==="Login" ? <p> Create a new account? <span onClick={()=>setCurrentState("Sign Up")}> Click here</span></p> : <p> Already have an account? <span onClick={()=>setCurrentState("Login")}> Login here</span></p>}
        
        
      </form>
    </div>
  );
};

export default Login;
