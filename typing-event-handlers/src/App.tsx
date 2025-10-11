import './App.css'

function App() {

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

  }

  return (
    <>
      <button onClick={(e) => handleClick(e)}>
        Click Me!
      </button>
    </>
  )
}

export default App
