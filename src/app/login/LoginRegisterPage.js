"use client";
import React, { useState, useRef } from "react";
import { signInWithGoogle } from "@/utils/firebaseConfig";
import Image from "next/image";
import "../../styles/components/login.css";
import { ForgetPassword, LoginApi, OtpVerified, SetCheckPassword, UpdatePassword } from "@/ApiCall/loginApi";
import Link from "next/link";

export default function LoginRegisterPage() {
 const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showSetPasswordPopup, setShowSetPasswordPopup] = useState(false);
  const [showUpdatePasswordPopup, setShowUpdatePasswordPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [userExists, setUserExists] = useState(null);
  const [inputType, setInputType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isForgetFlow, setIsForgetFlow] = useState(false);

  // ✅ Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputRefs = useRef([]);

  // ✅ Handle Sign In / Register Step
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!inputType) return alert("Please enter phone/email");
    try {
      const payload = { input_type: inputType };
      const responseLogin = await LoginApi(payload);
      const exists = responseLogin.status === "already_exist";
      setUserExists(exists);
      if (!exists) {
        setShowOtpPopup(true);
      } else {
        alert("User exists — please enter password to login.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };

  // ✅ Handle OTP verification
  const handleOtpVerify = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      const payload = { input_type: inputType, otp: enteredOtp };
      const otpResponse = await OtpVerified(payload);
      if (otpResponse.status === "success") {
        alert("✅ OTP verified successfully!");
        setShowOtpPopup(false);

        if (isForgetFlow) {
          // ✅ This is forget password flow
          setShowUpdatePasswordPopup(true);
        } else {
          setShowSetPasswordPopup(true);
        }
      }
      else {
        alert(otpResponse.message || "❌ Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Something went wrong while verifying OTP!");
    }
  };

  // ✅ Handle Password Submission (after OTP verification)
  const handleSetPasswordSubmit = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const payload = {
        input_type: inputType,
        password: password,
        exist: userExists,
      };
      const response = await SetCheckPassword(payload);
      if (response.status === "success") {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        setShowSetPasswordPopup(false);
        window.location.href = "/profile";
      } else {
        alert(response.message || "❌ Failed to set password. Try again.");
      }
    } catch (error) {
      console.error("Set Password Error:", error);
      alert("Something went wrong while setting password!");
    }
  };

 const handleUpdatePasswordSubmit = async () => {
  if (!password || !confirmPassword) {
    alert("Please fill in both password fields.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const payload = {
      input_type: inputType,
      password: password,
    };
    const response = await UpdatePassword(payload);
    console.log("after Update Password" , response)

    if (response.status === "success") {
  alert("✅ Password updated successfully!");
  setShowUpdatePasswordPopup(false);
  setIsForgetFlow(false); 
  window.location.href = "/login";
} else {
  alert(response.message || "❌ Failed to update password. Try again.");
}
  } catch (error) {
    console.error("Update Password Error:", error);
    alert("Something went wrong while updating password!");
  }
};


  // handel forget password

  const handelForgetPassword = async () => {
  if (!inputType) {
    alert("Please enter your phone or email first.");
    return;
  }

  try {
    const payload = {
      input_type: inputType,
      forget: true,
    };
    const response = await ForgetPassword(payload);

    console.log("ForgetPassword data res", response.data);
    if (response.status === "success") {
      setIsForgetFlow(true); 
      setShowOtpPopup(true);
    } else {
      alert(response.message || "❌ Failed to send OTP. Try again.");
    }
  } catch (error) {
    console.error("Forget Password Error:", error);
    alert("Something went wrong while sending OTP!");
  }
};

  // ✅ Handle password-based login (for existing users)
  const handleSetCheckPassword = async () => {
    if (!password) {
      alert("Please enter your password");
      return;
    }
    try {
      const payload = {
        input_type: inputType,
        password: password,
        exist: userExists,
      };
      const passResponse = await SetCheckPassword(payload);
      if (passResponse.status === "success") {
        localStorage.setItem("token", passResponse.token);
        localStorage.setItem("user", JSON.stringify(passResponse.user));
        alert("✅ Logged in successfully!");
        setShowSetPasswordPopup(false);
        window.location.href = "/profile";
      } else {
        alert(passResponse.message || "❌ Incorrect password, try again.");
      }
    } catch (error) {
      console.error("Password Check Error:", error);
      alert("Something went wrong while verifying password!");
    }
  };

  // ✅ Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // ✅ OTP Input Handling
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (index < 5 && value) inputRefs.current[index + 1]?.focus();
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

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d{1,6}$/.test(paste)) return;
    const values = paste.split("").slice(0, 6);
    const newOtp = [...otp];
    values.forEach((v, i) => (newOtp[i] = v));
    setOtp(newOtp);
  };

  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false);
    setOtp(["", "", "", "", "", ""]);
  };


  return (
     <div>
      <div className="dc-signin theme-two" style={{ background: "none" }}>
        <div className="signin-wrapper">
          {/* LEFT SIDE */}
          <div className="intro-box">
            <div className="intro-content style-dark">
              <Image
                src="/images/logo-d.png"
                className="logo"
                alt="Crm"
                width={200}
                height={200}
                style={{ filter: "invert(1) brightness(9.5)" }}
              />
              <div className="heading-wrapper">
                <h2 className="h1">
                  Welcome to <span>Crm</span>
                </h2>
              </div>
              <div className="text-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sodales dictum viverra.
                </p>
              </div>
              <div className="btn-wrapper">
                <a className="btn btn-primary btn-light" href="/about">
                  Discover More
                </a>
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

          {/* RIGHT SIDE FORM */}
          <div className="form-box">
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label>Phone/Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone/Email"
                  value={inputType}
                  onChange={(e) => setInputType(e.target.value)}
                  disabled={userExists}
                />
              </div>

              {userExists && (
                <div className="form-group password-field" style={{ position: "relative" }}>
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "40px",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              )}

              <div className="form-group text-center">
                <Link href="#" onClick={handelForgetPassword} className="btn link-btn forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <div className="form-group">
                {userExists ? (
                  <button
                    type="button"
                    onClick={handleSetCheckPassword}
                    className="btn btn-primary btn-full"
                  >
                    Sign In
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary btn-full">
                    Next
                  </button>
                )}
              </div>

              {!userExists && (
                <div className="or">
                  <span>or</span>
                </div>
              )}
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

      {/* ✅ OTP POPUP */}
      {showOtpPopup && (
        <div className="otp-overlay">
          <div className="otp-box">
            <button onClick={handleCloseOtpPopup} className="btn otp-close px-0">
              <i className="fa fa-times"></i>
            </button>
            <h3 className="otp-title">OTP VERIFICATION</h3>
            <p className="otp-info">
              An OTP has been sent to <span>{inputType}</span>
            </p>
            <p className="otp-msg">Please enter OTP to verify</p>

            <div className="otp-inputs" onPaste={handlePaste}>
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

            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary" onClick={handleOtpVerify}>
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Set Password Popup */}
      {showSetPasswordPopup && (
        <div className="otp-overlay">
          <div className="otp-box text-start pt-4 ">
            <h4 className="">Set Password</h4>
            <button
              onClick={() => setShowSetPasswordPopup(false)}
              className="btn otp-close px-0"
            >
              <i className="fa fa-times"></i>
            </button>

            {/* New Password Field */}
            <div className="form-group mt-3" style={{ position: "relative" }}>
              <label>New Password</label>
              <input
                type={showNewPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="password-toggle"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "40px",
                  cursor: "pointer",
                }}
              >
                {showNewPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="form-group" style={{ position: "relative" }}>
              <label>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "40px",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary" onClick={handleSetPasswordSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showUpdatePasswordPopup && (
        <div className="otp-overlay">
          <div className="otp-box text-start pt-4 ">
            <h4 className="">Update Password</h4>
            <button
              onClick={() => setShowUpdatePasswordPopup(false)}
              className="btn otp-close px-0"
            >
              <i className="fa fa-times"></i>
            </button>

            {/* New Password Field */}
            <div className="form-group mt-3" style={{ position: "relative" }}>
              <label>New Password</label>
              <input
                type={showNewPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="password-toggle"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "40px",
                  cursor: "pointer",
                }}
              >
                {showNewPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="form-group" style={{ position: "relative" }}>
              <label>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "40px",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary" onClick={handleUpdatePasswordSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
