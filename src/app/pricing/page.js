import React from 'react'
import Layout from '@/app/layout'
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import Subscriber from '@/components/Common/Subscriber';
import { getMetas } from '@/ApiCall/getMetasApi';

export async function generateMetadata() {
  // Static slug for Become a seller page
  const slug = "pricing";
  const meta = await getMetas(slug);
const baseUrl = process.env.NEXT_PUBLIC_baseUrl || "https://yourdomain.com";
   const canonicalUrl = `${baseUrl}/${slug}`;
  const page = await meta?.data?.[0];

  if (!page) {
    return {
      title: "Pricing | My Website",
      description: "Explore our flexible pricing plans designed to suit businesses of all sizes. Choose the plan that fits your needs and start growing with My Website today.",
    };
  }


  return {
    title: page.meta_title || "Pricing | My Website",
    description:
      page.meta_description ||
      "Explore our flexible pricing plans designed to suit businesses of all sizes. Choose the plan that fits your needs and start growing with My Website today.",
    keywords:
      page.meta_keywords ||
      "pricing plans, subscription, packages, business plans, affordable pricing, My Website pricing",
      alternates: {
      canonical: canonicalUrl,
    },
      robots:
      page.robotstatus === "true"
        ? "index, follow"
        : "noindex, nofollow",
    openGraph: {
      title: page.meta_title || "Pricing | My Website",
      description:
        page.meta_description ||
        "Discover transparent and flexible pricing plans to get the most out of our platform. Find the plan that fits your business goals.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`,
          width: 1200,
          height: 630,
          alt: page.title || "Pricing | My Website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta_title || "Pricing | My Website",
      description:
        page.meta_description ||
        "Check out our pricing plans and choose the best package for your business. Get started with My Website today.",
      images: [`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${page.page_image}`],
    },
  };
}



export default async function page() {
  const slug = "pricing";

const metaData = await getMetas(slug);

  const meta = await metaData?.data?.[0];
console.log( "data how pricing" , meta)

  const bannerData = {
    pageName: "Pricing",
    pageTitle: "Our Pricing Plans",
  };
  return (
      <div>

        {meta?.schema_page && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta.schema_page }}
        />
      )}
        <InnerPageBanner data={bannerData}/>



          <div className="pricing-section section-padding">
                    <div className="container">
                        <div className="row justify-content-center clearfix">
                            <div className="col-lg-8">
                                <div className="heading-wrapper text-center with-separator">
                                    <h2 className="h1">Pricing Plans</h2>
                                    <div className="lead-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pricing-plans-two clearfix">
                            <div className="col-lg-4 col-12">
                                <div className="price-card text-center wow fadeInLeft">
                                    <div className="plan-cost-wrapper">
                                        <div className="plan-cost">
                                            <span className="plan-cost-prefix">₹</span>1.5k
                                        </div>
                                        <div className="plan-validity">per month</div>
                                    </div>
                                    <div className="card-header">
                                        <h3 className="card-title">Start-Up</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nunc, semper sed metus at, lacinia viverra leo.</p>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li>Easy Customizable</li>
                                            <li>1 Month Support Service</li>
                                            <li>Singal User license</li>
                                            <li className="disabled">Reports & Billing</li>
                                            <li>100Mb Storage</li>
                                        </ul>
                                        <a href="#" className="btn btn-secondary">Active Soon</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="price-card popular text-center wow fadeInUp">
                                    <div className="plan-cost-wrapper">
                                        <div className="plan-cost">
                                            <span className="plan-cost-prefix">₹</span>3k
                                        </div>
                                        <div className="plan-validity">per month</div>
                                    </div>
                                    <div className="card-header">
                                        <h3 className="card-title">Advanced</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nunc, semper sed metus at, lacinia viverra leo.</p>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li>Easy Customizable</li>
                                            <li>1 Year Support Service</li>
                                            <li>3 Users license</li>
                                            <li className="disabled">Reports & Billing</li>
                                            <li>2Gb Storage per user</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary">Active Soon</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="price-card text-center wow fadeInRight">
                                    <div className="plan-cost-wrapper">
                                        <div className="plan-cost">
                                            <span className="plan-cost-prefix">₹</span>5k
                                        </div>
                                        <div className="plan-validity">per month</div>
                                    </div>
                                    <div className="card-header">
                                        <h3 className="card-title">Premium</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nunc, semper sed metus at, lacinia viverra leo.</p>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li>Easy Customizable</li>
                                            <li>1 Year Support Service</li>
                                            <li>10 Users license</li>
                                            <li>Reports & Billing</li>
                                            <li>2Gb Storage per user</li>
                                        </ul>
                                        <a href="#" className="btn btn-secondary">Active Soon</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Subscriber/>
        
      </div>
  )
}
