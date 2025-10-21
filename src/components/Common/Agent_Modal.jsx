"use client";
import React, { useState } from "react";

export default function Agent_Modal({ onClose }) {
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
    console.log("Agent Form Submitted:", formData);
    onClose(); // Close after submit (you can remove if you want to stay open)
  };

  return (
    <div className=" modal  show d-flex justify-content-center align-items-center agent_banner position-fixed top-0 start-0 w-100 h-100 bg-opacity-75 bg-dark">
      <div className="modal-dialog modal-dialog-centered w-100 px-3">
        <div className="modal-content p-4 rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">Join as an Agent</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
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
                  Email Address
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

              <div className="mb-3">
                <label htmlFor="city" className="form-label fw-semibold">
                  City / Location
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message / Inquiry
                </label>
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
  );
}
