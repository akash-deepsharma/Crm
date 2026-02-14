// import axios from "axios";
// import { cache } from "react";


// export const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export async function getFeature() {
//   try {
//     const res = await apiClient.get("/features-main");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     throw new Error(error.response?.data?.message || "Failed to fetch blogs");
//   }
// }

// // export async function getSingleFeature(slug) {
// //   console.log("baseURL features", process.env.NEXT_PUBLIC_API_URL)
// //   try {
// //     const res = await apiClient.get(`/features/${slug}`,
// //       {
// //         next: { revalidate: 60 }
// //       }
// //     );
    
// //     console.log("features-main " , res)
// //     return res?.data;
// //   } catch (error) {
// //     console.error("Error fetching blog:", error);
// //     return null;
// //   }
// // }

// export const getSingleFeature = cache(async (slug) => {
//   try {
//     const res = await apiClient.get(`/features/${slug}`);
//     return res?.data;
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return null;
//   }
// });




const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getFeature() {
  const res = await fetch(`${BASE_URL}/features-main`, {
    next: { revalidate: 300 }, // 5 min cache
  });

  if (!res.ok) throw new Error("Failed to fetch features");

  return res.json();
}

export async function getSingleFeature(slug) {
  const res = await fetch(`${BASE_URL}/features/${slug}`, {
    next: { revalidate: 300 }, // 5 min cache
  });

  if (!res.ok) return null;

  return res.json();
}
