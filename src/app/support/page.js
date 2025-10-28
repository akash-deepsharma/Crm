"use client";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Support_items from "@/components/Support/Support_items";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Page() {
  const bannerData = {
    pageName: "Support",
    pageTitle: "Customer Support Services",
  };

  useEffect(() => {
    // bootstrap JS (if needed)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Selector for your fixed header. Change if your header uses a different class/id.
    const headerSelectorCandidates = [".site-header", ".navbar", "header", ".header", "#header"];
    let headerSelector = headerSelectorCandidates.find(sel => document.querySelector(sel)) || null;

    // Utility: compute header height (including dynamic changes)
    const getHeaderHeight = () => {
      if (headerSelector) {
        const el = document.querySelector(headerSelector);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.height;
        }
      }
      // fallback default
      return 100;
    };

    // Scroll to element with offset
    const scrollToElementWithOffset = (el, offset, smooth = true) => {
      const elRect = el.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + elRect.top;
      const targetY = Math.max(0, absoluteElementTop - offset);

      window.scrollTo({
        top: targetY,
        behavior: smooth ? "smooth" : "auto",
      });

      // For accessibility: focus element after scrolling
      // add a tabindex if not focusable
      const prevTabIndex = el.getAttribute("tabindex");
      if (prevTabIndex === null) {
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
        // remove tabindex after short delay
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
    <div>
      <InnerPageBanner data={bannerData} />

      <Support_items />

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
                        <li>
                          <Link href="#heading1">How do I enable or disable payment gateway?</Link>
                        </li>
                        <li>
                          <Link href="#heading2">What happens if I clear the hosting server cache?</Link>
                        </li>
                        <li>
                          <Link href="#heading3">How can I force SSL certificate on my site?</Link>
                        </li>
                        <li>
                          <Link href="#heading4">How long does it take to propagate DNS settings?</Link>
                        </li>
                        <li>
                          <Link href="#heading5">Which online payment methods do you offer?</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Panel 2 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h3 className="panel-title">How do I enable or disable payment gateway?</h3>
                  </div>
                  <div id="collapse1" className="panel-collapse show" role="tabpanel" aria-labelledby="heading1">
                    <div className="panel-body">
                      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus...</p>
                      <p>At vero eos et accusamus et iusto erunt impedit quo minus facere possimus...</p>
                    </div>
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading2">
                    <h3 className="panel-title">What happens if I clear the hosting server cache?</h3>
                  </div>
                  <div id="collapse2" className="panel-collapse show" role="tabpanel" aria-labelledby="heading2">
                    <div className="panel-body">
                      <p>At vero eos et accusamus et iusto erunt mollitia animi...</p>
                    </div>
                  </div>
                </div>

                {/* Panel 4 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading3">
                    <h3 className="panel-title">How can I force SSL certificate on my site?</h3>
                  </div>
                  <div id="collapse3" className="panel-collapse show" role="tabpanel" aria-labelledby="heading3">
                    <div className="panel-body">
                      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus...</p>
                    </div>
                  </div>
                </div>

                {/* Panel 5 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading4">
                    <h3 className="panel-title">How long does it take to propagate DNS settings?</h3>
                  </div>
                  <div id="collapse4" className="panel-collapse show" role="tabpanel" aria-labelledby="heading4">
                    <div className="panel-body">
                      <p>At vero eos et accusamus et iusto erunt mollitia animi...</p>
                    </div>
                  </div>
                </div>

                {/* Panel 6 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading5">
                    <h3 className="panel-title">Which online payment methods do you offer?</h3>
                  </div>
                  <div id="collapse5" className="panel-collapse show" role="tabpanel" aria-labelledby="heading5">
                    <div className="panel-body">
                      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus...</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
