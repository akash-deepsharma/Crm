"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { permanentRedirect, usePathname, useRouter } from "next/navigation";
import Request_Modal from "../Common/Request_Modal";
import { getHeaderFeatures } from "@/ApiCall/headersApi";
import ButtonHeader from "./ButtonHeader";
import { getRedirection } from "@/ApiCall/redirectionApi";



export default function Header() {

  const pathname = usePathname();
  const [redirectResp, setRedirectResp] = useState(null);
// console.log( "redirection data ", redirectResp)
  useEffect(() => {
  //  let mounted = true;
    async function fetchData() {
      const data = await getRedirection({ path: pathname });

      setRedirectResp(data);
      if (data?.status === "redirect" && data.to) {
        router.push(`/${data.to}`); 
      }
    }
    fetchData();
  }, [pathname]);

// const pathname = usePathname();
  // const router = useRouter();
//   const [redirectResp, setRedirectResp] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     async function fetchData() {
//       const data = await getRedirection({ path: pathname });

//       if (!mounted) return;
//       setRedirectResp(data);

//       if (data?.status === 'redirect' && data.to) {
//         router.push(`/${data.to}`);
//       }
//     }

//     fetchData();

//     return () => {
//       mounted = false;
//     };
//   }, []);

  // console.log('redirection data' , redirectResp);



if (redirectResp && redirectResp.status === "redirect" && redirectResp.to) {
  permanentRedirect(`/${redirectResp.to}`);
}
  
  const [featureHeader, setfeatureHeader] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getHeaderFeatures();
      setfeatureHeader(data || []);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const loadScripts = async () => {
      const $ = (await import("jquery")).default;
      window.$ = window.jQuery = $;

      $(function () {
        const handleLayout = () => {
          const viewportWidth = $(window).width();

          if (viewportWidth <= 992) {
            $(".navbar-right").appendTo("#navigation");
            if ($("#navigation .close-btn").length === 0) {
              $('<span class="close-btn"></span>').prependTo("#navigation");
            }
          } else {
            $(".navbar-right").appendTo(".container-fluid");
            $("#navigation .close-btn").remove();
            $("#navigation").removeClass("open");
            $(".menu-toggle-btn").removeClass("active");
            $("body").removeClass("navigation-in");
          }
        };

        handleLayout();
        $(window).on("resize", handleLayout);

        $(".menu-toggle-btn").click(function () {
          $(this).addClass("active");
          $("#navigation").addClass("open");
          $("body").addClass("navigation-in");
        });

        $(document).on(
          "click",
          "#navigation .close-btn, #navigation a",
          function () {
            $(".menu-toggle-btn").removeClass("active");
            $("#navigation").removeClass("open");
            $("body").removeClass("navigation-in");
          }
        );

        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            $(".menu-toggle-btn").removeClass("active");
            $("#navigation").removeClass("open");
            $("body").removeClass("navigation-in");
          }
        });

        $("#navigation ul li.menu-item-has-children > a").after(
          '<span class="child-link"><i class="fas fa-chevron-down"></i></span>'
        );

        $("span.child-link").click(function () {
          $(this)
            .parent()
            .siblings("li.menu-item-has-children")
            .find("span.child-link")
            .removeClass("active");
          $(this)
            .parent()
            .siblings("li.menu-item-has-children")
            .find("ul")
            .slideUp(350);

          $(this).next("ul").slideToggle(350);
          $(this).next("ul").children("li").find("ul").slideUp(350);
          $(this)
            .next("ul")
            .children("li")
            .find("span.child-link")
            .removeClass("active");
          $(this).toggleClass("active");
          return false;
        });
      });
    };

    loadScripts();
  }, []);

  useEffect(() => {
    const header = document.querySelector("header.navbar");

    if (pathname !== "/") {
      // Always fixed on non-home pages
      header?.classList.add("menu-fixed");
      return;
    }
    header?.classList.remove("menu-fixed");

    // Home page scroll behavior
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        header?.classList.add("menu-fixed");
      } else {
        header?.classList.remove("menu-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
   
    
      <header id="master-head" className="navbar menu-absolute menu-center">
        <div className="container-fluid">
          <div id="main-logo" className="logo-container">
            <Link className="logo" href="/">
              <Image
                src="/images/logo-d.png"
                className="logo-dark"
                alt="Crm"
                width={172}
                height={77}
              />
              <Image
                src="/images/logo-d.png"
                className="logo-light"
                alt="Crm"
                width={172}
                height={77}
              />
            </Link>
          </div>
          <div className="menu-toggle-btn">
            <Link href="#" className="navbar-toggle">
              <div className="burger-lines"></div>
            </Link>
          </div>
          <div id="navigation" className="nav navbar-nav navbar-main">
            <ul id="main-menu" className="menu-primary">
              {/* <li className={`menu-item ${pathname === '/' ? 'active' : ''}`}>
              <Link href="/">Home</Link>
            </li> */}
              <li
                className={`menu-item ${pathname === "/about" ? "active" : ""}`}
              >
                <Link href="/about">About</Link>
              </li>
              <li className={`menu-item menu-item-has-children`}>
                <Link href="/features">Features</Link>
                <ul className="sub-menu">
                  {featureHeader?.headers?.map((item, index) => (
                    <li className="menu-item" key={index}>
                      <Link href={`/features/${item.slug}`}>{item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item">
                <Link href="/contact" onClick={handleOpenModal}>
                  Book a Session
                </Link>
              </li>
              <li
                className={`menu-item ${
                  pathname === "/pricing" ? "active" : ""
                }`}
              >
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="menu-item">
                <Link href="/login">Free Trial</Link>
              </li>
              <li className="menu-item menu-item-has-children mega-menu">
                <Link href="#">Quick View</Link>
                <ul className="sub-menu mega-menu-inner">
                  <li className="menu-item col-title">
                    <Link href="#">Inner Pages</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/features">Features</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/login">Login/Register</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item col-title">
                    <Link href="#">Elements</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/how-crm-works">How Crm Works</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="#!">Free Demo</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="#!" onClick={handleOpenModal}>
                          Book a Session
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/become-a-seller">Agent Or Seller </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item col-title">
                    <Link href="#">Another Element</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/support">Support</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/pricing">Pricing</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/blogs">Blog</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="#!">Element 4</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ButtonHeader/>
        </div>
      </header>
      {showModal && <Request_Modal onClose={handleCloseModal} />}
    </>
  );
}
