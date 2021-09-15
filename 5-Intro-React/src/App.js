import React, { useState } from 'react';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import './styles.scss';

const App = () => {

  const food = ['Pizza', 'Hamburger', 'Coke'];

  const [state, setSate] = useState('');

  const buttonClicker = () => console.log(state);
  const inputChanged = (e) => {
    console.log("Change");
    setSate(e.target.value)
  }


  return (
    <Wrapper>
      <h1>The magic happens here</h1>

      <MyComponent title={'It Works!'} />
      <Food food={food} />

      <button type='button' onClick={buttonClicker}>Click me</button>
      <input type='text' value={state} onChange={inputChanged}/>
    </Wrapper>
  );
}

export default App;
