"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/components/profile.css";
import { GetCities, GetStates, UpdateProfile } from "@/ApiCall/profileApi";

export default function ProfileModal({ onClose, onSave, initialData }) {
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  const [formData, setFormData] = useState({
    company_name: initialData?.profile?.company_name || "",
    gst_number: initialData?.profile?.gst_number || "",
    pan_number: initialData?.profile?.pan_number || "",
    address: initialData?.profile?.address || "",
    city: initialData?.profile?.city,
    state: initialData?.profile?.state || "",
    zip: initialData?.profile?.zip || "",
    country: initialData?.profile?.country || "",
    number: initialData?.user?.number || "",
    email: initialData?.user?.email || "",
    company_overview: initialData?.profile?.company_overview || "",
  });

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(
    initialData?.user?.profile_photo || "/images/person2.webp"
  );
  const [imagePreview, setImagePreview] = useState(
    initialData?.user?.profile_photo || "/images/person2.webp"
  );

  console.log("initialData", imagePreview);
  // Fetch States on mount
  useEffect(() => {
    async function fetchStates() {
      try {
        const data = await GetStates();
        setStatesData(data || []);
      } catch (err) {
        console.error("Error fetching states:", err);
      }
    }
    fetchStates();
  }, []);

  // Fetch Cities when state changes
  useEffect(() => {
    if (!formData.state) {
      setCitiesData([]);
      return;
    }

    async function fetchCities() {
      try {
        const payload = { state: formData.state };
        const data = await GetCities(payload);
        setCitiesData(data || []);

        // ✅ If formData.city exists and is in the new city list, keep it selected
        if (data?.length > 0 && formData.city) {
          const exists = data.includes(formData.city);
          if (exists) {
            setFormData((prev) => ({ ...prev, city: formData.city }));
          } else {
            setFormData((prev) => ({ ...prev, city: "" }));
          }
        }
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
    }

    fetchCities();
  }, [formData.state]);

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "number" || e.target.name === "zip")
      value = value.replace(/\D/g, "");
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (
      !formData.gst_number ||
      formData.gst_number.length !== 15 ||
      !/^[0-9A-Z]{15}$/i.test(formData.gst_number)
    )
      newErrors.gst_number = "GST must be exactly 15 alphanumeric characters.";
    if (
      !formData.pan_number ||
      formData.pan_number.length !== 10 ||
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(formData.pan_number)
    )
      newErrors.pan_number =
        "PAN must be exactly 10 characters in format ABCDE1234F.";
    if (
      !formData.number ||
      formData.number.length !== 10 ||
      !/^\d{10}$/.test(formData.number)
    )
      newErrors.number = "Phone number must be exactly 10 digits.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const payload = new FormData();
      for (const key in formData) payload.append(key, formData[key]);

      // Send the image with the correct key
      if (image instanceof File) payload.append("profile_photo", image);

      const updatedData = await UpdateProfile(payload);

      const updatedImage = updatedData?.user?.profile_photo || imagePreview;

      onSave({ ...formData, profile_photo: updatedImage });
      setImagePreview(updatedImage);
      onClose();

      // Optional reload
      if (typeof window !== "undefined") window.location.reload();
    } catch (err) {
      console.error("Error updating profile:", err);
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
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body pt-3">
            <form onSubmit={handleSubmit} className="mt-2">
              {/* Company Info */}
              <h5 className="mb-3 fw-bold text-primary fs-3">
                Company Information
              </h5>
              <div className="row align-items-center">
                <div className="col-lg-3 text-center mb-4">
                  <div className="position-relative d-inline-block">
                    <div className="profile-upload-wrapper">
                      <Image
                        src={
                          typeof imagePreview === "string" &&
                          imagePreview.startsWith("data:")
                            ? imagePreview
                            : `${process.env.NEXT_PUBLIC_MEDIA_PATH}/${imagePreview}`
                        }
                        alt="Profile"
                        width={150}
                        height={150}
                        className="rounded-circle object-fit-cover border border-3 border-light shadow-sm"
                      />
                      <label
                        htmlFor="profileUpload"
                        className="upload-icon f-flex align-items-center justify-content-center"
                        style={{ height: "32px", width: "32px" }}
                      >
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
                        name="company_name"
                        className="form-control"
                        value={formData.company_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">GST</label>
                      <input
                        type="text"
                        name="gst_number"
                        maxLength={15}
                        className={`form-control ${
                          errors.gst_number ? "is-invalid" : ""
                        }`}
                        value={formData.gst_number}
                        onChange={handleChange}
                      />
                      {errors.gst_number && (
                        <div className="invalid-feedback">
                          {errors.gst_number}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">PAN</label>
                      <input
                        type="text"
                        name="pan_number"
                        maxLength={10}
                        className={`form-control ${
                          errors.pan_number ? "is-invalid" : ""
                        }`}
                        value={formData.pan_number}
                        onChange={handleChange}
                      />
                      {errors.pan_number && (
                        <div className="invalid-feedback">
                          {errors.pan_number}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">
                Contact Information
              </h5>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="number"
                    maxLength={10}
                    className={`form-control ${
                      errors.number ? "is-invalid" : ""
                    }`}
                    value={formData.number}
                    onChange={handleChange}
                  />
                  {errors.number && (
                    <div className="invalid-feedback">{errors.number}</div>
                  )}
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Address Info */}
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">
                Address Information
              </h5>
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
                  <label className="form-label">State</label>
                  <select
                    name="state"
                    className="form-select"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
                    {statesData?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
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
                    {citiesData?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
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
              <h5 className="mt-4 mb-3 fw-bold text-primary fs-3">
                Company Overview
              </h5>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label className="form-label">About</label>
                  <textarea
                    className="form-control"
                    name="company_overview"
                    value={formData.company_overview}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary px-4 rounded-pill"
                >
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
