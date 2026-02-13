import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


export async function contactGetApi() {
  try {
    const res = await apiClient.get(`/contactpage `);
    console.log(res)
    return res.data;
  } catch (error) {
    console.error("❌ Error during GET /contact:", error.response?.data || error.message);
    return {
      status: "error",
      message: error.response?.data?.message || "Something went wrong while fetching data.",
    };
  }
}
export async function contactPostApi(formData) {
  try {
    const res = await apiClient.post(`/contact`, formData);
    return res.data;
  } catch (error) {
    console.error("Error during  contact request submit:", error);
    return { status: "error", message: "Something went wrong" };
  }
}
