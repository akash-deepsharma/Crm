import Image from 'next/image'
import React from 'react'

export default async function Steps_View(step_viewData) {
    const stap_data = await step_viewData?.data
    // console.log( "stap_data", stap_data)


    const title = stap_data?.heading
    const words = title.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 4).join(" ");
    const c = words.slice(4).join(" ");

    // console.log("stap_data", stap_data)

  return (
    <div className="services-section section-padding light-bg">
                <div className="container">
                    <div className="row clearfix justify-content-center">
                        <div className="col-lg-10">
                            <div className="heading-wrapper text-center with-separator">
                                <h2 className="h1">{a} <span>{b}</span>{c}</h2>
                                <div className="lead-text">
                                    <p>{stap_data.sub_heading}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix wow fadeInUp">
                        {stap_data?.extra_data?.steps.map((items, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="icon-box theme-one ">
                                    <div className="icon">
                                        <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${items?.image}`} alt="" className="Image-fluid"  width={80} height={80} style={{height:'auto'}}/>
                                    </div>
                                    <div className="text">
                                        <h4>{items?.title}</h4>    
                                        <p>{items?.description}</p>
                                    </div>
                                </div>
                            </div>
                                
                            ))}
                    </div>
                </div>
                </div>
  )
}
