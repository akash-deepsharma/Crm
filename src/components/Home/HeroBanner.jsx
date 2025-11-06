"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Request_Modal from '../Common/Request_Modal';

export default function HeroBanner(data) {

    const bannerData = data || [];
    // console.log( "banner data set", bannerData)

 const content = bannerData?.data?.heading;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 3).join(" ");
    const c = words.slice(3).join(" ");

    

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
                      
                      <h1>{a} <span>{b}</span> {c}</h1>
                  </div>
                  <div className="text-wrapper wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={{
                  __html: bannerData?.data?.content,
                }}>
                      {/* <p>{bannerData?.data?.sub_heading}</p> */}
                  </div>
                  <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.4s">
                      <Link className="btn btn-primary" href={bannerData?.data?.button_link}>{bannerData?.data?.button_text}</Link>
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
                      <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${bannerData?.data?.image}`} alt={bannerData?.data?.image_all_text} width={800} height={700} />
                  </div>
              </div>
          </div>
      </div>
    </div>

    {showModal && <Request_Modal onClose={handleCloseModal} />}
     </>
  )
}
