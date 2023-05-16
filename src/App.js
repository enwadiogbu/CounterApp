import './App.css';


function counter(){
  alert('You clicked Me!');
}

function App() {
  const myAge = 20;

  return (
    <>
      <h2 style={{color: 'red'}}>Hello, I am {myAge}</h2>
      <button onClick={() => alert('You clicked the + button')}>+</button>
      <button onClick={() => alert('You clicked the - button')}>-</button>
    </>

    

  )
}

export default App;
