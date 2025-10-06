import './App.css'

function App() {

  function doSomething(x: number, y: string, z: boolean) {
    x.toFixed();
    y.toUpperCase();
    z.toString();
  }

  return (
    <>
      <button onClick={() => doSomething(1, 'a', true)}>Click</button>
    </>
  )
}

export default App
