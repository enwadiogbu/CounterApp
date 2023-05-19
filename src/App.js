import './App.css';
import { useState } from 'react';
import MyButton from './components/MyButton';
import Title from './components/Title';
import ProfileCard from './components/ProfileCard';
import profiles from './FakeDatabase';


function App() {
  const [count, setCount] = useState(20);

  return (
    // using Fragments instead of a div
    <> 
      <Title style={{color: 'whitesmoke'}}/>
      <h2 style={{color: 'whitesmoke'}}>COUNTER APP</h2>
      <h1 style={{color: 'red'}}>{count}</h1>
      
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>-</button>
      <MyButton title='BUY 🚀' color = 'red' />
      <MyButton title='SELL 🚀' color = 'yellow'/>
      {profiles.map(profile => (
        <ProfileCard 
          image={profile.image} 
          title={profile.title} 
          name={profile.name} 
          description={profile.description} />
      ))}

    </>

// Learned how to create my own component using ES6 props - MyButton.js component
    

  )
}

export default App;
