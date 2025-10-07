import './App.css'

type User = {
  name: string,
  age: number,
  isAdmin?: boolean
}

function App() {

  function doSomething(x: string[]) {
    x[1] = "Youtube"
  }

  return (
    <>

    </>
  )
}

export default App
