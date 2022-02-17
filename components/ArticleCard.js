import dayjs from "dayjs"
import Link from "next/link"

function ArticleCard ({ post }) {
    const { NEXT_PUBLIC_STRAPI_URL } = process.env
    
    const postDate = post.attributes.published_date
    const readableDate = dayjs(postDate).format('D MMM, YYYY')

    return (
        <div className="p-2 lg:p-10">  
        <Link href={ post.attributes.slug }>
            <a>   
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={NEXT_PUBLIC_STRAPI_URL + post.attributes.featured_img.data.attributes.url} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ post.attributes.title }</div>
                <p className="text-gray-700 text-base">{ post.attributes.excerpt }</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ post.attributes.category }</span>
               
            </div>
            </div>
            </a>
        </Link>
        </div>
    )
}

export default ArticleCard