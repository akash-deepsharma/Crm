import Image from 'next/image'
import React from 'react'

export default function HeroBanner() {
  return (
    <div className="page-header section-padding full-height right-col-full dc-one">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="heading-wrapper with-separator wow fadeInUp">
                      <h1>Crm is the <span>biggest platform</span> for your growth.</h1>
                  </div>
                  <div className="text-wrapper wow fadeInUp" data-wow-delay="0.2s">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque dignissim eget.</p>
                  </div>
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                      <a className="btn btn-primary" href="#">try to free</a>
                      <a className="btn btn-outline-primary" href="#"><i className="fas fa-play-circle"></i>watch video</a>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="image-wrapper full-width-img">
                      <Image src="/images/dashboard-img-1.png" alt="" width={600} height={600} />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
