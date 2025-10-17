import { createContext, useContext, useState } from 'react'
import './App.css'


type ContextType = {
  user: string | null,
  isLoggedIn: boolean,
  logIn: () => void,
  logOut: () => void,
}

const MyContext = createContext<ContextType | null>(null)
function App() {
  const [user, setUser] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function logIn() {
    setIsLoggedIn(true)
  }

  function logOut() {
    setIsLoggedIn(false)
  }

  const value: ContextType = { user, isLoggedIn, logIn, logOut }

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  )
}

function ChildComponent() {
  const contextData = useContext(MyContext)

  if (!contextData) {
    return <div>No context data available</div>
  }

  return (
    <>
      {contextData && JSON.stringify(contextData)}
    </>
  )
}

export default App
