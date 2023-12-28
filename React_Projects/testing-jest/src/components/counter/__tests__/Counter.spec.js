import { render, screen } from "@testing-library/react";
import Counter from "../Counter";
import renderer from "react-test-renderer";
// import cypress from "cypress";

describe("The counter component", () => {
  test("It should have a title", () => {
    render(<Counter />);

    const heading = screen.getByText(/Counter/i);
    expect(heading).toBeInTheDocument();
  });

  test("It should have a counter", () => {
    render(<Counter />);

    const countDisplay = screen.getByTestId("count-display");
    expect(countDisplay).toBeInTheDocument();
  });

  // test("spy test", () => {
  //   const handler = (...args) => console.log(args);
  //   const spy = jest.fn(handler);
  //   render(<Counter spy={spy} />);
  // });

  test("renders correctly", () => {
    const tree = renderer.create(<Counter />);
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <h1>
          My Counter
        </h1>
        <p
          data-testid="count-display"
        />
      </div>
    `);
  });
});
