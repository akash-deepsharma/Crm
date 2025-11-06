import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function BlogCard( data) {
   const blogData = data
//    console.log("blogData", blogData)

  return (
    <div className="article-block category-software">
        <div className="inner-box">
            <div className="article-img">
                <Link href={`/blogs/${data?.data?.slug}`}>
                    <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${data?.data?.featured_image}`} alt={data.data.title} width={370} height={250} />
                </Link>
            </div>
            <div className="article-details">
                <div className="post-meta">
                    <span className="entry-meta entry-category">
                        <Link href={`/blogs/${data?.data?.slug}`}>{data?.data?.category?.name}</Link>
                    </span>
                    <span className="entry-meta entry-date">
                        <Link href={`/blogs/${data?.data?.slug}`}>{new Date(data?.data?.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        })}</Link>
                    </span>
                </div>
                <h2 className="entry-title"><Link href={`/blogs/${data.data.slug}`}>{data.data.title}</Link></h2>
            </div>
        </div>
    </div>
  )
}
