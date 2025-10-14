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
                            {/* <Image src="images/d-code-logo-dark.svg" className="logo-dark" width={200} height={200}  alt="Crm"/>
                            <Image src="images/d-code-logo-light.svg" className="logo-light" alt="Crm" width={200} height={200}/> */}

                            <Image src="/images/logo-d.png" className="logo-dark" alt="Crm" width={150} height={150} />
                            <Image src="/images/logo-d.png" className="logo-light" alt="Crm" width={150} height={150}/>
                        </Link>
                    </div>
                    <div className="menu-toggle-btn">
                        {/*  Mobile menu toggle */}
                        <Link href="#" className="navbar-toggle">
                            <div className="burger-lines">
                            </div>
                        </Link>
                        {/* End mobile menu toggle */}
                    </div>
                    <div id="navigation" className="nav navbar-nav navbar-main">
                        <ul id="main-menu" className="menu-primary">
                            <li className="menu-item active">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/about">About</Link>                                
                            </li>
                            <li className="menu-item">
                                <Link href="/services">Services</Link>                                
                            </li>
                            <li className="menu-item">
                                <Link href="/blogs">Blogs</Link>                                
                            </li>
                            <li className="menu-item">
                                <Link href="/contact">Contact</Link>                                
                            </li>
                            {/* <li className="menu-item menu-item-has-children">
                                <Link href="#">Blogs</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                        <Link href="#">Blog Standard</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <Link href="page-blog-grid-3-col.html">Blog Grid (3 Col)</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="page-blog-grid-2-col.html">Blog Grid (2 Col)</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="page-blog-with-sidebar.html">Blog with Sidebar</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="page-blog-details.html">Blog Details</Link>
                                    </li>
                                </ul>
                            </li> */}
                           
                            <li className="menu-item menu-item-has-children mega-menu">
                                <Link href="#">About Dashboard</Link>
                                <ul className="sub-menu mega-menu-inner">
                                    <li className="menu-item col-title">
                                        <Link href="services">Services</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><Link href="#!">Services Software</Link></li>
                                            <li className="menu-item"><Link href="#!">Services</Link></li>
                                            <li className="menu-item"><Link href="#!">Services</Link></li>
                                            <li className="menu-item"><Link href="#!">Services</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <Link href="#">Inner Pages</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><Link href="/about">About Us</Link></li>
                                            <li className="menu-item"><Link href="]services">Services</Link></li>
                                            <li className="menu-item"><Link href="/contact">Contact Us</Link></li>
                                            <li className="menu-item"><Link target="_blank" href="/signin">Login/Register</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <Link href="#">Elements</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><Link href="#!">Project element 1</Link></li>
                                            <li className="menu-item"><Link href="#!">Project element 2</Link></li>
                                            <li className="menu-item"><Link href="#!">Project element 3</Link></li>
                                            <li className="menu-item"><Link href="#!">Project element 4</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item col-title">
                                        <Link href="#">Another Element</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><Link href="#!">Element 1</Link></li>
                                            <li className="menu-item"><Link href="#!">Element 2</Link></li>
                                            <li className="menu-item"><Link href="#!"> Element 3</Link></li>
                                            <li className="menu-item"><Link href="#!">Element 4</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <div className="menu-button">
                            <Link href="#" target="_blank">
                                <div className="btn btn-outline-primary btn-light">sign in</div>
                            </Link>
                        </div>
                        <div className="search-option style-dark">
                            <div className="search-btn">
                                <Link href="#"><i className="fas fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  )
}
