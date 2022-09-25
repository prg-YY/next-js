import Link from "next/link"
const Home = () => {
  return (
    <>
      <h1>pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  )
}

export default Home
