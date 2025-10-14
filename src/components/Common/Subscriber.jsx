import Image from 'next/image'
import React from 'react'

export default function Subscriber() {
  return (
                <div className="subscribe-section section-padding pt-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <Image src="/images/default-color/newsletter-img.png" alt="" className="img-fluid" width={500} height={500}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="heading-wrapper with-separator">
                                    <h2 className="h1">Subscribe to our <span>Newsletter</span></h2>
                                    <div className="lead-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla.</p>
                                    </div>
                                </div>
                                <div className="subscribe-form-wrapper">
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="email" name="EmailInput" className="form-control" placeholder="Enter Your Email" required="" />
                                        </div>
                                        <input type="submit" className="btn btn-primary" value="Subscribe Now!" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
