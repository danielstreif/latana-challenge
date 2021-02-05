import "./CarouselSlide.css";
import Button from "./Button";

export default function CarouselSlide({ content }) {
    return (
        <div className="carousel-slide">
            <img
                className="slide-image"
                src={content.image}
                alt={content.title}
            />
            <h2 className="slide-title">{content.title}</h2>
            <ul className="slide-list">
                {content.text.map((headline, index) => (
                    <li className="slide-headline" key={index}>
                        {headline}
                    </li>
                ))}
            </ul>
            <Button text={content.button} />
        </div>
    );
}
