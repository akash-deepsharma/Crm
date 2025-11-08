"use client";
import React, { useEffect, useState } from "react";
import InnerPageBanner from "@/components/Common/InnerPageBanner";
import Link from "next/link";
import ProfileModal from "@/components/Common/ProfileModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetProfile, UpdateProfile } from "@/ApiCall/profileApi";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
   const [profileData, setProfileData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const data = await GetProfile();
      // console.log("✅ First  Profile data:", data);
      if (data?.status === "success") {
        setProfileData(data.data || []);
      }
    }

    fetchData();
  }, []);


  // console.log( "profile data", profileData)



  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("You have been logged out successfully!");
    router.push("/login");
  };


  const bannerData = {
    pageName: "Profile",
    pageTitle: "Sub title for profile",
  };



  // Modal controls
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // ✅ Update profile data when modal form is saved
  const handleSaveProfile = (updatedData) => {
    setProfileData(updatedData);
  };

  return (
    <>
      <InnerPageBanner data={bannerData} />

      <div className="about-section section-padding">
        <div className="container">
          {/* Header Row */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            <div className="heading-wrapper with-separator">
              <span className="sub-title">Account</span>
              <h2 className="h1">
                Welcome to <span>your</span> profile
              </h2>
            </div>
            <div className="d-flex"> 
              <button
                className="btn btn-outline-primary px-3 me-2"
                onClick={handleOpenModal}
              >
                <i className="fa fa-edit me-1"></i>
              </button>
              <Link href="#" className="btn btn-primary">
                Go To Dashboard
              </Link>
            </div>
          </div>

          {/* Profile Section */}
          <div className="profile-view card p-4 shadow-md rounded-4 border-1">
            <div className="row g-4">
              <div className="col-lg-4 text-center">
                <div className="user-profile">
                  <div className="User-profile-img">
                    <Image
                    src={`${process.env.NEXT_PUBLIC_MEDIA_PATH}/${profileData?.user?.profile_photo}`}
                    alt="Profile"
                    width={250}
                    height={250}
                    className="rounded-circle border border-3 border-primary shadow-sm object-fit-cover"
                  />
                  </div>
                  <h3 className="mt-3 mb-0">{profileData?.profile?.company_name}</h3>
                </div>
              </div>

              {/* Profile Details */}
              <div className="col-lg-8">
                <div className="profile-data">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>User Name:</strong>
                        <p className="mb-0">{profileData?.user?.name}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>GST:</strong>
                        <p className="mb-0">{profileData?.profile?.gst_number}</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>PAN:</strong>
                        <p className="mb-0">{profileData?.profile?.pan_number}</p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>Address:</strong>
                        <p className="mb-0">
                          {profileData?.profile?.address}, {profileData?.profile?.city},{" "}
                          {profileData?.profile?.state} - {profileData?.profile?.zip},{" "}
                          {profileData?.profile?.country}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>Email:</strong>
                        <p className="mb-0">{profileData?.user?.email}</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>Phone:</strong>
                        <p className="mb-0">{profileData?.user?.number}</p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="info-box p-3 bg-light rounded">
                        <strong>Description:</strong>
                        <p className="mb-0">{profileData?.profile?.company_overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 d-flex flex-wrap justify-content-between align-items-center mb-4">

            <div className="d-flex">
              <button onClick={handleLogout} className="btn btn-primary">
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Render modal and pass props */}
      {showModal && (
        <ProfileModal
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
          initialData={profileData}

        />
      )}
    </>
  );
}
