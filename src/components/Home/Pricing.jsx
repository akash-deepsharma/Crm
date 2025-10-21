import Link from 'next/link'
import React from 'react'

export default function Pricing() {
    return (
        <div className="pricing-section section-padding">
            <div className="container">
                <div className="row align-items-center clearfix ">
                    <div className="col-lg-4">
                        <div className="heading-wrapper with-separator">
                            <h2 className="h1">Pricing Plans</h2>
                        </div>
                        <div className="text-wrapper">
                            <h4>Find the Right Alpha Manpower  CRM Plan for Your Business.</h4>
                            <p>Power your growth with flexible CRM plans tailored to your needs. Whether you’re a startup or an enterprise, Alpha Manpower  CRM helps you manage customers, automate processes, and accelerate success—all in one place.</p>
                        </div>
                        <div className="btn-wrapper">
                            <Link href="/pricing" className="btn link-btn">Compare all features.</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row pricing-plans-three clearfix">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="price-card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <h3 className="card-title">Start-Up</h3>
                                        <div className="plan-cost-wrapper">
                                            <div className="plan-cost">
                                                <span className="plan-cost-prefix">₹</span>1.5k
                                            </div>
                                            <div className="plan-validity">/ mo</div>
                                        </div>
                                    </div>
                                    <div className="card-body pricing-new">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nunc, semper sed metus at, lacinia viverra leo.</p>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li>Easy Customizable</li>
                                            <li>1 Month Support Service</li>
                                            <li>Singal User license</li>
                                            <li className="disabled">Reports & Billing</li>
                                            <li>500Mb Storage</li>
                                        </ul>
                                        <Link href="#" className="btn btn-secondary">Purchase Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="price-card popular wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <h3 className="card-title">Advanced</h3>
                                        <div className="plan-cost-wrapper">
                                            <div className="plan-cost">
                                                <span className="plan-cost-prefix">₹</span>3k
                                            </div>
                                            <div className="plan-validity">/ mo</div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem nunc, semper sed metus at, lacinia viverra leo.</p>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li>Easy Customizable</li>
                                            <li>1 Year Support Service</li>
                                            <li>3 Users license</li>
                                            <li>Reports & Billing</li>
                                            <li>2Gb Storage per user</li>
                                        </ul>
                                        <Link href="#" className="btn btn-primary">Purchase Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
