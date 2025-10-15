import React from 'react'

export default function InnerPageBanner(data) {
    data = data.data || {};
  return (
    <div className="inner-page-header section-padding style-dark" style={{padding:'160px 0 50px 0'}}>
        <div className="container">
            <div className="page-title-inner text-center clearfix">
                <div className="heading-wrapper">
                    <h1 className="h1">{data.pageName}</h1>
                     <div className="lead-text">
                        <p>{data.pageTitle}</p>
                    </div>
                </div>
                <ul className="st-breadcrumb">
                    <li><a href="/"></a>Home</li>
                    {/* <li><a href="#">Blog</a></li> */}
                    <li className="active"><span>{data.pageName}</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
