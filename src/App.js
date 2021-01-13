import React, {useState} from 'react';
import Message from './Message'
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(true);
  return (
    <div className={`container ${isMorning ? '' : 'dayLight'}`}>
        <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
        <Message counter = {count}/>
        <button onClick={() => setCount(++count)} className="button">Update Value</button>
        <button onClick={() => setMorning(!isMorning)} className="button">Change Day</button>
    </div>
  );
}

export default App;
