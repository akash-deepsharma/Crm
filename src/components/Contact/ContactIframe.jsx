import React from 'react'

export default function ContactIframe({data}) {
  const contactData = data.data[0] || [];
  return (
    <div className="map-custom-embed">
          <iframe src={contactData?.checklist} width="600" height="550" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
  )
}
