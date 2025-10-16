import React from 'react'

export default function BlogSidebar({blogdata}) {

  return (
    <div className="col-lg-4">
              <div className="sidebar right-side">              
                <div className="widget widget_recent_entries">
                  <div className="widget-title">
                    <h3 className="title">Recent Post</h3>
                  </div>
                  <ul className="st-recent-posts">
                    {blogdata.slice(0,3).map((item)=>(
                      <li className="rp-item" key={item.id}>
                      <a href={`/blogs/${item.slug}`}>

                        <div className="article-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="article-details">
                          <h4 className="entry-title">
                            {item.title}
                          </h4>
                          <span className="rp-date">{item.date}</span>
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
                        <a
                          target="_blank"
                          href="https://www.facebook.com"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://twitter.com"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  )
}
