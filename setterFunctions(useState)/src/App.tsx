import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState()

  return (
    <>
      <Card setCount={setCount} />
    </>
  )
}

export default App
