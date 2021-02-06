import "./Carousel.css";
import { useState } from "react";
import CarouselSlide from "./CarouselSlide";
import { ArrowLeft, ArrowRight } from "./Arrow";
import content from "./data/content.json";

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const slideRight = () => {
        setIndex((index + 1) % content.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(content.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        <>
            <div className="carousel-container">
                <CarouselSlide content={content[index]} key={index} />
            </div>
            <div className="arrow-container">
                <ArrowLeft slideLeft={slideLeft} />
                <ArrowRight slideRight={slideRight} />
            </div>
        </>
    );
}
