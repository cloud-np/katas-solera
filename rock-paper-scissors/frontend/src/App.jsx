import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [pcScore, setPCScore] = useState(0)
  const [roundWon, setRoundWon] = useState("")
  const [whatPcPlayed, setWhatPcPlayed] = useState("")

  const handleClick = async (e) => {
    let data = null;

    await axios.get('http://localhost:4000/getWinner/' + e.target.innerHTML.toLowerCase()).then(res => data = res.data)
    console.log(data)
    setPlayerScore(data[2])
    setPCScore(data[3])
    setRoundWon(data[0])
    setRoundWon(data[0])
    setWhatPcPlayed(data[1])
    // setPCScore(data.)
  }

  return (
    <div className="App">
      <div className='scores'>
        <h1>{roundWon}</h1>
        <h2>PC played: {whatPcPlayed}</h2>
        <h4>Player Score: {playerScore}</h4>
        <h4>PC Score: {pcScore}</h4>
      </div>
      <button onClick={handleClick}>Rock</button>
      <button onClick={handleClick}>Paper</button>
      <button onClick={handleClick}>Scissors</button>
    </div>
  )
}

export default App
