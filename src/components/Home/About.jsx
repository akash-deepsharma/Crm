"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function About() {
  // Counter target values
  const counters = [
    { title: "Total Downloads", target: 80 },
    { title: "Happy Users", target: 76 },
    { title: "Good Reviews", target: 37 },
  ];

  // State to store live counter values
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60; 
    const interval = duration / steps;

    const increments = counters.map((counter) => counter.target / steps);

    const counterInterval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const newValue = count + increments[i];
          return newValue >= counters[i].target ? counters[i].target : newValue;
        })
      );
    }, interval);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <div className="about-section section-padding light-gradient-bg right-col-full">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="heading-wrapper with-separator">
              <h2 className="h1">
                Build your <span>SaaS landing page</span> using the DCode
              </h2>
            </div>

            <div className="text-wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                congue erat ante, volutpat dictum neque dignissim eget.
              </p>
              <ul className="list-style-one">
                <li>Nullam placerat nunc id ornare convallis.</li>
                <li>
                  Mauris id dui aliquam, dapibus felis vel, iaculis risus.
                </li>
                <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
              </ul>
            </div>

            {/* Counter Section */}
            <div className="counter-wrapper with-separator d-flex">
              {counters.map((item, index) => (
                <div className="counter-block" key={index}>
                  <div className="counter">
                    <span className="counter-number">
                      {Math.floor(counts[index])}k+
                    </span>
                  </div>
                  <div className="counter-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <Image
              src="/images/dashboard-img-2.png"
              alt="Dashboard"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
