
type CardProps = {
    setCount: 
}
export default function Card({setCount}: CardProps) {
  return (
    <div>
        <button onClick={() => setCount((count:number) => count + 1)}>Click Me!</button>
    </div>
  )
}
