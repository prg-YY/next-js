import Link from "next/link"
import React from "react"

const PostsList = ({ posts }) => {
  return (
    <>
      <h1>Post List</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h4>
                {post.id} {post.title}
              </h4>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostsList

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return {
    props: {
      posts: data,
    },
  }
}
