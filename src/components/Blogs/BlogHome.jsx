import React from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'

export default function BlogHome() {

      const blogdata =  [
  {
    "id": 1,
    "category": "Software",
    "date": "August 11, 2020",
    "title": "20 Questions You Should Always Ask About Security Software Before Buying It.",
    "image": "/images/large-thumb-3.jpg",
    "slug": "security-software-questions"
  },
  {
    "id": 2,
    "category": "Technology",
    "date": "September 2, 2020",
    "title": "How Artificial Intelligence Is Revolutionizing Modern Business Operations.",
    "image": "/images/large-thumb-2.jpg",
    "slug": "ai-revolution-business"
  },
  {
    "id": 3,
    "category": "Development",
    "date": "October 10, 2020",
    "title": "10 Best Practices for Writing Clean and Scalable React Code.",
    "image": "/images/large-thumb-1.jpg",
    "slug": "react-clean-code"
  }
]

  return (
    <div className='blog_home'>
    <div className="container">
        <div className=" clearfix">
            <div className="heading-wrapper d-flex justify-content-between ">
              <h2 className="h1">Blogs</h2>
              <div className="lead-text">
                <Link href="/blog" className="btn btn-primary btn-lg">
                  View All
                </Link>
              </div>
            </div>
        </div>
        <div className="row clearfix">
          <div className="news-grid column-3">
            {blogdata.map((item)=>(
                    <BlogCard data={item} key={item.id}/>
                  ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}
