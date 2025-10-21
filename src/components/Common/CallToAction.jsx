import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
  return (
   <div className="cta-section section-padding style-dark">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="call-to-action-content i-text-center">
                                    <h2 className="h1">Get a personalized demo, instantly. <span className="special-fonts">Schedule a demo</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="call-to-action-btn text-right i-text-center">
                                    <Link href="#" className="btn btn-primary btn-light btn-large">Contact Us Now!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
