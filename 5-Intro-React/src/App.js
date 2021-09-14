import React from 'react';
import MyComponent from './components/MyComponent';
import './styles.scss';

const App = () => {

  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <>
      <h1>The magic happens here</h1>
      <MyComponent title={'It Works!'} />
      <ul>
        {food.map(e => 
          <li key={e}>{e}</li>
        )}
      </ul>
    </>
  );
}

export default App;
