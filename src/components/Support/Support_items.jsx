import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Support_items() {
  const supportList = [
    {
      title: "Setting Options",
      icon: "/images/default-color/icon-9.svg",
      slug: "setting-options",
    },
    {
      title: "Social Share",
      icon: "/images/default-color/icon-8.svg",
      slug: "social-share",
    },
    {
      title: "User Login",
      icon: "/images/default-color/icon-10.svg",
      slug: "user-login",
    },
  ];

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row clearfix justify-content-center">
          <div className="col-lg-10">
            <div className="heading-wrapper text-center with-separator">
              <h2 className="h1">
                How can we <span>help?</span>
              </h2>
              <div className="lead-text">
                <p>Welcome to Cool App Support.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          {supportList.map((item, i) => (
            <div className="col-lg-4" key={i}>
              <Link href={`/support/${item.slug}`}>
                <div className="icon-box theme-two wow fadeInUp text-center">
                  <div className="icon">
                    <Image src={item.icon} alt={item.title} width={70} height={70} />
                  </div>
                  <div className="text">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
