import React from "react";
import "./Testimonials.css";

import Footer from "../components/Footer";

import NextSteps from "../Hooks/useInViewNextSteps";

import Testimonials from "../Hooks/useInViewTestimonials";

const TestimonialsPage = () => {
    return (
        <div>
            <Testimonials />
            <NextSteps />
            <Footer />
        </div>
    );
};

export default TestimonialsPage;