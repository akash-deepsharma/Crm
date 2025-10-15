"use client";
import React from "react";
import { signInWithGoogle } from "@/utils/firebaseConfig";
import Image from "next/image";

export default function page() {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  return (
    <div>
      <div className="dc-signin theme-two " style={{background:'none'}}>
        <div className="signin-wrapper">
          <div className="intro-box">
            <div className="intro-content style-dark">
              <Image                src="/images/logo-d.png"
                className="logo"
                alt="Crm"
                width={150}
                height={200}
              />
              <div className="heading-wrapper">
                <h2 className="h1">
                  Welcome to <span>Crm</span>
                </h2>
              </div>
              <div className="text-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sodales dictum viverra. Aenean sodales dictum viverra.
                </p>
              </div>
              <div className="btn-wrapper">
                <a className="btn btn-primary btn-light" href="#">
                  Discover More
                </a>
              </div>
            </div>
            <div className="st-tab-btn">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#SignIn"
                    role="tab"
                  >
                    Login / Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-box">
            <div className="st-tab-content">
              <div className="tab-content">
                <div className="tab-pane active" id="SignIn" role="tabpanel">
                  <form>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone"
                      />
                    </div>
                  
                    <div className="form-group text-center">
                      <a href="#" className="btn link-btn forgot-link">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-full">Sign In</button>
                    </div>
                    <div className="or">
                      <span>or</span>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-primary btn-full email-btn">
                        Continue with Gmail
                      </button>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-full facebook-btn">
                        Continue with Facebook
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
