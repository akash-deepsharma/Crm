import React from 'react'

export default function ContactForm() {
  return (
    <div className="contact-form">
                <form method="post">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="FiratName"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="How can I help you?"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Tell me more about your requirement"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
  )
}
