"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Counter({ data }) {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const formatted = data.map((item) => ({
        title: item.title,
        target: Number(item.Description.trim()),
      }));
      setCounters(formatted);
    }
  }, [data]);

//  useEffect(() => {
//   console.log("📊 Current counterData:", counters);
// }, [counters]);

  const [counts, setCounts] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  // Start counter animation when visible
  useEffect(() => {
    if (counters.length > 0) {
      setCounts(counters.map(() => 0));
    }
  }, [counters]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Run animation
  useEffect(() => {
    if (!hasStarted || counters.length === 0) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const increments = counters.map((c) => c.target / steps);

    const counterInterval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const newValue = count + increments[i];
          return newValue >= counters[i].target ? counters[i].target : newValue;
        })
      );
    }, interval);

    const stop = setTimeout(() => clearInterval(counterInterval), duration + 100);
    return () => {
      clearInterval(counterInterval);
      clearTimeout(stop);
    };
  }, [hasStarted, counters]);

  return (
    <div className="counter-wrapper with-separator d-flex" ref={counterRef}>
      {counters.map((item, i) => (
        <div className="counter-block" key={i}>
          <div className="counter">
            <span className="counter-number">{Math.floor(counts[i])}k+</span>
          </div>
          <div className="counter-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
