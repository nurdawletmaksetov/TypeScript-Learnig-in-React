
type CardProps = {
    user: User
}

type User = {
    name: string,
    age: number
}

export default function Card({ user }: CardProps) {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}
