"use client";
 import InnerPageBanner from '@/components/Common/InnerPageBanner';
import Support_items from '@/components/Support/Support_items';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function page() {
  const bannerData = {
    pageName: "Support",
    pageTitle: "Customer Support Services",
  };
  // useEffect(() => {
  //     import("bootstrap/dist/js/bootstrap.bundle.min.js");
  //   }, []);

useEffect(() => {
    // bootstrap JS (if needed)
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

    const handleHash = (rawHash, smooth = true) => {
      if (!rawHash) return;
      const id = rawHash.startsWith("#") ? rawHash.slice(1) : rawHash;
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      const headerHeight = getHeaderHeight();
      scrollToElementWithOffset(target, headerHeight, smooth);
    };

    const onDocumentClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();

      const id = href.startsWith("#") ? href : `#${href}`;
      if (history.pushState) {
        history.pushState(null, "", id);
      } else {
        location.hash = id;
      }

      handleHash(id, true);
    };

    const onInitialLoad = () => {
      if (location.hash) {
        setTimeout(() => handleHash(location.hash, false), 50);
      }
    };

    const onHashChange = () => {
      setTimeout(() => handleHash(location.hash, true), 10);
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);
    onInitialLoad();

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
      <div>
        <InnerPageBanner data={bannerData}/>

       <Support_items/>




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
              <h3 className="panel-title fs-1">
                What is your main concern or issue?
              </h3>
            </div>
            <div
              id="collapse0"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading0"
            >
              <div className="panel-body">
                <ul className="list-style-one">
                  <li>
                    <Link href="#heading1">
                      How do I enable or disable payment gateway?
                    </Link>
                  </li>
                  <li>
                    <Link href="#heading2">
                      What happens if I clear the hosting server cache?
                    </Link>
                  </li>
                  <li>
                    <Link href="#heading3">
                      How can I force SSL certificate on my site?
                    </Link>
                  </li>
                  <li>
                    <Link href="#heading4">
                     How long does it take to propagate DNS settings?
                    </Link>
                  </li>
                  <li>
                    <Link href="#heading5">
                     Which online payment methods do you offer?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading1">
              <h3 className="panel-title">
                How do I enable or disable payment gateway?
              </h3>
            </div>
            <div
              id="collapse1"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading1"
            >
              <div className="panel-body">
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <p>At vero eos et accusamus et iusto erunt impedit quo minus facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibue. Itaque earum rerendis doloribus asperiores repellat.</p>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading2">
              <h3 className="panel-title">
                What happens if I clear the hosting server cache?
              </h3>
            </div>
            <div
              id="collapse2"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div className="panel-body">
                <p>
                  At vero eos et accusamus et iusto erunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibue. Itaque earum rerendis doloribus asperiores repellat.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading3">
              <h3 className="panel-title">
                How can I force SSL certificate on my site?
              </h3>
            </div>
            <div
              id="collapse3"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading3"
            >
              <div className="panel-body">
                <p> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibue. Itaque earum rerendis doloribus asperiores repellat.</p>
              </div>
            </div>
          </div>


          {/* Panel 5 */}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading4">
              <h3 className="panel-title">
                How long does it take to propagate DNS settings?

              </h3>
            </div>
            <div
              id="collapse4"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading4"
            >
              <div className="panel-body">
                <p> At vero eos et accusamus et iusto erunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibue. Itaque earum rerendis doloribus asperiores repellat.</p>
              </div>
            </div>
          </div>


          {/* Panel 6 */}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading5">
              <h3 className="panel-title">
                Which online payment methods do you offer?
              </h3>
            </div>
            <div
              id="collapse5"
              className="panel-collapse show"
              role="tabpanel"
              aria-labelledby="heading5"
            >
              <div className="panel-body">
                <p> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>




      </div>
  )
}
