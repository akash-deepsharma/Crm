"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurTeam(data) {

    const temdata = data || [];
    console.log( "teams-data" , temdata)
    const profiles = temdata?.data?.profiles
    // console.log("profiles ", profiles)
    const content = temdata?.data?.heading;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 4).join(" ");
    const c = words.slice(4).join(" ");
    
  return (
                <div className="our-team section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="heading-wrapper text-center with-separator">
                                    <h2 className="h1">{a} <span>{b}</span>{c}</h2>
                                    <div className="lead-text">
                                        <p>{temdata?.data?.sub_heading}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {profiles?.map((item,index)=>(
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="st-team-member theme-one wow fadeInUp">
                                        <div className="team-member-wrapper">
                                            <div className="st-team-image">
                                                <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item?.profile_picture}`} alt={item?.Image_all_text} width={300} height={300}/>
                                                <div className="team-social">

                                                     {item?.facebook && item.facebook !== "null" && (
                                                        <Link href={item.facebook} target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                        </Link>
                                                    )}
                                                    {item?.instagram && item.instagram !== "null" && (
                                                        <Link href={item.instagram} target="_blank">
                                                        <i className="fab fa-instagram"></i>
                                                        </Link>
                                                    )}
                                                    {item?.linkdin && item.linkdin !== "null" && (
                                                        <Link href={item.linkdin} target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="st-team-member-detail">
                                                <h3 className="member-name">{item.name}</h3>
                                                <span className="member-position">CEO & Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
  )
}
