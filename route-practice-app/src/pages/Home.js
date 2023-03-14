import React from "react";
import {Link, useNavigate } from "react-router-dom"





function Home() {
  const navigate = useNavigate();

  function NavigationHandler(){
  
    navigate(
      '/product'
    );
  }
  return (
    <>
      <div>Welcome to Home Page</div>
      <p>Go to <Link to="/product">Product page</Link> </p>
      <div>
        <button onClick={NavigationHandler}>Navigate</button>
      </div>
    </>
  );
}

export default Home;
