import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import fetch from 'isomorphic-unfetch'

export default function BloggList({ posts }) {
    console.log(posts)

    return(
        <>
        <div className="max-w-full px-6 py-16 mx-auto text-center bg-gray-800">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-white md:text-4xl">Omnidig Blogg</h1>
                <p className="mt-6 text-white">Här hittar du alla våra artiklar om digital marknadsföring, med fokus på SEO och webbanalys!</p>
            </div>
        </div>

        <section className='container px-6 py-16 mx-auto text-center'>
            <div>
                <h2 className="text-2xl font-semibold text-gray-800 uppercase">Våra senaste artiklar</h2>
                <div className='container'>
                    {posts.data.map(post => (
                        <p>{post.attributes.title}</p>
                    ))}
                </div>
            </div>
            
        </section>
        </>
    )
}

export async function getServerSideProps() {
    const { STRAPI_API_URL } = process.env

    const res = await fetch(`${STRAPI_API_URL}/api/posts?populate=*`)
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}