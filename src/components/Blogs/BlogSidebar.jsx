
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogSidebar({blogdata}) {
console.log( "blog data", blogdata)
  return (
              <div className="sidebar right-side">              
                <div className="widget widget_recent_entries">
                  <div className="widget-title">
                    <h3 className="title">Recent Post</h3>
                  </div>
                  <ul className="st-recent-posts">
                    {blogdata?.data.slice(0,3).map((item)=>(
                      <li className="rp-item" key={item.id}>
                      <a href={`/blogs/${item.slug}`} className='d-flex'>

                        <div className="article-img">
                          <Image src={`${process?.env?.NEXT_PUBLIC_MEDIA_PATH}/${item?.featured_image}`} alt=""  width={400} height={400}/>
                        </div>
                        <div className="article-details">
                          <h4 className="entry-title">
                            {item.title}
                          </h4>
                          <span className="rp-date">
                              {new Date(item?.created_at).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                          </span>
                        </div>
                      </a>
                    </li>
                    ))}
                    
                  </ul>
                </div>

                <div className="widget widget_social">
                  <div className="widget-title">
                    <h3 className="title">Follow Us</h3>
                  </div>
                  <div className="social-media-links">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.facebook.com"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.instagram.com"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="https://twitter.com"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
  )
}
