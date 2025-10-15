
"use client"
import InnerPageBanner from '@/components/Common/InnerPageBanner';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {


  // fatch api data using axios and useState
     

  const bannerData = {
    pageName: "Terms and Conditions",
    pageTitle: "Welcome to Our Terms and Conditions",
  };

  const [data, setData] = useState([])  
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState(null)      

  useEffect(() => {
    axios.get('https://dummyjson.com/c/5903-85cf-4d67-a386') 
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

console.log("data", data)


  return (
      <>
        <InnerPageBanner data={bannerData}/>

        <div className="terms-and-conditions section-padding">
          <div className="container">
                <div className="terms-content">
                  <h2>Terms and Conditions</h2>
                  
                  <h3>Introduction</h3>
                  <p>
                    Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
                  </p>
                  <h3>Use of the Website</h3>
                  <p>
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                  </p>
                  <h3>Intellectual Property</h3>
                  <p>
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </p>
                  <h3>Limitation of Liability</h3>
                  <p>
                    [Your Company Name] will not be liable for any damages arising out of or in connection with the use of this website. This includes, without limitation, direct loss, loss of business or profits, or indirect or consequential loss.
                  </p>
                  <h3>Governing Law</h3>
                  <p>
                    Your use of this website and any dispute arising out of such use of the website is subject to the laws of [Your Country/State].
                  </p>
                </div>
          </div>
        </div>


      </>
  )
}

