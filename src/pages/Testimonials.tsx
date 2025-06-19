import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NextSteps from "../Hooks/useInViewNextSteps";
import BannerCarousel from "../components/BannerCarousel";
import Testimonials from "../Hooks/useInViewTestimonials.tsx";

const TestimonialsPage = () => {
    return (
        <div className="testimonials-page">
            <NavBar />
            <BannerCarousel />


            <NextSteps />
            <Footer />
        </div>
    );
};

export default TestimonialsPage;