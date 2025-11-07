import Image from 'next/image'
import React from 'react'

export default function UserTypes({data}) {

const userTypeData = data || [];

// console.log( "userTypeData", userTypeData)


 const content = userTypeData?.heading;
    const words = content.split(" ");  
    const a = words.slice(0, 3).join(" ");
    const b = words.slice(3, 5).join(" ");
    const c = words.slice(5).join(" ");

  return (
    <div className="section-padding">
      <div className="container"> 
        <div className="row clearfix">
          <div className="col-lg-8">
            <div className="heading-wrapper with-separator">
              <h2 className="h1">
                {a} <span> {b} </span> {c}
              </h2>
              <div className="lead-text">
                <p>
                  {userTypeData?.sub_heading}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">

          {userTypeData?.extra_data?.steps.map((item , index)=> (
              <div className="col-lg-6 col-md-6" key={index}>
                <div className="features-block theme-five wow fadeInLeft">
                  <div className="inner-box">
                    <div className="icon">
                      <Image
                        className="normal"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${item?.image}`}
                        alt={item.alt_text} width={100} height={100}
                      />
                    </div>
                    <div className="text">
                      <h4>{item.title}</h4>
                      <p>
                        {item.Description}
                      </p>
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
