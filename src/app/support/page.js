"use client";
import { getSingleSupport, getSupport } from "@/ApiCall/supportApi";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Support_items from "@/components/Support/Support_items";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {

  const [SupportData, setSupportData] = useState([]);
  const [SupportFaq, setSupportFaq] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSupport();
      if (data) {
        setSupportData(data || []);
      }
    }

    fetchData();
  }, []);

    useEffect(() => {
    async function fetchData() {
      const slug = "support"
      const data = await getSingleSupport(slug);
      // console.log("✅ First  SupportData:", data);
      if (data) {
        setSupportFaq(data || []);
      }
    }

    fetchData();
  }, []);

  // console.log("support data ", SupportFaq)

  
  const bannerData = {
    pageName: SupportData?.section1?.heading || "Support",
    pageTitle: SupportData?.section1?.sub_heading || "Customer Support Services",
  };



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    
    const headerSelectorCandidates = [".site-header", ".navbar", "header", ".header", "#header"];
    let headerSelector = headerSelectorCandidates.find(sel => document.querySelector(sel)) || null;

    
    const getHeaderHeight = () => {
      if (headerSelector) {
        const el = document.querySelector(headerSelector);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.height;
        }
      }
      
      return 100;
    };

    
    const scrollToElementWithOffset = (el, offset, smooth = true) => {
      const elRect = el.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + elRect.top;
      const targetY = Math.max(0, absoluteElementTop - offset);

      window.scrollTo({
        top: targetY,
        behavior: smooth ? "smooth" : "auto",
      });

      
      const prevTabIndex = el.getAttribute("tabindex");
      if (prevTabIndex === null) {
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
        
        window.setTimeout(() => el.removeAttribute("tabindex"), 1000);
      } else {
        el.focus({ preventScroll: true });
      }
    };

    // Core: handle a hash (without the leading #)
    const handleHash = (rawHash, smooth = true) => {
      if (!rawHash) return;
      const id = rawHash.startsWith("#") ? rawHash.slice(1) : rawHash;
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      const headerHeight = getHeaderHeight();
      scrollToElementWithOffset(target, headerHeight, smooth);
    };

    // Click handler: catches clicks on <a href="#..."> (works for Next.js Link too)
    const onDocumentClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      // allow if href is exactly "#" (do nothing)
      if (!href || href === "#") return;

      // prevent default and handle scrolling
      e.preventDefault();

      // Update the URL hash without jumping instantly
      const id = href.startsWith("#") ? href : `#${href}`;
      if (history.pushState) {
        // push state so browser shows hash in URL without causing default jump
        history.pushState(null, "", id);
      } else {
        location.hash = id;
      }

      handleHash(id, true);
    };

    // handle initial load with hash (if present)
    const onInitialLoad = () => {
      if (location.hash) {
        // small delay allows layout to stabilise (images/fonts) before measuring header
        setTimeout(() => handleHash(location.hash, false), 50);
      }
    };

    // handle subsequent hash changes (e.g., browser back/forward)
    const onHashChange = () => {
      // small delay to let DOM settle
      setTimeout(() => handleHash(location.hash, true), 10);
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);
    // initial
    onInitialLoad();

    // Optional: re-check header selector if header appears later (e.g., dynamic header)
    const headerObserver = new MutationObserver(() => {
      headerSelector = headerSelectorCandidates.find(sel => document.querySelector(sel)) || headerSelector;
    });
    headerObserver.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("hashchange", onHashChange);
      headerObserver.disconnect();
    };
  }, []);




  return (
    <>
      <InnerPageBanner data={bannerData} />

      <Support_items  data={SupportData?.section1?.extra_data}/>

      <div className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-wrapper with-separator">
                <h2 className="h1">
                  Most Popular <span>Questions</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="panel-group" id="accordion" role="tablist">
                {/* Panel 1 */}

               
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading0">
                    <h3 className="panel-title fs-1">What is your main concern or issue?</h3>
                  </div>
                  <div id="collapse0" className="panel-collapse show" role="tabpanel" aria-labelledby="heading0">
                    <div className="panel-body">
                      <ul className="list-style-one">
                         {SupportFaq?.faq?.map((item,index)=>(
                          <li key={index}>
                            <Link href={`#heading${index}`}>{item.question}</Link>
                          </li>                            
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {SupportFaq?.faq?.map((item,index)=>(
                  <div className="panel panel-default" key={index} >
                    <div className="panel-heading" role="tab" id={`heading${index}`}>
                      <h3 className="panel-title">{item.question}</h3>
                    </div>
                    <div id={`collapse${index}`} className="panel-collapse show" role="tabpanel" aria-labelledby={`heading${index}`}>
                      <div className="panel-body list-style-one" dangerouslySetInnerHTML={{ __html: item.answer }}>
                      </div>
                    </div>
                  </div>
                ))} 

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
