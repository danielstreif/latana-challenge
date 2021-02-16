import "./App.css";
import Carousel from "./Carousel";

function App() {
    return (
        <div className="app">
            <div className="title-container">
                <h1 className="title">Latana Knowledge Center</h1>
                <p className="sub-title">
                    Everything you need to know about the best brand tracking
                    solution in the world.
                </p>
            </div>
            <Carousel />
        </div>
    );
}

export default App;
