// import axios from "axios";

// export const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export async function getMetas(slug) {
//   try {    
//     const res = await apiClient.get(`/metatitle/${slug}`);
//     console.log( `metas data ${slug}`, res)
//     return res?.data;

//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return null;
//   }
// }

import axios from "axios";
import { cache } from "react";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Optional: handle 429 retry once
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 429) {
      console.warn("Rate limited. Retrying...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return apiClient(error.config);
    }
    return Promise.reject(error);
  }
);

// ✅ Cached Meta API
export const getMetas = cache(async (slug) => {
  try {
    const res = await apiClient.get(`/metatitle/${slug}`);
    return res?.data;
  } catch (error) {
    console.error("Meta fetch error:", error?.response?.status);
    return null;
  }
});
