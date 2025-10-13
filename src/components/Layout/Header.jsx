'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Header() {
   
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

      // --- Mobile Menu Open ---
        $(".menu-toggle-btn").click(function () {
          $(this).addClass("active");
          $("#navigation").addClass("open");
          $("body").addClass("navigation-in");
        });

        // --- Menu Close ---
        $(document).on("click", "#navigation .close-btn, #navigation a", function () {
          $(".menu-toggle-btn").removeClass("active");
          $("#navigation").removeClass("open");
          $("body").removeClass("navigation-in");
        });

        // --- ESC Key Close ---
        $(document).keydown(function (e) {
          if (e.keyCode === 27) {
            $(".menu-toggle-btn").removeClass("active");
            $("#navigation").removeClass("open");
            $("body").removeClass("navigation-in");
          }
        });

        // --- Dropdown Menu Arrows ---
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
          $(this)
            .next("ul")
            .children("li")
            .find("ul")
            .slideUp(350);
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
    const handleScroll = () => {
      const header = document.querySelector("header.navbar");
      if (window.scrollY >= 150) {
        header?.classList.add("menu-fixed");
      } else {
        header?.classList.remove("menu-fixed");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
            <header id="master-head" className="navbar menu-absolute menu-center">
                <div className="container-fluid">
                    <div id="main-logo" className="logo-container">
                        <Link className="logo" href="/">
                            {/* <Image src="images/d-code-logo-dark.svg" className="logo-dark" width={200} height={200}  alt="DCode"/>
                            <Image src="images/d-code-logo-light.svg" className="logo-light" alt="DCode" width={200} height={200}/> */}

                            <Image src="/images/logo-d.png" className="logo-dark" width={150} height={150}  alt="DCode"/>
                            <Image src="/images/logo-d.png" className="logo-light" alt="DCode" width={150} height={150}/>
                        </Link>
                    </div>
                    <div className="menu-toggle-btn">
                        {/*  Mobile menu toggle */}
                        <a className="navbar-toggle">
                            <div className="burger-lines">
                            </div>
                        </a>
                        {/* End mobile menu toggle */}
                    </div>
                    <div id="navigation" className="nav navbar-nav navbar-main">
                        <ul id="main-menu" className="menu-primary">
                            <li className="menu-item active">
                                <a href="/">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="/about">About</a>                                
                            </li>
                            <li className="menu-item">
                                <a href="/services">Services</a>                                
                            </li>
                            <li className="menu-item">
                                <a href="/blogs">Blogs</a>                                
                            </li>
                            <li className="menu-item">
                                <a href="/contact">Contact</a>                                
                            </li>
                            {/* <li className="menu-item menu-item-has-children">
                                <a href="#">Blogs</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Blog Standard</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="page-blog-grid-3-col.html">Blog Grid (3 Col)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-blog-grid-2-col.html">Blog Grid (2 Col)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="page-blog-with-sidebar.html">Blog with Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li> */}
                           
                            <li className="menu-item menu-item-has-children mega-menu">
                                <a href="#">About Dashboard</a>
                                <ul className="sub-menu mega-menu-inner">
                                    <li className="menu-item col-title">
                                        <a href="services">Services</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#!">Services Software</a></li>
                                            <li className="menu-item"><a href="#!">Services</a></li>
                                            <li className="menu-item"><a href="#!">Services</a></li>
                                            <li className="menu-item"><a href="#!">Services</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Inner Pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/about">About Us</a></li>
                                            <li className="menu-item"><a href="]services">Services</a></li>
                                            <li className="menu-item"><a href="/contact">Contact Us</a></li>
                                            <li className="menu-item"><a target="_blank" href="/signin">Login/Register</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Elements</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#!">Project element 1</a></li>
                                            <li className="menu-item"><a href="#!">Project element 2</a></li>
                                            <li className="menu-item"><a href="#!">Project element 3</a></li>
                                            <li className="menu-item"><a href="#!">Project element 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <a href="#">Another Element</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#!">Element 1</a></li>
                                            <li className="menu-item"><a href="#!">Element 2</a></li>
                                            <li className="menu-item"><a href="#!"> Element 3</a></li>
                                            <li className="menu-item"><a href="#!">Element 4</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <div className="menu-button">
                            <a href="#" target="_blank">
                                <div className="btn btn-outline-primary btn-light">sign in</div>
                            </a>
                        </div>
                        <div className="search-option style-dark">
                            <div className="search-btn">
                                <a href="#"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  )
}
