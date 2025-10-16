"use client";
import React, { useState, useRef } from "react";
import { signInWithGoogle } from "@/utils/firebaseConfig";
import Image from "next/image";
import "../../styles/components/login.css";

export default function Page() {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [userExists, setUserExists] = useState(null); // null = not checked yet
  const [phoneEmail, setPhoneEmail] = useState("");
  const inputRefs = useRef([]);

  // ✅ Simulated API check for user existence
  const checkUserExists = async (value) => {
    // Replace this with actual API call
    const existingUsers = ["user1@gmail.com", "9876543210"];
    return existingUsers.includes(value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!phoneEmail) return alert("Please enter phone/email");

    const exists = await checkUserExists(phoneEmail);
    setUserExists(exists);

    if (!exists) {
      // Show OTP popup for new user
      setShowOtpPopup(true);
    }
    // If exists, password field is already shown in form
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      setShowOtpPopup(true);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // ✅ OTP input handling
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <div className="dc-signin theme-two" style={{ background: "none" }}>
        <div className="signin-wrapper">
          <div className="intro-box">
            <div className="intro-content style-dark">
              <Image
                src="/images/logo-d.png"
                className="logo"
                alt="Crm"
                width={200}
                height={200}
                style={{filter:'invert(1) brightness(9.5)'}}
              />
              <div className="heading-wrapper">
                <h2 className="h1">
                  Welcome to <span>Crm</span>
                </h2>
              </div>
              <div className="text-wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra.</p>
              </div>
              <div className="btn-wrapper">
                <a className="btn btn-primary btn-light" href="#">Discover More</a>
              </div>
            </div>
            <div className="st-tab-btn">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <pre className="nav-link active" data-toggle="tab" role="tab">
                    Login / Register
                  </pre>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-box">
            <div className="st-tab-content">
              <div className="tab-content">
                <div className="tab-pane active" id="SignIn" role="tabpanel">
                  <form onSubmit={handleSignIn}>
                    <div className="form-group">
                      <label>Phone/Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone/Email"
                        value={phoneEmail}
                        onChange={(e) => setPhoneEmail(e.target.value)}
                      />
                    </div>

                    {/* ✅ Show password only if user exists */}
                    {userExists && (
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    )}

                    
                      <div className="form-group text-center">
                        <a href="#" className="btn link-btn forgot-link">
                          Forgot Password?
                        </a>
                      </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-full">
                        {userExists ? "Sign In" : "Next"}
                      </button>
                    </div>

                    {!userExists && <div className="or"><span>or</span></div>}
                  </form>

                  <div className="form-group">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="btn btn-primary btn-full email-btn"
                    >
                      Continue with Google
                    </button>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-full facebook-btn">
                      Continue with Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ OTP Popup */}
      {showOtpPopup && (
        <div className="otp-overlay">
          <div className="otp-box">
            <h3 className="otp-title">OTP VERIFICATION</h3>
            <p className="otp-info">
              An OTP has been sent to <span>{phoneEmail}</span>
            </p>
            <p className="otp-msg">Please enter OTP to verify</p>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="otp-input"
                />
              ))}
            </div>
            <button
              onClick={() => setShowOtpPopup(false)}
              className="btn otp-close px-0"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
