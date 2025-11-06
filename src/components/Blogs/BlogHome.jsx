"use client";
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'
import { getBlogs } from '@/ApiCall/blogApi';

export default function BlogHome() {


   const [blogPosts, setblogPosts] = useState([]);



  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      // console.log("✅ First  blogdata:", data);
      if (data?.status === "success") {
        setblogPosts(data.data || []);
      }
    }

    fetchData();
  }, []);




// const blogPosts = getBlogs();

// console.log("blogs" , blogPosts)

  return (
    <div className='blog_home'>
    <div className="container">
        <div className=" clearfix">
            <div className="heading-wrapper d-flex justify-content-between ">
              <h2 className="h1">Blogs</h2>
              <div className="lead-text">
                <Link href="/blogs" className="btn btn-primary btn-lg">
                  View All
                </Link>
              </div>
            </div>
        </div>
        <div className="row clearfix">
          <div className="news-grid column-3">
            {blogPosts?.data?.slice(0,3).map((item)=>(
              <BlogCard data={item} key={item.id}/>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}
