"use client";

import Image from "next/image";

export default function Loader({ loading = false }) {
  if (!loading) return null;
  return (
    <div id="preloader">
      <div id="status">
        <div className="d-loader">
          <Image src="/images/dcode-loader.gif" alt="Crm" width={200} height={100} />
        </div>
      </div>
    </div>
  );
}
