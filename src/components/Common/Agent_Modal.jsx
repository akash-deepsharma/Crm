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
    emailVerified:"",
    phoneVerified:''
  });

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otpType, setOtpType] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  // ✅ Handle Change with phone number restriction
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone") {
      // Allow only digits
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: numericValue });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // ✅ Email Validation Function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Phone Validation Function
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  // ✅ Send Email OTP
  const handleSendEmailOtp = async () => {
    const email = formData.email.trim();
    if (!email) return alert("Please enter your email");
    if (!isValidEmail(email)) return alert("Please enter a valid email address");

    try {
      const res = await sentEmailOtpApi(email);
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
    const phone = formData.phone;
    if (!phone) return alert("Please enter your phone number");
    if (!isValidPhone(phone)) return alert("Please enter a valid 10-digit phone number");

    try {
      const res = await sentPhoneOtpApi(phone);
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
      res = await verifyEmailOtpApi(formData.email, enteredOtp);
      if (res.status === true) {
        setEmailVerified(true);
        setFormData({ ...formData, emailVerified: true }); // update formData
        alert("✅ Email verified successfully!");
      } else {
        alert(res.message || "Invalid Email OTP.");
        return;
      }
    } else if (otpType === "phone") {
      res = await verifyPhoneOtpApi(formData.phone, enteredOtp);
      if (res.status === true) {
        setPhoneVerified(true);
        setFormData({ ...formData, phoneVerified: true }); // update formData
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

  if (!isValidEmail(formData.email)) return alert("Invalid email format");
  if (!isValidPhone(formData.phone)) return alert("Phone number must be 10 digits");

  if (!formData.emailVerified || !formData.phoneVerified) {
    alert("Please verify your Email and Phone before submitting.");
    return;
  }

  const formattedData = {
    full_name: formData.name,
    email: formData.email,
    phone_number: formData.phone,
    location: formData.location,
    message: formData.message,
    emailVerified: formData.emailVerified, 
    phoneVerified: formData.phoneVerified, 
  };
  console.log("Form Data to submit:", formattedData);

  try {
    const res = await agentPostApi(formattedData);
    if (res.status === true || res.status === "true") {
      alert("✅ Agent request submitted successfully!");
      onClose();
    } else {
      alert(res.message || "⚠️ Request failed. Please try again.");
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
                      className="form-control"
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
                      placeholder="Enter your 10-digit phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={phoneVerified}
                      maxLength={10}
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
