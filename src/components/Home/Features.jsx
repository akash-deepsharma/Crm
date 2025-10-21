import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Features() {
  return (
     <div className="features-section section-padding">
                    <div className="container">
                        <div className="row clearfix align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="row inner-row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-1.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-1-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Streamlined Customer Management</h4>    
                                                    <p>Poise every interaction with a clean CRM for great organization and optimization. Alpha Manpower eliminates the need for exhausting procedures required to manage customer data, track conversations, and develop relationships—all on one smart platform. 
</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-2.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-2-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Personalized to Your Business</h4>    
                                                    <p>No two businesses are alike—and so should not be your CRM. Alpha Manpower  CRM fits into your workflow and enables you to customize your dashboards, modules, and automation according to your exact business model.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-3.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-3-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Seamless User Experience</h4>    
                                                    <p>You enjoy a slick, modern UI built for your productivity. Sales, marketing, or support—Alpha Manpower  CRM makes sure your every action is simple, easy, and effective—because your team should focus on growth.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-4.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-4-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Data You Can Trust Will Protect</h4>    
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-5">
                                <div className="heading-wrapper with-separator">
                                    <h2 className="h1">Transform Connections into  <span>Opportunities</span></h2>
                                </div>
                                
                                <div className="text-wrapper">
                                    <p className="lead-text">At Alpha Manpower, we excel in more than relationship management:</p>
                                    <p>we excel in defining lifetime relationships. A CRM that turns every customer engagement into meaningful engagement towards growth and success</p>
                                </div>
                                <div className="btn-wrapper">
                                    <Link href="/about" className="btn btn-primary">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
