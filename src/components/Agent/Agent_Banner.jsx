"use client";
import React, { useState } from "react";
import Agent_Modal from "../Common/Agent_Modal";

export default function Agent_Banner() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="agent_banner section-padding">
        <div className="content-liner">
          <img
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d2d6469e83d4c856b5_Coin%20left.svg"
            alt=""
            className="coin-left"
          />
          <img
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3d6469e83d4c856e6_Coin%20right.svg"
            alt=""
            className="coin-right"
          />
          <img
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/66fa663cb6d33c088760af9b_Underline.svg"
            alt=""
            className="underline"
          />
          <h1 className="h1">Partner with Guidde</h1>

          <div className="span affiliate-n">
            <img
              src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d216916f25c3a8fd48_Lines%20left.svg"
              alt=""
              className="lines-right-n"
            />
            <img
              src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3fed35c222288967e_Lines%20right.svg"
              alt=""
              className="lines-left-n"
            />
            <h4 className="white-txt-n center affiliate-c">
              Combine forces with Guidde and unlock new opportunities for growth
            </h4>
          </div>

          <a
            href="#"
            onClick={handleOpenModal}
            className="button-tertiary-white stroke-buttons r-12 w-inline-block"
          >
            <div>Become an Agent</div>
          </a>

          <img
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3c84904467df096dd_Thumb%20up.svg"
            alt=""
            className="thumb-up-n"
          />
        </div>
      </div>

      {showModal && <Agent_Modal onClose={handleCloseModal} />}
    </>
  );
}
