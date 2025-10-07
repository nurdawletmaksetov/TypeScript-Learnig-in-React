
    type CardProps = {
        text: string,
        count: number
    }

export default function Card({text, count}: CardProps) {

    text.toLowerCase();

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <span>
            {text}
        </span>
        <span>
            {count}
        </span>
    </div>
  )
}
