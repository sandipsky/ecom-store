import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const increaseCount = (i: number) => {
    setCount(count + i)
  }

  return (
    <>
      <h1>FUck you {count}</h1>
      <button onClick={() => increaseCount(4)}>Increase Fuck</button>
    </>
  )
}

export default App
