import React, { useState } from 'react';

const Alert = () => {

    const [state, setSate] = useState('');

    const buttonClicker = () => console.log(state);
    const inputChanged = (e) => {
      console.log("Change");
      setSate(e.target.value)
    }

    return (
        <>
            <button type='button' onClick={buttonClicker}>Click me</button>
            <input type='text' value={state} onChange={inputChanged}/>
        </>
    )
}

export default Alert;