import Link from "next/link"

const userList = ({ users }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>users List</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`users/${user.id}`} passHref>
              <h4>{user.name}</h4>
            </Link>
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
      users: users.slice(0, 5),
    },
  }
}
