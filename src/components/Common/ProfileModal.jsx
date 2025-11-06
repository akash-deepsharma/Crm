"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/styles/components/profile.css";

export default function ProfileModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    companyName: "Tech Alphonic Pvt Ltd",
    gst: "22AAAAA0000A1Z5",
    pan: "ABCDE1234F",
    address: "Hyderabad, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500001",
    country: "India",
    phone: "9876543210",
    email: "info@techalphonic.com",
    about: "We are a professional IT solutions company.",
  });

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("/images/person2.webp"); // default profile
  const [imagePreview, setImagePreview] = useState("/images/person2.webp");

  // handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // validation
 // validation
const validate = () => {
  const newErrors = {};

  // GST: 15 alphanumeric characters
  if (!formData.gst || formData.gst.length !== 15 || !/^[0-9A-Z]{15}$/i.test(formData.gst)) {
    newErrors.gst = "GST must be exactly 15 alphanumeric characters.";
  }

  // PAN: 10 characters, 5 letters + 4 digits + 1 letter
  if (!formData.pan || formData.pan.length !== 10 || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(formData.pan)) {
    newErrors.pan = "PAN must be exactly 10 characters in format ABCDE1234F.";
  }

  // Phone: 10 digits
  if (!formData.phone || formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be exactly 10 digits.";
  }

  // Email: standard format
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email address.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


const handleChange = (e) => {
  let value = e.target.value;

  // Restrict to digits for phone and zip
  if (e.target.name === "phone" || e.target.name === "zip") {
    value = value.replace(/\D/g, ""); // remove non-digit characters
  }

  setFormData({ ...formData, [e.target.name]: value });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave({ ...formData, image });
      onClose();
    }
  };

  return (
    <div className="modal fade show d-block profile-modal" onClick={onClose}>
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content p-4">
          <div className="modal-header border-0 pb-4">
            <h4 className="modal-title fw-semibold">Update Your Profile</h4>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body pt-3">
            <form onSubmit={handleSubmit} className="mt-2">
              {/* Company Info Section */}
              <h5 className="mb-3 fw-bold text-primary fs-3">Company Information</h5>
              <div className="row align-items-center">
                <div className="col-lg-3 text-center mb-4">
                  <div className="position-relative d-inline-block">
                    <div className="profile-upload-wrapper">
                      <Image
                        src={imagePreview}
                        alt="Profile"
                        width={150}
                        height={150}
                        className="rounded-circle object-fit-cover border border-3 border-light shadow-sm"
                      />
                      <label htmlFor="profileUpload" className="upload-icon f-flex align-items-center justify-content-center"style={{height:'32px',width:'32px'}} >
                        <i className="fa fa-upload me-0"></i>
                      </label>
                      <input
                        id="profileUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        className="form-control"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6 mb-3">
                      <label className="form-label">GST</label>
                      <input
                        type="text"
                        name="gst"
                         maxLength={15}
                        className={`form-control ${errors.gst ? "is-invalid" : ""}`}
                        value={formData.gst}
                        onChange={handleChange}
                      />
                      {errors.gst && <div className="invalid-feedback">{errors.gst}</div>}
                    </div>

                    <div className="col-lg-6 mb-3">
                      <label className="form-label">PAN</label>
                      <input
                        type="text"
                        name="pan"
                        maxLength={10}
                        className={`form-control ${errors.pan ? "is-invalid" : ""}`}
                        value={formData.pan}
                        onChange={handleChange}
                      />
                      {errors.pan && <div className="invalid-feedback">{errors.pan}</div>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">Contact Information</h5>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    maxLength={10}
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              {/* Address Info Section */}
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">Address Information</h5>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-lg-4 mb-3">
                  <label className="form-label">City</label>
                  <select
                    name="city"
                    className="form-select"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="">Select City</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                <div className="col-lg-4 mb-3">
                  <label className="form-label">State</label>
                  <select
                    name="state"
                    className="form-select"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    {/* Add more states as needed */}
                  </select>
                </div>


                <div className="col-lg-2 mb-3">
                  <label className="form-label">ZIP</label>
                  <input
                    type="text"
                    name="zip"
                    maxLength={6}
                    className="form-control"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-lg-2 mb-3">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Company Overview */}
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">Company Overview</h5>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label className="form-label">About</label>
                  <textarea
                    className="form-control"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="text-end mt-4">
                <button type="submit" className="btn btn-primary px-4 rounded-pill">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
