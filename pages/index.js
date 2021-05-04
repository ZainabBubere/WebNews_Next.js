import Head from 'next/head'
import ArticleList from "../components/ArticleList";
import Meta from '../components/Meta'

export default function Home({articles}) {
  return (
    <div>
      <Meta title = 'WebDev News | Home'></Meta>
      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()

  return {
    props : {
      articles
    }
  }
}
