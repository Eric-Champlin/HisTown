
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BannerCarousel.css";

const BannerCarousel: React.FC = () => {
    const images = [
        {
            src: "https://i.imgur.com/poLiUHv.png",
            alt: "Dance studio performance"
        },
        {
            src: "https://i.imgur.com/poLiUHv.png",
            alt: "Dance recital showcase"
        },
        {
            src: "https://i.imgur.com/poLiUHv.png",
            alt: "Student dance performance"
        }
    ];

    return (
        <div>
            <Carousel
                {...({
                    showArrows: true,
                    autoPlay: true,
                    infiniteLoop: true,
                    showThumbs: false,
                    showStatus: false,
                    className: "homepage-banner",
                    interval: 3000,
                } as any)}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerCarousel;