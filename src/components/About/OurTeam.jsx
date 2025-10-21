"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurTeam() {
  return (
                <div className="our-team section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="heading-wrapper text-center with-separator">
                                    <h2 className="h1">Our Team <span>Experts</span></h2>
                                    <div className="lead-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <Image src="/images/team-3-rect.jpg" alt="" width={300} height={300}/>
                                            <div className="team-social">
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Mr. Kunal Kumar</h3>
                                            <span className="member-position">CEO & Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src="/images/team-4-rect.jpg" alt=""/>
                                            <div className="team-social">
                                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Mr. Rajesh Kumar</h3>
                                            <span className="member-position">Planer & Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src="/images/team-5-rect.jpg" alt=""/>
                                            <div className="team-social">
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Saru Matt</h3>
                                            <span className="member-position">Sales Head</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src="/images/team-2-rect.jpg" alt=""/>
                                            <div className="team-social">
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Shreyn S</h3>
                                            <span className="member-position">Analytical Head</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
