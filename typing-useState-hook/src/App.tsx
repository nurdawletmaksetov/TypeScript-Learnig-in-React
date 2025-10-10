import { useState } from 'react'
import './App.css'

type User = {
  name: string,
  age: number
}

function App() {

  const [count, setCount] = useState<User | null>(null)

  return (
    <>
      {count}
    </>
  )
}

export default App
