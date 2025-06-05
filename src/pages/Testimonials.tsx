import React from "react";
import "./Testimonials.css";
// @ts-ignore
import NavBar from "../components/NavBar.tsx";
// @ts-ignore
import Footer from "../components/Footer.tsx";
// @ts-ignore
import NextSteps from "../Hooks/useInViewNextSteps.tsx";
// @ts-ignore
import Testimonials from "../Hooks/useInViewTestimonials.tsx";



const Acro = () => {
  return (
    <div>

       <Testimonials />


<NextSteps />

      <Footer />
    </div>
  );
};

export default Acro;
