import './App.css'

type User = {
  name: string,
  age: number | string,
  isAdmin?: boolean
}

function App() {

  function doSomething(x: (string | number)[]) {
    x[1] = "YouTube"
  }

  return (
    <>

    </>
  )
}

export default App
