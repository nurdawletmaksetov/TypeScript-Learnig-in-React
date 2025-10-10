
type CardProps = {
  color: "red" | "blue" | "purple"
}

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500"
}

export default function Card({color}: CardProps) {
  return (  
    <div className={colorMap[color]}>
        Hello
    </div>
  )
}
