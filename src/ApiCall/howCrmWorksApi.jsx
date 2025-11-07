import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getHowCrmWorks() {
  try {
    const res = await apiClient.get(`/how-crm-works`);
    // console.log( "how-crm-works api data", res.data)
    return res.data;
  } catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
  }
}