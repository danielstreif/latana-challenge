import "./Carousel.css";
import { useState } from "react";
import CarouselSlide from "./CarouselSlide";
import { ArrowLeft, ArrowRight } from "./Arrow";
import content from "./data/content.json";

export default function Carousel() {
    const [slides, setSlides] = useState(content);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [animate, setAnimate] = useState(true);

    const slideRight = () => {
        setSlides([...slides.slice(1), slides[0]]);
        setAnimate("1");
    };

    const slideLeft = () => {
        setSlides([slides[slides.length - 1], ...slides.slice(0, -1)]);
        setAnimate("1");
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            slideRight();
        }

        if (touchStart - touchEnd < -150) {
            slideLeft();
        }
    };

    return (
        <>
            <div
                className="carousel-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <CarouselSlide
                        content={slide}
                        key={index}
                        handleTouchStart={handleTouchStart}
                        animate={animate}
                        setAnimate={setAnimate}
                    />
                ))}
            </div>
            <div className="arrow-container">
                <ArrowLeft slideLeft={slideLeft} />
                <ArrowRight slideRight={slideRight} />
            </div>
        </>
    );
}
