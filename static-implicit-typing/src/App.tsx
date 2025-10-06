import './App.css'

function App() {

  let x: number = 0

  x = 10

  let y: boolean = true

  // y = false

  let z: string = 'Hello World'

  // z = 'Bye World'

  return (
    <>
      <p>{x}</p>
      <p>
        {y ? 'true' : 'false'}
      </p>
      <p>
        {z}
      </p>
    </>
  )
}

export default App
