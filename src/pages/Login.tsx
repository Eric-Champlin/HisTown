import React from "react";
import "./Login.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel.tsx";

const Login = () => {
  return (
    <div>
      <NavBar />
            {/* Banner Section */}
        <BannerCarousel />

      <Footer />
    </div>
  );
};

export default Login;
