import { useEffect, useState } from 'react'
import './App.css'

type User = {
  name: string,
  age: number
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser({name: "Beka", age: 16})
    setLoading(false)
  }, []) 

  return (
    <>
      {!loading && user && user.name}
      {/* {JSON.stringify(user?.name)} */}
    </>
  )
}

export default App
