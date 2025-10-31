"use client";

import React, { useState } from "react";
import Link from "next/link";
import Request_Modal from "../Common/Request_Modal";
import { createPortal } from "react-dom";

export default function FooterActionsClient() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-lg-2 col-md-4">
        <div className="widget">
          <div className="widget-title">
            <h3 className="title">Resources</h3>
          </div>
          <div className="text-widget">
            <div className="footer-nav">
              <ul>
                <li><Link href="#">Login</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#" onClick={handleOpenModal}>Request A Demo</Link></li>
                <li><Link href="/agent">Become a seller</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal rendered outside footer using portal */}
      {showModal &&
        createPortal(
          <Request_Modal onClose={handleCloseModal} />,
          document.body
        )}
    </>
  );
}
