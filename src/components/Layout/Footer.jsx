import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
     <footer className="site-footer footer-theme-one">
                <div className="container">
                    <div className="footer-logo">
                        {/* <Image src="/images/d-code-logo-light.svg" alt="crm logo" width={150} height={50}/> */}
                        <Image src="/images/logo-w.png" alt="crm logo" width={150} height={80} style={{height:'auto'}} />
                    </div>
                    <div className="main-footer style-dark">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">About Crm</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="contact-info">
                                            <ul>
                                                <li className="email-field">Support@crm.com</li>
                                                <li className="phone-field">+91 9899184918</li>
                                                <li className="address-field">C 203, SECTOR 63, <br />NOIDA, NEAR POLICE CHOWKI, G.B. NAGAR, U.P. 201301</li>
                                            </ul>
                                        </div>
                                        <div className="social-media-links">
                                            <ul>
                                                <li><a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                                                <li><a target="_blank" href="https://www.linkedin.com/company"><i className="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Useful Links</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><a href="#">Trust & Safety</a></li>
                                                <li><a href="#">Cookie Policy</a></li>
                                                <li><a href="#">Book a Demo</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Terms of Service</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Useful Links</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/blogs">Blogs</a></li>
                                                <li><a href="/contact">Contact Us</a></li>
                                                <li><a href="/support">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Support</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Press</a></li>
                                                <li><a href="#">Community</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Stay Updated</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="newsletter-form">
                                            <p>Subscribe to our newsletter for regular updates</p>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="EmailInout" placeholder="Enter email address" required="" />
                                                </div>
                                                <input type="submit" className="btn btn-primary btn-light" value="Subscribe Now!"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-bar style-dark">
                        <div className="copyright-text text-center">
                            © Copyright Crm 2025. Made with <i className="fas fa-heart"></i> by <a href="https://www.techalphonic.com/" target="_blank"><strong>Tech Alphonic</strong></a>.
                        </div>
                    </div>
                </div>
            </footer>
  )
}
