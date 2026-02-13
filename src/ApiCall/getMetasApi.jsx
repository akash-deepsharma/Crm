import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getMetas(slug) {
  try {    
    const res = await apiClient.get(`/metatitle/${slug}`);
    console.log( `metas data ${slug}`, res)
    return res?.data;

  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}