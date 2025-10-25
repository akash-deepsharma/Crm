"use client";
import React, { useState } from 'react'
import '../../styles/components/RequestModal.css'

export default function Request_Modal({ onClose }) {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request Modal Form Submitted:", formData);
    onClose();
  };

  return (
    <div className=" modal request_modal show d-flex justify-content-center align-items-center bg-opacity-75 bg-dark">
      <div className="modal-dialog modal-xl modal-dialog-centered w-100 px-3">
        <div className="modal-content p-0 rounded-4 overflow-hidden">
          {/* <div className="modal-header border-0">
          </div> */}
          <button type="button" className="btn-close request_demo_close" onClick={onClose}></button>

          <div className="modal-body p-0">
            <div className='request_modal_box'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='request_content  p-lg-5 p-md-2 p-0 h-100'>
                  <div className="about-section align-items-center h-100">
                              <div className="heading-wrapper with-separator">
                                <h2 className="h1">
                                   <span>Transform your Billing</span> with exceptional guidance
                                </h2>
                              </div>                              
                  
                              <div className="text-wrapper">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                  sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                                  congue erat ante, volutpat dictum neque dignissim eget.
                                </p>
                                <ul className="list-style-one">
                                  <li>
                                    <h2 className='h5'>45, 000+</h2>
                                    <p>Helpful 1-on-1 demo sessions.</p>
                                  </li>
                                  <li>
                                    <h2 className='h5'>75%</h2>
                                    <p>Reduction in processing time.</p>
                                  </li>
                                  <li>
                                    <h2 className='h5'>50+</h2>
                                    <p>Unique industries served.</p>
                                  </li>
                                </ul>
                              </div>
                      </div>
                  </div>
                </div>
                <div className='col-lg-6  d-flex flex-column justify-content-center'>
                  <div className='request_form  p-lg-5 p-md-2 p-0'>
                    <div className='request-title'>
                    <h4 className='fw-bold mb-4'>Request a demo</h4>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="interest" className="form-label fw-semibold">
                        Select Industry Type
                      </label>
                      <select id="interest" className="form-select" required defaultValue="">
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
                      {/* <label htmlFor="message" className="form-label fw-semibold">
                        Message / Inquiry
                      </label> */}
                      <textarea
                        id="message"
                        rows="3"
                        className="form-control"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit Application
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
