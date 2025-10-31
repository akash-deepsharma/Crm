"use client";
import React, { useState } from "react";

export default function VerifyOtpModal({ onClose, onVerify, type }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) return alert("Please enter OTP");
    onVerify(otp);
  };

  return (
    <div className="modal show d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4">
          <h5 className="fw-bold mb-3">
            Verify {type === "email" ? "Email" : "Phone"} OTP
          </h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Verify
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
