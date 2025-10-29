"use client";
import React, { useState } from "react";
import "../../styles/components/RequestModal.css";
import { requestPostApi } from "@/ApiCall/requestPostApi";

export default function Request_Modal({ onClose }) {
  const [formData, setFormData] = useState({
    company_name: "",
    work_email: "",
    phone_number: "",
    industry_type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form data:", formData);
      const response = await requestPostApi(formData);
      console.log("API Response:", response);

      if (response.status === "success") {
        alert("✅ Demo request submitted successfully!");
        onClose();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Request submission failed:", error);
      alert("⚠️ Failed to submit. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal request_modal show d-flex justify-content-center align-items-center bg-opacity-75 bg-dark">
      <div className="modal-dialog modal-xl modal-dialog-centered w-100 px-3">
        <div className="modal-content p-0 rounded-4 overflow-hidden">
          <button
            type="button"
            className="btn-close request_demo_close"
            onClick={onClose}
          ></button>

          <div className="modal-body p-0">
            <div className="request_modal_box">
              <div className="row">
                {/* Left Section */}
                <div className="col-lg-6">
                  <div className="request_content p-lg-5 p-md-2 p-0 h-100">
                    <div className="about-section align-items-center h-100">
                      <div className="heading-wrapper with-separator">
                        <h2 className="h1">
                          <span>Transform your Billing</span> with exceptional guidance
                        </h2>
                      </div>
                      <div className="text-wrapper">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros.
                        </p>
                        <ul className="list-style-one">
                          <li>
                            <h2 className="h5">45,000+</h2>
                            <p>Helpful 1-on-1 demo sessions.</p>
                          </li>
                          <li>
                            <h2 className="h5">75%</h2>
                            <p>Reduction in processing time.</p>
                          </li>
                          <li>
                            <h2 className="h5">50+</h2>
                            <p>Unique industries served.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <div className="request_form p-lg-5 p-md-2 p-0">
                    <div className="request-title">
                      <h4 className="fw-bold mb-4">Request a demo</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="company_name" className="form-label fw-semibold">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company_name"
                          className="form-control"
                          placeholder="Enter your company name"
                          value={formData.company_name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="work_email" className="form-label fw-semibold">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="work_email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={formData.work_email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone_number" className="form-label fw-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone_number"
                          className="form-control"
                          placeholder="Enter your phone number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="industry_type" className="form-label fw-semibold">
                          Select Industry Type
                        </label>
                        <select
                          className="form-select"
                          id="industry_type"
                          value={formData.industry_type}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="product_demo">Product Demo</option>
                          <option value="pricing_info">Pricing Information</option>
                          <option value="partnership_opportunities">Partnership Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <textarea
                          id="message"
                          rows="3"
                          className="form-control"
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Application"}
                      </button>
                    </form>
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
