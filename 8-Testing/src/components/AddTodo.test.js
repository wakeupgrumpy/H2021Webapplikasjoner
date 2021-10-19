import { render, fireEvent, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

const TEST_STRING = "This is a new todo";

beforeEach(() => {
  const todoHandler = jest.fn();
  render(<AddTodo todoHandler={todoHandler} />);
});

describe("The AddTodo-component", () => {
  it("Renders a input field", () => {
    expect(document.querySelector("input")).toBeInTheDocument();
  });
  it("Renders a button that is disabled", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe("Component behaviour", () => {
  it("The button should become enabled if input has a value", () => {
    const input = document.querySelector("input");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: TEST_STRING } });

    expect(button.getAttribute("disabled")).toBeFalsy();
  });

  it("Should clear input when todo is added", () => {
    const input = document.querySelector("input");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: TEST_STRING } });
    expect(input).toHaveValue(TEST_STRING);

    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
