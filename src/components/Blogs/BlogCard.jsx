import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

export default function BlogCard( data) {
  console.log(data)

  return (
    <div className="article-block category-software">
        <div className="inner-box">
            <div className="article-img">
                <Link href={`/blog/${data.data.slug}`}>
                    <Image src={data.data.image} alt="" width={370} height={250} />
                </Link>
            </div>
            <div className="article-details">
                <div className="post-meta">
                    <span className="entry-meta entry-category">
                        <Link href={`/blog/${data.data.slug}`}>{data.data.category}</Link>
                    </span>
                    <span className="entry-meta entry-date">
                        <Link href={`/blog/${data.data.slug}`}>{data.data.date}</Link>
                    </span>
                </div>
                <h2 className="entry-title"><Link href={`/blog/${data.data.slug}`}>{data.data.title}</Link></h2>
            </div>
        </div>
    </div>
  )
}
