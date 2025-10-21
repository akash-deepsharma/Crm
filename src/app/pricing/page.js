import React from 'react'
import Layout from '@/app/layout'
import InnerPageBanner from '@/components/Common/InnerPageBanner'
import Subscriber from '@/components/Common/Subscriber';

export default function page() {
  const bannerData = {
    pageName: "Pricing",
    pageTitle: "Our Pricing Plans",
  };
  return (
      <div>
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
                                        <a href="#" className="btn btn-secondary">Purchase Now</a>
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
                                        <a href="#" className="btn btn-primary">Purchase Now</a>
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
                                        <a href="#" className="btn btn-secondary">Purchase Now</a>
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
