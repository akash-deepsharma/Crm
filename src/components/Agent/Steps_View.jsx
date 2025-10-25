import Image from 'next/image'
import React from 'react'

export default function Steps_View() {
  return (
    <div className="services-section section-padding light-bg">
                <div className="container">
                    <div className="row clearfix justify-content-center">
                        <div className="col-lg-10">
                            <div className="heading-wrapper text-center with-separator">
                                <h2 className="h1">Context of <span>Data Analytics</span></h2>
                                <div className="lead-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix wow fadeInUp">
                        <div className="col-lg-4">
                            <div className="icon-box theme-one ">
                                <div className="icon">
                                    <Image src="/images/default-color/cloud-computing.png" alt="" className="Image-fluid"  width={100} height={100}/>
                                </div>
                                <div className="text">
                                    <h4>Connect Your Cloud</h4>    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="icon-box theme-one ">
                                <div className="icon">
                                    <Image src="/images/default-color/domain.png" alt="" className="Image-fluid"  width={100} height={100}/>
                                </div>
                                <div className="text">
                                    <h4>Choose a Domain</h4>    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="icon-box theme-one ">
                                <div className="icon">
                                    <Image src="/images/default-color/add-content.png" alt="" className="Image-fluid"  width={100} height={100}/>
                                </div>
                                <div className="text">
                                    <h4>Add Your Content</h4>    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
  )
}
