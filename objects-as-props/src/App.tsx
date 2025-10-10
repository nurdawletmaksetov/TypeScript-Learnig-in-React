import './App.css'
import Card from './components/Card'

function App() {

  const users = [
    {name: "Austin", age: 26},
    {name: "Carter", age: 24},
    {name: "Julia", age: 23},
  ]

  return (
    <>
      {users.map((user) => {
        return (
          <Card user={user} />
        )
      })}
    </>
  )
}

export default App
