'use client'
import React, { useState } from 'react'

export default function ascasdcasdc() {
  const [activeTab, setActiveTab] = useState('SignIn')

  return (
    <div className="dc-signin theme-two">
      <div className="signin-wrapper">
        <div className="intro-box">
          <div className="intro-content style-dark">
            <img
              src="images/d-code-logo-light.svg"
              className="logo"
              alt="DCode"
            />
            <div className="heading-wrapper">
              <h2 className="h1">
                Welcome to <span>DCode</span>
              </h2>
            </div>
            <div className="text-wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean sodales dictum viverra.
              </p>
            </div>
            <div className="btn-wrapper">
              <a className="btn btn-primary btn-light" href="#">
                Discover More
              </a>
            </div>
          </div>

          {/* TAB BUTTONS */}
          <div className="st-tab-btn">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'SignIn' ? 'active' : ''}`}
                  onClick={() => setActiveTab('SignIn')}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'SignUp' ? 'active' : ''}`}
                  onClick={() => setActiveTab('SignUp')}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="form-box">
          <div className="st-tab-content">
            {activeTab === 'SignIn' && (
              <div className="tab-pane active" id="SignIn" role="tabpanel">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email/Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
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
                    <button className="btn btn-primary btn-full email-btn">
                      Continue with Email
                    </button>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-full facebook-btn">
                      Continue with Facebook
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'SignUp' && (
              <div className="tab-pane active" id="SignUp" role="tabpanel">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="form-group text-center">
                    <label>
                      <input type="checkbox" required /> I accept the policy and
                      terms
                    </label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-full">Sign Up</button>
                  </div>
                  <div className="or">
                    <span>or</span>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-full email-btn">
                      Continue with Email
                    </button>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-full facebook-btn">
                      Continue with Facebook
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
