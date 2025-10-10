import './App.css'
import Card from './components/Card'

function App() {

  function alertMessage(message: string) {
    alert(message)
  }

  return (
    <>
      <Card alertMessage={alertMessage} />
    </>
  )
}

export default App
