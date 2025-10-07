
type CardProps = {
    text: string
    count?: number
}

export default function Card({ text, count }: CardProps) {
    return (
        <div className="card" style={{ background: "red", border: "1px solid black" }}>
            <span>{text}</span>
            <p>{count}</p>
        </div>
    )
}
