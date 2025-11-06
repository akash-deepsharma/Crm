import Image from "next/image";
import React from "react";

export default function VisualWorkflow({data}) {
  const visualData = data || [];
  return (
    <div className="section-padding text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">{visualData?.heading}</h2>
        <p className="text-muted mb-5">
          {visualData?.sub_heading}
        </p>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${visualData?.image}`}
          alt={visualData?.image_all_text}
          className="img-fluid rounded shadow"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
