
type CardProps = {
    alertMessage:(message:string) => void
}

export default function Card({alertMessage}: CardProps) {
  return (
    <div>
        <button onClick={() => alertMessage("Hi YouTuber")}>Click Me!</button>
    </div>
  )
}
