
import Image from "next/image";

import Counter from "../Common/Counter";

export default async function About({data}) {

const aboutData = await data || [];
  console.log("about data set", aboutData);

    const content = aboutData?.heading;
    console.log( "content", content)
    const words = content.split(" ");  
    const a = words.slice(0, 2).join(" ");
    const b = words.slice(2, 5).join(" ");
    const c = words.slice(5).join(" ");

  return (
    <div className="about-section section-padding light-gradient-bg right-col-full" >
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="heading-wrapper with-separator">
              <h2 className="h1">
                {a} <span>{b}</span> {c}
              </h2>
            </div>

            <div className="text-wrapper">
              <p>
                {aboutData.sub_heading}
              </p>
              <div className="list-style-one" dangerouslySetInnerHTML={{ __html: aboutData.content }}></div>
            </div>

            <Counter data={aboutData.extra_data.steps}/>
          </div>

          <div className="col-lg-6">
            <Image
              src="/images/dashboard-img-2.png"
              alt={aboutData?.image_all_text}
              width={1000}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
