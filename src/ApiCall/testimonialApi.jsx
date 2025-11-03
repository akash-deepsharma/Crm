import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getTestimonial() {
  try {
    const res = await apiClient.get(`/testimonial`);
    console.log( "testimonial pages  data", res.data)
    return res.data;
  } catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
  }
}