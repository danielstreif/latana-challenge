import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Latana Knowledge Center/i);
    expect(linkElement).toBeInTheDocument();
});
