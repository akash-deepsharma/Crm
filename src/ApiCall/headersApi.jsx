import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getHeaderFeatures() {
  try {
    const res = await apiClient.get("/featureheader");
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}