// import { useState } from 'react';
import './App.css'
import Card from "./card/card";
import './cards.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="playingCards faceImages">
      <Card rank="9" suit="♦" />
    </div>
  )
}

export default App
