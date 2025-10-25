import Image from "next/image";
import React from "react";

export default function VisualWorkflow() {
  return (
    <div className="section-padding text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Visual Workflow</h2>
        <p className="text-muted mb-5">
          Here’s how your CRM process flows from start to finish.
        </p>
        <Image
          src="/images/Visual-Workflow.svg"
          alt="CRM Workflow"
          className="img-fluid rounded shadow"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
