"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function InnerPageBanner({ data }) {
  const pathname = usePathname();
  data = data || {};

  const pathParts = pathname.split("/").filter(Boolean);
  
  const breadcrumbs = pathParts.map((part, index) => {
    const link = "/" + pathParts.slice(0, index + 1).join("/");
    const label =
      part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    const shortLabel =
      label.length > 20 ? label.slice(0, 24) + "..." : label;

    return { label: shortLabel, link };
  });

  return (
    <div
      className="inner-page-header section-padding style-dark"
      style={{ padding: "160px 0 50px 0" }}
    >
      <div className="container">
        <div className="page-title-inner text-center clearfix">
          <div className="heading-wrapper">
            <h1 className="h1">{data.pageName}</h1>
            <div className="lead-text">
              <p>{data.pageTitle}</p>
            </div>
          </div>

          <ul className="st-breadcrumb">
            {/* Home link */}
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Dynamic breadcrumb links */}
            {breadcrumbs.map((crumb, index) => (
              <li
                key={index}
                className={index === breadcrumbs.length - 1 ? "active" : ""}
              >
                {index === breadcrumbs.length - 1 ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link href={crumb.link}>{crumb.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
