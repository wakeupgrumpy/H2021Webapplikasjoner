import { render, fireEvent } from "@testing-library/react";
import Task from "./Task";

const TEST_TODO = "Buy pineapple 🍍 for my pizza 🍕";

beforeEach(() => {
  render(<Task todo={TEST_TODO} />);
});

it("Should render a li-element with text", () => {
  expect(document.querySelector("li")).toHaveTextContent(TEST_TODO);
});

it("Should add class 'done' when clicked", () => {
  const todo = document.querySelector("li");

  expect(todo.className).toBe("");
  fireEvent.click(todo);
  expect(todo.className).toContain("done");
});
