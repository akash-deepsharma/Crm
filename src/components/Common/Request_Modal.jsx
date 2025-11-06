"use client";
import React, { useEffect, useState } from "react";
import "../../styles/components/RequestModal.css";
import { requestPostApi, requestGetApi } from "@/ApiCall/requestPostApi";

export default function Request_Modal({ onClose }) {
  const [formData, setFormData] = useState({
    company_name: "",
    work_email: "",
    phone_number: "",
    industry_type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [demoRequests, setDemoRequests] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // ✅ Allow only numbers for phone_number field
    if (id === "phone_number") {
      const numericValue = value.replace(/\D/g, ""); // remove all non-numeric characters
      setFormData({ ...formData, [id]: numericValue });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    setErrors({ ...errors, [id]: "" }); // clear error when typing
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.company_name.trim()) {
      newErrors.company_name = "Company name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.work_email.trim()) {
      newErrors.work_email = "Email is required.";
    } else if (!emailRegex.test(formData.work_email)) {
      newErrors.work_email = "Enter a valid email address.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Enter a valid 10-digit Indian phone number.";
    }

    if (!formData.industry_type) {
      newErrors.industry_type = "Please select an industry type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // console.log("Submitting form data:", formData);
      const response = await requestPostApi(formData);
      // console.log("API Response:", response);

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

  useEffect(() => {
    async function fetchData() {
      const data = await requestGetApi();
      // console.log("✅ First get data:", data);
      if (data?.status === "success") {
        setDemoRequests(data?.data || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="modal request_modal show d-flex justify-content-center align-items-center bg-opacity-75 bg-dark  position-fixed top-0 start-0 w-100 h-100">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable w-100 px-3">
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
                  <div className="request_content p-4 h-100">
                    <div className="about-section align-items-center h-100">
                      <div className="heading-wrapper with-separator">
                        <h2 className="h1">
                          <span>{demoRequests?.heading}</span>{" "}
                          {demoRequests?.sub_heading}
                        </h2>
                      </div>
                      <div className="text-wrapper">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: demoRequests?.content,
                          }}
                        ></p>
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
                <div className="col-lg-6 d-flex flex-column justify-content-center bg-light">
                  <div className="request_form p-4">
                    <div className="request-title">
                      <h4 className="fw-bold mb-4">Request a demo</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      {/* Company Name */}
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
                        />
                        {errors.company_name && (
                          <p className="text-danger small mt-1">{errors.company_name}</p>
                        )}
                      </div>

                      {/* Work Email */}
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
                        />
                        {errors.work_email && (
                          <p className="text-danger small mt-1">{errors.work_email}</p>
                        )}
                      </div>

                      {/* Phone Number */}
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
                          maxLength="10"
                          inputMode="numeric"
                        />
                        {errors.phone_number && (
                          <p className="text-danger small mt-1">{errors.phone_number}</p>
                        )}
                      </div>

                      {/* Industry Type */}
                      <div className="mb-3">
                        <label htmlFor="industry_type" className="form-label fw-semibold">
                          Select Industry Type
                        </label>
                        <select
                          className="form-select"
                          id="industry_type"
                          value={formData.industry_type}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="product_demo">Product Demo</option>
                          <option value="pricing_info">Pricing Information</option>
                          <option value="partnership_opportunities">Partnership Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.industry_type && (
                          <p className="text-danger small mt-1">{errors.industry_type}</p>
                        )}
                      </div>

                      {/* Message */}
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
