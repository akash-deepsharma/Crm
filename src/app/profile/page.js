
import React from "react";
import UserProfile from "./UserProfile";


export const generateMetadata = {
  title: "Profile | My Website",
  description: "View and manage your account profile information on My Website.",
};

export default async function Page() {
  return (
    <>
      <UserProfile/>
    </>
  );
}
