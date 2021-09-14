import React from 'react';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import './styles.scss';

const App = () => {

  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <>
      <h1>The magic happens here</h1>
      <MyComponent title={'It Works!'} />
      <Food food={food}/>
    </>
  );
}

export default App;
