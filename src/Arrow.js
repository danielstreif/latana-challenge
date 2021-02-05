import "./Arrow.css";
import { useState } from "react";

export function ArrowLeft() {
    const [focus, setFocus] = useState(false);

    return (
        <div
            onMouseEnter={() => setFocus(!focus)}
            onMouseLeave={() => setFocus(!focus)}
            className="arrow left"
        >
            <img
                src={`/icons/arrow_left${focus ? "_hover" : ""}.svg`}
                alt="arrow left"
            />
        </div>
    );
}

export function ArrowRight() {
    const [focus, setFocus] = useState(false);

    return (
        <div
            onMouseEnter={() => setFocus(!focus)}
            onMouseLeave={() => setFocus(!focus)}
            className="arrow right"
        >
            <img
                src={`/icons/arrow_right${focus ? "_hover" : ""}.svg`}
                alt="arrow right"
            />
        </div>
    );
}
