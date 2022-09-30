import Link from "next/link"

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <Link href="/sports">
        <a>Sports</a>
      </Link>
      <br />
      <Link href="/politcs">
        <a>Politcs</a>
      </Link>
      <br />
      <Link href="/world">
        <a>World</a>
      </Link>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default NewsArticleList

export async function getServerSideProps() {
  console.log("Pre-rendering News Articles")
  const res = await fetch("http://localhost:4000/news")
  const data = await res.json()
  return {
    props: {
      articles: data,
    },
  }
}
