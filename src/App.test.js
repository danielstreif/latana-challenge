import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header title", () => {
    render(<App />);
    const Element = screen.getByText(/Latana Knowledge Center/i);
    expect(Element).toBeInTheDocument();
});
