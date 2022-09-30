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
      <br />
      <Link href="/character">
        <a>Character</a>
      </Link>
      <br />
      <Link href="/news">
        <a>News</a>
      </Link>
      <br />
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <br />
      <Link href="/events">
        <a>Events</a>
      </Link>
    </>
  )
}

export default Home
