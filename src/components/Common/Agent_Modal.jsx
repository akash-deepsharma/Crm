"use client";
import React, { useState } from "react";
import {
  agentPostApi,
  sentEmailOtpApi,
  verifyEmailOtpApi,
  sentPhoneOtpApi,
  verifyPhoneOtpApi,
} from "@/ApiCall/agentApi";
import VerifyOtpModal from "./VerifyOtpModal";

export default function Agent_Modal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otpType, setOtpType] = useState(""); // "email" or "phone"
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ Send Email OTP
  const handleSendEmailOtp = async () => {
    const email = formData.email.trim();
    if (!email) return alert("Please enter email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Please enter a valid email");

    try {
      const res = await sentEmailOtpApi(email); // Pass value directly
      if (res.status === true) {
        setOtpType("email");
        setShowOtpPopup(true);
      } else {
        alert(res.message || "Failed to send OTP to email");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email OTP");
    }
  };

  // ✅ Send Phone OTP
  const handleSendPhoneOtp = async () => {
    const phone = formData.phone.replace(/\D/g, "");
    if (!phone) return alert("Please enter phone number");

    try {
      const res = await sentPhoneOtpApi(phone); // Pass value directly
      if (res.status === true) {
        setOtpType("phone");
        setShowOtpPopup(true);
      } else {
        alert(res.message || "Failed to send OTP to phone");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending phone OTP");
    }
  };

  // ✅ Verify OTP Callback
  const handleVerifyOtp = async (enteredOtp) => {
    try {
      let res;
      if (otpType === "email") {
        res = await verifyEmailOtpApi(formData.email, enteredOtp); // Pass two arguments
        if (res.status === true) {
          setEmailVerified(true);
          alert("✅ Email verified successfully!");
        } else {
          alert(res.message || "Invalid Email OTP.");
          return;
        }
      } else if (otpType === "phone") {
        res = await verifyPhoneOtpApi(formData.phone, enteredOtp); // Pass two arguments
        if (res.status === true) {
          setPhoneVerified(true);
          alert("✅ Phone verified successfully!");
        } else {
          alert(res.message || "Invalid Phone OTP.");
          return;
        }
      }

      setShowOtpPopup(false);
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP.");
    }
  };

// ✅ Submit Form (only if verified)
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!emailVerified || !phoneVerified) {
    alert("Please verify your Email and Phone before submitting.");
    return;
  }

  const formattedData = {
    full_name: formData.name,
    email: formData.email,
    phone_number: formData.phone,
    location: formData.location,
    message: formData.message,
  };

  try {
    const res = await agentPostApi(formattedData);

    if (res.status === true || res.status === "true") {
      alert("✅ Agent request submitted successfully!");
      onClose();
    } else if (res.status === false || res.status === "false") {
      alert(res.message || "⚠️ Request failed. Please try again.");
    } else {
      alert("⚠️ Unexpected response from server.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("❌ Failed to submit agent form.");
  }
};


  return (
    <>
      <div className="modal show d-flex justify-content-center align-items-center agent_banner position-fixed top-0 start-0 w-100 h-100 bg-opacity-75 bg-dark">
        <div className="modal-dialog modal-dialog-centered w-100 px-3">
          <div className="modal-content p-4 rounded-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Join as an Agent</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
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

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="email"
                      id="email"
                      className="form-control "
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={emailVerified}
                    />
                    {emailVerified ? (
                      <span className="text-success fw-bold fs-5">✔</span>
                    ) : formData.email ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleSendEmailOtp}
                        disabled={showOtpPopup}
                      >
                        Verify
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                       disabled={phoneVerified}
                    />
                    {phoneVerified ? (
                      <span className="text-success fw-bold fs-5">✔</span>
                    ) : formData.phone ? (
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleSendPhoneOtp}
                        disabled={showOtpPopup}
                      >
                        Verify
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fw-semibold">
                    City / Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Enter your city"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={!emailVerified || !phoneVerified}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpPopup && (
        <VerifyOtpModal
          onClose={() => setShowOtpPopup(false)}
          onVerify={handleVerifyOtp}
          type={otpType}
        />
      )}
    </>
  );
}
