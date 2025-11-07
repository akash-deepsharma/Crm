"use client"
import React, { useState } from 'react'
import { requestPostApi } from "@/ApiCall/newsletterApi";
import dynamic from 'next/dynamic';
import { api } from '@/app/Config/config';

export default function NewsletterFooter() {
 const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ email: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Submitting form data:", formData);
      const response = await requestPostApi(formData);

      if (response.status === "success") {
        alert("🎉 " + response.message);
        setFormData({ email: "" });
      } else if (response.status === "exists") {
        alert("😊 " + response.message);
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Contact request submission failed:", error);
      alert("⚠️ Failed to submit. Try again later.");
    } finally {
      setLoading(false);
    }
  };


 


  return (
    <form method="post"  onSubmit={handleSubmit}>
         <div className="form-group">
             <input type="email" className="form-control" id="email"
                    name="email" value={formData.email}
                    onChange={handleChange} placeholder="Enter email address" required="" />
         </div>
         <input type="submit" className="btn btn-primary btn-light" value="Subscribe Now!"/>
     </form>
  )
}
