import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getPagesData(slug) {
  try {
    console.log("page slug", slug)
    const res = await apiClient.get(`/pages/${slug}`);
    console.log( "pages data", res.data)
    return res.data;
  } catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
  }
}
