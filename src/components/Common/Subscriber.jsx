"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getnewsletterData, requestPostApi } from "@/ApiCall/newsletterApi";

export default function Subscriber() {
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ email: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Submitting form data:", formData);
      const response = await requestPostApi(formData);

      if (response.status === "success") {
        alert("🎉 " + response.message);
        setFormData({ email: "" });
      } else if (response.status === "exists") {
        alert("😊 " + response.message);
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Contact request submission failed:", error);
      alert("⚠️ Failed to submit. Try again later.");
    } finally {
      setLoading(false);
    }
  };


const [dataNewsletter, setdataNewsletter] = useState([]);

const dataNews = dataNewsletter[0]
const alad = dataNews?.Image_all_text 

console.log("datanewsletter", alad)
  useEffect(() => {
    async function fetchData() {
      const data = await getnewsletterData();
      // console.log("✅ datanewsletter:", data);
      if (data?.status === "success") {
        setdataNewsletter(data.data || []);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="subscribe-section section-padding pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="image-wrapper">
              <Image src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${dataNews?.image}`}
                alt={dataNews?.Image_all_text}
                className="img-fluid"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading-wrapper with-separator">
              <h2 className="h1">
                {dataNews?.heading} <span>{dataNews?.sub_heading}</span>
              </h2>
              <div className="lead-text" dangerouslySetInnerHTML={{ __html: dataNews?.content }}>
              </div>
            </div>
            <div className="subscribe-form-wrapper">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value={loading ? "Submitting..." : "Subscribe Now!"}
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
