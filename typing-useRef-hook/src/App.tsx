import { useRef } from 'react'
import './App.css'

function App() {

  const myRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={myRef}>
        Click Me!
      </button>
      // if you change the button to an anchor tag, also change the type in useRef
    </>
  )
}

export default App
