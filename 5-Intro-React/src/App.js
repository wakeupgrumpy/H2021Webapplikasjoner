import React from 'react';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import './styles.scss';

const App = () => {

  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <Wrapper>
      <h1>The magic happens here</h1>

      <MyComponent title={'It Works!'} />
      <Food food={food} />
    </Wrapper>
  );
}

export default App;
