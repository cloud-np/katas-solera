import { useState } from 'react'
import { lampSecond, get5Hours, getSingleHour, getSingleMinutes, get5Minutes } from './clock'
import './App.css'

function App() {
  const [time, setTime] = useState(null)
  const [showConvertedTime, setShowConvertedTime] = useState({
    "lampSecond": null,
    "hours5": null,
    "singleHour": null,
    "minutes5": null,
    "singleMinutes": null
  })
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${hours}:${minutes}:${seconds}`, seconds)
    // console.log(lampSecond(seconds))
    // console.log(get5Hours(hours))
    // console.log(getSingleHour(hours))
    // console.log(get5Minutes(minutes))
    // console.log(getSingleMinutes(minutes))
    setTime(`${lampSecond(seconds)}${get5Hours(hours)}${getSingleHour(hours)}${get5Minutes(minutes)}${getSingleMinutes(minutes)}`)
    setShowConvertedTime({
      "lampSecond": lampSecond(seconds),
      "hours5": get5Hours(hours),
      "singleHour": getSingleHour(hours),
      "minutes5": get5Minutes(minutes),
      "singleMinutes": getSingleMinutes(minutes)
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'seconds') setSeconds(e.target.value)
    else if (e.target.name === 'minutes') setMinutes(e.target.value)
    else if (e.target.name === 'hours') setHours(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <h2>Lamp Second: {showConvertedTime['lampSecond']}</h2>
        <h2>Hour 5: {showConvertedTime['hours5']}</h2>
        <h2>Signle Hour: {showConvertedTime['singleHour']}</h2>
        <h2>Minutes 5: {showConvertedTime['minutes5']}</h2>
        <h2>Minutes: {showConvertedTime['singleMinutes']}</h2>
      </div>
      <div>
        <h3>{time}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="hours" type="number" min="0" max="23" />
        <input onChange={handleChange} name="minutes" type="number" min="0" max="59" />
        <input onChange={handleChange} name="seconds" type="number" min="0" max="59" />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App
