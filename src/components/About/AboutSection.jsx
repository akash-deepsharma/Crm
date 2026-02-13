import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection(data) {
  console.log( "about section", data)
  const alt =  data?.data?.image_all_text
  console.log("data data Image_all_text", alt)

    const content = data?.data?.sub_heading2;
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 4).join(" ");
    const c = words.slice(4).join(" ");
  return (
    <div className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="image-wrapper">
              <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${data?.data?.image}`} alt={`${alt}`}  width={700} height={700} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading-wrapper with-separator">
              <span className="sub-title">{data?.data?.sub_heading3}</span>
              <h2 className="h1">
                {a} <span>{b}</span> {c}
              </h2>
            </div>
            <div className="text-wrapper list-style-one" dangerouslySetInnerHTML={{ __html: data?.data?.content }}/>

            <div className="btn-wrapper">
              <Link className="btn btn-primary" href="/pricing">
                Purchase Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
