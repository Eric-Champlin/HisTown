import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel";
import TestimonialsPage from "../Hooks/useInViewTestimonialsPage";
import "./Testimonials.css";

const TestimonialsPageContainer = () => {
    return (
        <div className="testimonials-page">
            <NavBar />
            <BannerCarousel />
            <TestimonialsPage />
            <NextSteps />
            <Footer />
        </div>
    );
};

export default TestimonialsPageContainer;