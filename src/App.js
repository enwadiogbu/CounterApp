import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(20);

  return (
    // using Fragments instead of a div
    <> 
      <h2 style={{color: 'whitesmoke'}}>COUNTER APP</h2>
      <h1 style={{color: 'red'}}>{count}</h1>
      
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>-</button>
    </>

    

  )
}

export default App;
