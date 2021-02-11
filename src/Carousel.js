import "./Carousel.css";
import { useState, useEffect } from "react";
import CarouselSlide from "./CarouselSlide";
import { ArrowLeft, ArrowRight } from "./Arrow";
import content from "./data/content.json";

export default function Carousel() {
    const [slides, setSlides] = useState([
        content[content.length - 1],
        ...content.slice(0, -1),
    ]);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [animate, setAnimate] = useState("0");
    const [slideDisabled, setSlideDisabled] = useState(false);
    const [width, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const calcVisibleSlides = () => {
        switch (true) {
            case width <= 688:
                return 1;
            case width <= 1312:
                return 2;
            default:
                return 3;
        }
    };

    const [visibleSlides, setVisibleSlides] = useState(calcVisibleSlides());

    useEffect(() => {
        setVisibleSlides(calcVisibleSlides());
    }, [width]);

    const slideLeft = () => {
        if (!slideDisabled) {
            setSlides([...slides.slice(1), slides[0]]);
            setAnimate("left");
            setSlideDisabled(true);
        }
    };

    const slideRight = () => {
        if (!slideDisabled) {
            setSlides([slides[slides.length - 1], ...slides.slice(0, -1)]);
            setAnimate("right");
            setSlideDisabled(true);
        }
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
                {slides.slice(0, visibleSlides).map((slide, index) => (
                    <CarouselSlide
                        content={slide}
                        key={index}
                        handleTouchStart={handleTouchStart}
                        animate={animate}
                        setAnimate={setAnimate}
                        setSlideDisabled={setSlideDisabled}
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
