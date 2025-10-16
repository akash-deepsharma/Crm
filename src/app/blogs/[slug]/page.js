import React from "react";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import BlogCard from "@/components/Blogs/BlogCard";
import BlogSidebar from "@/components/Blogs/BlogSidebar";

export default function page({ params }) {
  const blogdata = [
    {
      id: 1,
      category: "Software",
      date: "August 11, 2020",
      title:
        "20 Questions You Should Always Ask About Security You Should Always Ask About Security Software Before Buying It.",
      image: "/images/large-thumb-3.jpg",
      slug: "20-Questions-You-Should-Always-Ask-About-Security-You-Should-Always-Ask-About-Security-Software-Before-Buying-It",
      author: "Tech Alphonic Team",
      tags: [
        "Artificial Intelligence",
        "Business",
        "Automation",
        "Machine Learning",
      ],
      readTime: "6 min read",
      content: `
      <div className="blog-detail-content">
  <p>
    Artificial Intelligence (AI) has become a transformative force in modern business operations. 
    From customer service automation to predictive analytics, AI is driving efficiency and innovation across industries.
  </p>

  <h3>1. Enhancing Decision-Making</h3>
  <p>
    Businesses are leveraging AI-driven data analytics to make faster and more accurate decisions. 
    Machine learning algorithms analyze vast datasets to uncover hidden patterns, providing insights that improve strategy and forecasting.
  </p>

  <h3>2. Automating Routine Processes</h3>
  <p>
    AI-powered automation tools reduce human workload by handling repetitive tasks such as data entry, scheduling, and report generation. 
    This allows teams to focus on creative and strategic activities that add more value.
  </p>

  <h3>3. Improving Customer Experience</h3>
  <p>
    Chatbots and virtual assistants powered by natural language processing (NLP) are redefining customer service. 
    They provide instant responses, personalize interactions, and are available 24/7, leading to higher satisfaction levels.
  </p>

  <h3>4. Predicting Market Trends</h3>
  <p>
    Predictive analytics models can forecast demand, detect risks, and identify new market opportunities. 
    Businesses can use these insights to stay ahead of competitors and make data-driven decisions.
  </p>

  <h3>Conclusion</h3>
  <p>
    AI continues to revolutionize business operations by improving efficiency, accuracy, and customer engagement. 
    Companies that integrate AI strategically are setting themselves up for long-term success in a rapidly evolving digital world.
  </p>
</div>

    `,
    },
    {
      id: 2,
      category: "Technology",
      date: "September 2, 2020",
      title:
        "How Artificial Intelligence Is Revolutionizing Modern Business Operations.",
      image: "/images/large-thumb-2.jpg",
      slug: "How-Artificial-Intelligence-Is-Revolutionizing-Modern-Business-Operations",
      author: "Tech Alphonic Team",
      tags: [
        "Artificial Intelligence",
        "Business",
        "Automation",
        "Machine Learning",
      ],
      readTime: "6 min read",
      content: `
      <div className="blog-detail-content">
  <p>
    Artificial Intelligence (AI) has become a transformative force in modern business operations. 
    From customer service automation to predictive analytics, AI is driving efficiency and innovation across industries.
  </p>

  <h3>1. Enhancing Decision-Making</h3>
  <p>
    Businesses are leveraging AI-driven data analytics to make faster and more accurate decisions. 
    Machine learning algorithms analyze vast datasets to uncover hidden patterns, providing insights that improve strategy and forecasting.
  </p>

  <h3>2. Automating Routine Processes</h3>
  <p>
    AI-powered automation tools reduce human workload by handling repetitive tasks such as data entry, scheduling, and report generation. 
    This allows teams to focus on creative and strategic activities that add more value.
  </p>

  <h3>3. Improving Customer Experience</h3>
  <p>
    Chatbots and virtual assistants powered by natural language processing (NLP) are redefining customer service. 
    They provide instant responses, personalize interactions, and are available 24/7, leading to higher satisfaction levels.
  </p>

  <h3>4. Predicting Market Trends</h3>
  <p>
    Predictive analytics models can forecast demand, detect risks, and identify new market opportunities. 
    Businesses can use these insights to stay ahead of competitors and make data-driven decisions.
  </p>

  <h3>Conclusion</h3>
  <p>
    AI continues to revolutionize business operations by improving efficiency, accuracy, and customer engagement. 
    Companies that integrate AI strategically are setting themselves up for long-term success in a rapidly evolving digital world.
  </p>
</div>

    `,
    },
    {
      id: 3,
      category: "Development",
      date: "October 10, 2020",
      title: "10 Best Practices for Writing Clean and Scalable React Code.",
      image: "/images/large-thumb-1.jpg",
      slug: "10-Best-Practices-for-Writing-Clean-and-Scalable-React-Code",
      author: "Tech Alphonic Team",
      tags: [
        "Artificial Intelligence",
        "Business",
        "Automation",
        "Machine Learning",
      ],
      readTime: "6 min read",
      content: `
      <div className="blog-detail-content">
  <p>
    Artificial Intelligence (AI) has become a transformative force in modern business operations. 
    From customer service automation to predictive analytics, AI is driving efficiency and innovation across industries.
  </p>

  <h3>1. Enhancing Decision-Making</h3>
  <p>
    Businesses are leveraging AI-driven data analytics to make faster and more accurate decisions. 
    Machine learning algorithms analyze vast datasets to uncover hidden patterns, providing insights that improve strategy and forecasting.
  </p>

  <h3>2. Automating Routine Processes</h3>
  <p>
    AI-powered automation tools reduce human workload by handling repetitive tasks such as data entry, scheduling, and report generation. 
    This allows teams to focus on creative and strategic activities that add more value.
  </p>

  <h3>3. Improving Customer Experience</h3>
  <p>
    Chatbots and virtual assistants powered by natural language processing (NLP) are redefining customer service. 
    They provide instant responses, personalize interactions, and are available 24/7, leading to higher satisfaction levels.
  </p>

  <h3>4. Predicting Market Trends</h3>
  <p>
    Predictive analytics models can forecast demand, detect risks, and identify new market opportunities. 
    Businesses can use these insights to stay ahead of competitors and make data-driven decisions.
  </p>

  <h3>Conclusion</h3>
  <p>
    AI continues to revolutionize business operations by improving efficiency, accuracy, and customer engagement. 
    Companies that integrate AI strategically are setting themselves up for long-term success in a rapidly evolving digital world.
  </p>
</div>

    `,
    },
  ];

  const { slug } = params;
  const blogItem = blogdata.find((item) => item.slug === slug);

  console.log(slug, "slug");

  const bannerData = {
    pageName: `${blogItem.title}`,
    pageTitle: "Latest News & Articles",
  };

  return (
    <>
      <InnerPageBanner data={bannerData} />

      {/* <div className="blog-area section-padding">
        <div className="container">
          <div className="blog-detail-body"  dangerouslySetInnerHTML={{ __html: blogItem.content }}/>
        </div>
      </div> */}

      <div className="section-padding">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-8">
              <article className="post news-grid">
                <div className="post-thumbnail">
                  <img src="/images/large-thumb-3.jpg" alt="" />
                </div>
                <div className="post-meta">
                  <span className="entry-meta entry-category">
                    <a href="#">{blogItem.category}</a>
                  </span>
                  <span className="entry-meta entry-date">
                    <a href="#">{blogItem.date}</a>
                  </span>
                </div>
                <div className="blog-detail-body"  dangerouslySetInnerHTML={{ __html: blogItem.content }}/>
              </article>
            </div>
            <BlogSidebar blogdata={blogdata} />
          </div>
        </div>
      </div>
    </>
  );
}
