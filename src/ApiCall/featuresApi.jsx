import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getFeature() {
  try {
    const res = await apiClient.get("/features-main");
    console.log("features-main " , res)
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}

export async function getSingleFeature(slug) {
  try {
    const res = await apiClient.get(`/features/${slug}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
