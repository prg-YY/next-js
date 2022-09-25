import React from "react"

const UserId = ({ user }) => {
  return (
    <>
      <h2>
        {user.name} {user.username}
      </h2>
      <p>{user.email}</p>
    </>
  )
}

export default UserId

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { userId: "1" },
      },
      {
        params: { userId: "2" },
      },
      {
        params: { userId: "3" },
      },
      {
        params: { userId: "4" },
      },
      {
        params: { userId: "5" },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  )
  const data = await response.json()

  return {
    props: {
      user: data,
    },
  }
}
