import Link from "next/link"
import User from "../../components/User"

const userList = ({ users }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>users List</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        )
      })}
    </>
  )
}

export default userList

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return {
    props: {
      users: users,
    },
  }
}
