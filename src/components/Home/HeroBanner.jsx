"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Request_Modal from '../Common/Request_Modal';

export default function HeroBanner() {

            const [showModal, setShowModal] = useState(false);
            
            const handleOpenModal = (e) => {
                e.preventDefault();
                setShowModal(true);
            };
            
            const handleCloseModal = () => {
                setShowModal(false);
            };
  return (
    <>
   
    <div className="page-header section-padding full-height right-col-full dc-one">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="heading-wrapper with-separator wow fadeInUp">
                      
                      <h1>Transform Your <span>Business</span> with Next-Gen CRM Power.</h1>
                  </div>
                  <div className="text-wrapper wow fadeInUp" data-wow-delay="0.2s">
                      <p>CRM propels success by changing the way you interact with customers.
Get real-time insights, seamless automation, and data-backed decision-making to spur business growth. Build better relations, better productivity, and elevate your business with Alpha Manpower.</p>
                  </div>
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                      <Link className="btn btn-primary" href="#">try to free</Link>
                      <Link className="btn btn-outline-primary" onClick={handleOpenModal} href="#">
                      {/* <i className="fas fa-play-circle"></i> */}
                      Request Demo</Link>
                  </div>
                  <div className='mt-4'>

                  <Link className="" href="#">Explore Demo Account <i className="fas fa-arrow-right"></i> </Link>
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

    {showModal && <Request_Modal onClose={handleCloseModal} />}
     </>
  )
}
