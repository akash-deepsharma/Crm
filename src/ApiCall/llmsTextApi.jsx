import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getLlmsData() {
  try {
    const res = await apiClient.get("/llm-content"); 
    // console.log("llms data form Api " , res)
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}