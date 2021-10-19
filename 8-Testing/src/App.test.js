import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const TEST_LIST = ["Buy pineapple 🍍 for my pizza 🍕", "Buy a skarf for my 🦒"];

beforeEach(() => {
  render(<App />);
});

describe("Render app without any tasks", () => {
  it("Should contain a header", () => {
    expect(document.querySelector("header")).toHaveTextContent("the todo list");
  });

  it("Should contain a input field", () => {
    expect(screen.getByPlaceholderText("What todo?")).toBeInTheDocument();
  });

  it("Should contain a button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should not render a <ul>", () => {
    expect(document.querySelectorAll("ul").length).toBe(0);
  });
});

describe("Add tasks to todo list", () => {
  it("Should render a <ul> with <li> containing input-value when adding a task", () => {
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    fireEvent.change(input, { target: { value: TEST_LIST[0] } });
    fireEvent.click(button);

    expect(document.querySelectorAll("ul").length).toBe(1);
    expect(document.querySelector("li")).toBeInTheDocument();
    expect(document.querySelector("li")).toHaveTextContent(TEST_LIST[0]);

    fireEvent.change(input, { target: { value: TEST_LIST[1] } });
    fireEvent.click(button);

    expect(document.querySelectorAll("li").length).toBe(2);
    expect(document.querySelectorAll("li")[1]).toHaveTextContent(TEST_LIST[1]);
  });
});
