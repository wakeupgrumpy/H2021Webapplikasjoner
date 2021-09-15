import React, { useState } from 'react';

const Alert = ({inputFromChild, isClicked}) => {

    const [state, setSate] = useState('');

    const buttonClicker = () => {
      isClicked(Boolean(state));
      inputFromChild(state)
    }
    const inputChanged = (e) => {
      console.log("Change");
      setSate(e.target.value)
    }

    return (
      <div>
        <button type='button' onClick={buttonClicker}>Click me</button>
        <input type='text' value={state} onChange={inputChanged}/>
      </div>
    )
}

export default Alert;