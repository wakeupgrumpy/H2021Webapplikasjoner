# Intro React


### :clipboard: Tasks

- [x] ~~**Basic Component**~~

  Create a component called `<MyComponent>` in the components folder and render a `<h1>My First Component</h1>` Use MyComponent in App.js

- [x] ~~**Basic Prop**~~

  Add a "title" prop on MyComponent and make it render "It Works"

- [x] ~~**Passing props to a child component**~~

  Refactor the `<h1>` in `<MyComponent>` to be a `<Title>` component. It should render "It Works". Refactor means that the `<h1>` should live inside the newly created `<Title>` component

- [x] ~~**Lists**~~

  Create an array `const food = ['Pizza', 'Hamburger', 'Coke'];` Render `<ul><li></li></ul>` in App.js by using `food.map()` inside the return (). Remember to add a key to `<li>`. Remember to add this inside App.js. Not as a seperate function.

- [x] ~~**Lists Component**~~

  Create a `<Food>` component. Use this in App.js. Add "food"-prop to the `<Food>` component. Render the food list (`<ul><li></li></ul>` from above) inside the `<Food>` component by using props. (Send the food array as prop).

- [x] ~~**Children prop**~~
  
  Create a `<Wrapper>` component with a `<section></section>`. Add this to App.js
Make it possible to render children between the `<Wrapper></Wrapper>` component. Use (props.children) in the `<Wrapper>` component.

- [x] ~~**Styling**~~
  
  Add (`className='flex'`) the `<section>` in `<Wrapper>` to flex the items on `<Wrapper>`. Add necessary styling to the styles.scss

- [x] ~~**Event**~~
  
  Add a `<button>` to App.js. Listen to click-event on this button. `console.log("Clicked")` when clicking the button.

- [x] ~~**Input**~~
  
  Add an input field to App.js. Listen to change-event on this field `console.log("change")` when writing in this input.

- [x] ~~**Make the input field controlled (state)**~~

  Use useState to store the input value. And add the `value={state}` to the input field to make it (controlled).

- [x] ~~**Combine the button and input**~~

  When clicking the button above alert (or console.log) the content of the inputfield.

- [x] ~~**Refactor button and input**~~

  Create an `<Alert>` component. Add this to App.js. Move the `<input>`, `<button>` and state from above to this component

- [x] ~~**Callback (lift state) (sending a functions as a prop)**~~
  
  Add a `const [inputFromChild, setInputFromChild] = useState('')` hook in App.js.

  Send `setInputFromChild` function as prop to `<Alert>` from App.js.

  Use the function that you send as a prop inside `<Alert>`. This fuctions should update the newly created `inputFromChild` in App.js.

  Render the input value in App.js as `<p>{inputFromChild}</p>` when the button in `<Alert>` is clicked.

  To do this you must have state (`isClicked`) that is updated when the button is clicked (`true` / `false`). This `setIsClicked` must be sent as a prop where we listen to `buttonclick`.

  Use conditional around the `<p></p>` to only write out the message when the state is true.
