import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Features(data) {
    console.log("features home data", data)
        const featueresData = data || [];
        console.log( "featueres home adara asdfcasdcasdcasdcasdcasc", featueresData?.data?.main_section?.sub_heading)



        const content = featueresData?.data?.main_section?.heading;
    // console.log( "content", content)
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 5).join(" ");
    const c = words.slice(5).join(" ");

  return (
     <div className="features-section section-padding">
                    <div className="container">
                        <div className="row clearfix align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="row inner-row clearfix">
                                    {featueresData?.data?.feature_section?.extra_data?.steps?.map((item, index) => (
                                        <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                                            <Link href={`/features/${item.slug}`}>
                                                <div className="features-block theme-one wow fadeInUp">
                                                    <div className="inner-box">
                                                        <div className="icon">
                                                            <Image className="normal" src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item?.image}`} alt="" width={100} height={100}/>
                                                            <Image className="hover" src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item?.image}`} alt="" width={100} height={100}/>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{item.title}</h4>    
                                                            <div className='text-dark'  dangerouslySetInnerHTML={{ __html: item.Description }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                    {/* <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-2.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-2-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Personalized to Your Business</h4>    
                                                    <p>No two businesses are alike—and so should not be your CRM. Alpha Manpower  CRM fits into your workflow and enables you to customize your dashboards, modules, and automation according to your exact business model.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-3.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-3-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Seamless User Experience</h4>    
                                                    <p>You enjoy a slick, modern UI built for your productivity. Sales, marketing, or support—Alpha Manpower  CRM makes sure your every action is simple, easy, and effective—because your team should focus on growth.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="features-block theme-one wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="inner-box">
                                                <div className="icon">
                                                    <Image className="normal" src="images/default-color/icon-4.svg" alt="" width={100} height={100}/>
                                                    <Image className="hover" src="images/default-color/icon-4-light.svg" alt="" width={100} height={100}/>
                                                </div>
                                                <div className="text">
                                                    <h4>Data You Can Trust Will Protect</h4>    
                                                    <p>We think your customer information deserves protection at the highest level. Alpha Manpower  CRM provides enterprise-grade security protocols to keep your data safe and encrypted and under your control at all times.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div className="col-lg-5">
                                <div className="heading-wrapper with-separator">
                                    <h2 className="h1">{a}  <span>{b}</span>{c}</h2>
                                </div>
                                
                                <div className="text-wrapper">
                                    <p className="lead-text">{featueresData?.data?.main_section?.sub_heading}</p>
                                    <div  dangerouslySetInnerHTML={{ __html: featueresData?.data?.main_section?.content }}/>
                                </div>
                                <div className="btn-wrapper">
                                    <Link href={featueresData?.data?.main_section?.button_link} className="btn btn-primary">{featueresData?.data?.main_section?.button_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
