import React from "react";
import "./Login.css";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

const Login = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
            <div className="classes-banner">
        <img
          src="https://i.imgur.com/poLiUHv.png"
          alt="Classes Banner"
          className="classes-banner-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
