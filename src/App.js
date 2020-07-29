import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment =>{
    setCount(count + increment)
  }
  return (
    <div className="App">
      <h1>Counter with React</h1>
      <div className="btn-container">
        <Button increment={1} onClickFunction={incrementCount}/>
        <Button increment={5} onClickFunction={incrementCount}/>
        <Button increment={10} onClickFunction={incrementCount}/>
        <Button increment={15} onClickFunction={incrementCount}/>
        <Button increment={20} onClickFunction={incrementCount}/>
      </div>
      <span>Total: {count}</span>
    </div>
  );
}

export default App;
