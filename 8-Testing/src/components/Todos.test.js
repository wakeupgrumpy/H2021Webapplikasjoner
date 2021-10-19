import { render } from "@testing-library/react";
import Todos from "./Todos";

const TEST_LIST = ["Buy pineapple 🍍 for my pizza 🍕", "Buy a skarf for my 🦒"];

it("Should be empty if no child components", () => {
  render(<Todos></Todos>);
  expect(document.querySelector("ul").innerHTML).toBe("");
});

it("Should render child componens", () => {
  render(
    <Todos>
      {TEST_LIST.map((todo, id) => (
        <li key={id}>{todo}</li>
      ))}
    </Todos>
  );

  expect(document.querySelectorAll("li").length).toBe(2);
});
