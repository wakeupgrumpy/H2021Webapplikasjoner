import { useState } from 'react';
import Alert from './components/Alert';
import Food from './components/Food';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import './styles.scss';

const App = () => {

  const food = ['Pizza', 'Hamburger', 'Coke'];
  
  const [inputFromChild, setInputFromChild] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Wrapper>
      <MyComponent title={'☠️ It Works!'} />
      <Food food={food} />
      <Alert inputFromChild={setInputFromChild} isClicked={setIsClicked}/>
      {isClicked && (
        <p>{inputFromChild}</p>
      )}
    </Wrapper>
  );
}

export default App;
