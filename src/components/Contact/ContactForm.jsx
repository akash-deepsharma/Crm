"use client";
import React, { useState } from "react";
import { contactPostApi } from "@/ApiCall/contactApi";

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    how_can_we_help: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form data:", formData);
      const response = await contactPostApi(formData);

      if (response.status === "success") {
        alert("✅ Contact request submitted successfully!");
        if (onClose) onClose();
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          how_can_we_help: "",
          requirements: "",
        });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Contact request submission failed:", error);
      alert("⚠️ Failed to submit. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <form method="post" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="how_can_we_help"
            placeholder="How can I help you?"
            value={formData.how_can_we_help}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            id="requirements"
            placeholder="Tell me more about your requirement"
            value={formData.requirements}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value={loading ? "Sending..." : "Send Message"}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
}
