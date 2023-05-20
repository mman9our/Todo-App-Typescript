import { render, screen } from "@testing-library/react";
import Middle from "./Middle";

describe("Middle component", () => {
  it("renders correctly", () => {
    // Render the Middle component
    render(<Middle />);

    // Check if the component is rendered
    const middleElement = screen.getByTestId("middle-component");
    expect(middleElement).toBeInTheDocument();
  });
});
