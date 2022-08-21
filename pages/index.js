import Head from "next/head"
import ArticleList from "../components/ArticleList"

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev PRG</title>
        <meta name="keywords" content="web dewelopment,programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
