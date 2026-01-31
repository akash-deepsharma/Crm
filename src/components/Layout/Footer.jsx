// "use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterActionsClient from './FooterActionsClient';
import { contactGetApi } from '@/ApiCall/contactApi';
import NewsletterFooter from './NewsletterFooter';

export default async function Footer() {

    const ContactContent = await contactGetApi();

const contactData = ContactContent?.data[0] || [];
// console.log("footer consolr ", contactData)
  return (
      <>
     <footer className="site-footer footer-theme-one">
                <div className="container">
                    <div className="footer-logo">
                        <Link href="/"> 
                            <Image src="/images/logo-w.png" alt="crm logo" width={172 } height={77 } style={{height:'auto', width:'auto'}} />
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
                                                <li className="email-field"><Link href={`mailto:${contactData.email}`}>{contactData.email}</Link></li>
                                                <li className="phone-field"><Link href={`tel:-${contactData.phone} }`}> {contactData.phone} </Link></li>
                                                <li className="address-field">{contactData.address}</li>
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
                                                <li><Link href="https://main-crm-flax.vercel.app/">Free Trial</Link></li>
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

                           <FooterActionsClient />
                            <div className="col-lg-3">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h3 className="title">Stay Updated</h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="newsletter-form">
                                            <p>Subscribe to our newsletter for regular updates</p>
                                            <NewsletterFooter/>
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

            </>
  )
}
