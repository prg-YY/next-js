import Link from "next/link"

const User = ({ user }) => {
  return (
    <div>
      <Link href={`users/${user.id}`} passHref>
        <h4>{user.name}</h4>
      </Link>
    </div>
  )
}

export default User
