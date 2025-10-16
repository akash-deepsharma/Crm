import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
     <footer className="site-footer footer-theme-one">
                <div className="container">
                    <div className="footer-logo">
                        {/* <Image src="/images/d-code-logo-light.svg" alt="crm logo" width={150} height={50}/> */}
                        <Link href="/"> 
                            <Image src="/images/logo-w.png" alt="crm logo" width={150} height={80} style={{height:'auto', width:'auto'}} />
                        </Link>
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
                                                <li className="email-field"><Link href="mailto:;Support@crm.com">Support@crm.com</Link></li>
                                                <li className="phone-field"><Link href="tel:- 9899184918">+91 9899184918 </Link></li>
                                                <li className="address-field">C 203, SECTOR 63, <br />NOIDA, NEAR POLICE CHOWKI, G.B. NAGAR, U.P. 201301</li>
                                            </ul>
                                        </div>
                                        <div className="social-media-links">
                                            <ul>
                                                <li><Link target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link target="_blank" href="https://twitter.com"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link target="_blank" href="https://www.linkedin.com/company"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Company</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><Link href="/demo-crm">Free Demo</Link></li>
                                                <li><Link href="#">Trust & Safety</Link></li>
                                                <li><Link href="/return-cancellation">Return &Cancellation</Link></li>
                                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link href="/terms-and-conditions">Terms of Service</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Quick Links</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/blogs">Blogs</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                                <li><Link href="/support">Support</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Resources</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <li><Link href="#">Login</Link></li>
                                                <li><Link href="#">Pricing</Link></li>
                                                <li><Link href="#">Book a Session</Link></li>
                                                <li><Link href="#">Community</Link></li>
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
                            © Copyright Crm 2025. Made with <i className="fas fa-heart"></i> by <Link href="https://www.techalphonic.com/" target="_blank"><strong>Tech Alphonic</strong></Link>.
                        </div>
                    </div>
                </div>
            </footer>
  )
}
