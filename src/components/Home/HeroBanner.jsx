import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroBanner() {
  return (
    <div className="page-header section-padding full-height right-col-full dc-one">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="heading-wrapper with-separator wow fadeInUp">
                      
                      <h1>Transform Your <span>Business</span> with Next-Gen CRM Power.</h1>
                  </div>
                  <div className="text-wrapper wow fadeInUp" data-wow-delay="0.2s">
                      <p>CRM propels success by changing the way you interact with customers.
Get real-time insights, seamless automation, and data-backed decision-making to spur business growth. Build better relations, better productivity, and elevate your business with Alpha Manpower
.</p>
                  </div>
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                      <Link className="btn btn-primary" href="#">try to free</Link>
                      <Link className="btn btn-outline-primary" href="#"><i className="fas fa-play-circle"></i>watch video</Link>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="image-wrapper full-width-img">
                      <Image src="/images/dashboard-img-1.png" alt="" width={800} height={700} />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
