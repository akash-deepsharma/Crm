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
                            <h4>Begin leveraging your market data today.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                        </div>
                        <div className="btn-wrapper">
                            <a href="/pricing" className="btn link-btn">Compare all features.</a>
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
                                                <span className="plan-cost-prefix">$</span>15
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
                                        <a href="#" className="btn btn-secondary">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="price-card popular wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <h3 className="card-title">Advanced</h3>
                                        <div className="plan-cost-wrapper">
                                            <div className="plan-cost">
                                                <span className="plan-cost-prefix">$</span>30
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
                                        <a href="#" className="btn btn-primary">Purchase Now</a>
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
