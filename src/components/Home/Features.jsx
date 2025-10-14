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
                                                    <h4>Clean Code</h4>    
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
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
                                                    <h4>Easily customizable</h4>    
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
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
                                                    <h4>User Friendly</h4>    
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
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
                                                    <h4>Fully secured</h4>    
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-5">
                                <div className="heading-wrapper with-separator">
                                    <h2 className="h1">We offer Powerfull <span>features</span></h2>
                                </div>
                                
                                <div className="text-wrapper">
                                    <p className="lead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
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
