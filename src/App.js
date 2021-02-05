import "./App.css";
import CarouselSlide from "./CarouselSlide";
import { ArrowLeft, ArrowRight } from "./Arrow";
import content from "./data/content.json";

function App() {
    return (
        <div className="App">
            <h1 className="title">Latana Knowledge Center</h1>
            <p className="sub-title">
                Everything you need to know about the best brand tracking
                solution in the world.
            </p>
            <div className="carousel-container">
                {content.map((slide, index) => (
                    <CarouselSlide content={slide} key={index} />
                ))}
            </div>
            <div className="arrow-container">
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
    );
}

export default App;
