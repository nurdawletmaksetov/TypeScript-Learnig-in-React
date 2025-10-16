import './App.css'

function App() {

  const numbers = [1, 2, 3] as const
  numbers[1] = 5
  //Cannot assign to '1' because it is a read-only property

  const myObj = {age: 20} as const
  myObj.age = 9
  //Cannot assign to 'age' because it is a read-only property

  return (
    <>
    </>
  )
}

export default App
