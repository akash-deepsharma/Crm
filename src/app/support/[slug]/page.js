import { getSingleSupport } from "@/ApiCall/supportApi";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;

  // ✅ Fetch server-side
  const faqData = await getSingleSupport(slug);
  // console.log("slug", slug);
  // console.log("support data", faqData);



  const supportItem = faqData;
  if (!supportItem) {
    return <div className="text-center py-5">Support topic not found.</div>;
  }

  const bannerData = {
    pageName: "Support",
    pageTitle: supportItem.title,
  };

  return (
    <div>
      <InnerPageBanner data={bannerData} />
      <div className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-wrapper with-separator">
                <h2 className="h1 text-capitalize">
                  {supportItem.faq[0].page} <span>FAQs</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="panel-group" id="accordion" role="tablist">
                {supportItem?.faq.map((faq, i) => (
                  <div className="panel panel-default" key={i}>
                    <div
                      className="panel-heading"
                      role="tab"
                      id={`heading${i}`}
                    >
                      <h3 className="panel-title">{faq.question}</h3>
                    </div>
                    <div
                      id={`collapse${i}`}
                      className="panel-collapse show"
                      role="tabpanel"
                      aria-labelledby={`heading${i}`}
                    >
                      <div className="panel-body  list-style-one" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href="/support" className="btn btn-primary">
                  ← Back to Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
