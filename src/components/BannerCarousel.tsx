
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BannerCarousel.css";

interface BannerCarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
    interval?: number;
}

const BannerCarousel: React.FC<BannerCarouselProps> = () => {

    return (
        <div className="banner-carousel">
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
                <div>
                    <img
                        src="https://i.imgur.com/poLiUHv.png"
                        alt="Dance studio performance"
                    />
                </div>
                <div>
                    <img
                        src="https://i.imgur.com/poLiUHv.png"
                        alt="Dance recital showcase"
                    />
                </div>
                <div>
                    <img
                        src="https://i.imgur.com/poLiUHv.png"
                        alt="Student dance performance"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default BannerCarousel;