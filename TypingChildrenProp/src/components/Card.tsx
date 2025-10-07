
type CardProps = {
    children: React.ReactNode
}

export default function Card({children}: CardProps) {
    return (
        <div>
            <span>{children}</span>
        </div>
    )
}
