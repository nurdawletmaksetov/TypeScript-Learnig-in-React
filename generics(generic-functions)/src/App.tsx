import './App.css'
import useFetch from './useFetch'

type User = {
  name: string,
  age: number
}

type BlogPost = {
  title: string,
  description: string,
  posted: Date
}

function App() {

  const user = useFetch<User>("blahblahblehblehbleh")
  const blogPost = useFetch<BlogPost>("blahblahblehblehbleh")

  return (
    <>
    </>
  )
}

export default App
