"use client";
import React, { useState } from "react";
import Agent_Modal from "../Common/Agent_Modal";
import Image from "next/image";
import Link from "next/link";

export default function Agent_Banner(banner_stepData) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const banner_data = banner_stepData?.data[0]

  return (
    <>
      <div className="agent_banner section-padding">
        <div className="content-liner">
          <Image
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d2d6469e83d4c856b5_Coin%20left.svg"
            alt="crm " width={100} height={100}
            className="coin-left"
          />
          <Image
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3d6469e83d4c856e6_Coin%20right.svg"
            alt="crm" width={100} height={100}
            className="coin-right"
          />
          <Image
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/66fa663cb6d33c088760af9b_Underline.svg"
            alt="crm" width={180} height={180}
            className="underline"
          />
          <h1 className="h1">{banner_data?.heading}</h1>

          <div className="span affiliate-n">
            <Image
              src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d216916f25c3a8fd48_Lines%20left.svg"
              alt=""
              className="lines-right-n"  width={60} height={60}
            />
            <Image
              src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3fed35c222288967e_Lines%20right.svg"
              alt=""
              className="lines-left-n" width={60} height={60}
            />
            <h4 className="white-txt-n center affiliate-c">
              {banner_data.sub_heading}
            </h4>
          </div>

          <Link
            href="#"
            onClick={handleOpenModal}
            className="button-tertiary-white stroke-buttons r-12 w-inline-block"
          >
            <div>{banner_data.button_text}</div>
          </Link>

          <Image
            src="https://cdn.prod.website-files.com/610004329b339defd1cf0578/646632d3c84904467df096dd_Thumb%20up.svg"
            alt=""
            className="thumb-up-n"  width={60} height={60}
          />
        </div>
      </div>

      {showModal && <Agent_Modal onClose={handleCloseModal} />}
    </>
  );
}
