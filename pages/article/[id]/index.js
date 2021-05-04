import {useRouter} from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <div>
            <Meta title = {`WebDev News | Article ${article.id}`}></Meta>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br></br>
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export const getStaticProps = async(context) => {
    const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props : {
            article
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch(`http://localhost:3000/api/articles`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback : false
    }
}

export default article
