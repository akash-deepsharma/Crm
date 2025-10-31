import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function requestPostApi(formData) {
  try {
    const res = await apiClient.post(`/subscriber`, formData);
    // console.log("request submit Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during request submit:", error);
    return { status: "error", message: "Something went wrong" };
  }
}



export async function getnewsletterData() {
  try {    
    const res = await apiClient.get(`/pages/newsletterget`);
    // console.log( "newsletter pages data", res.data)
    return res.data;
  } catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
  }
}
