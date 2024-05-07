import { useState } from 'react'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = (i: number) => {
    setCount(count + i)
  }

  return (
    <>
      <h1>FUck you {count}</h1>
      <button onClick={() => increaseCount(4)}>Increase Fuck</button>
      <Home />
    </>
  )
}

export default App
