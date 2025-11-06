import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function requestPostApi(formData) {
  try {
    const res = await apiClient.post(`/demo-request`, formData);
    // console.log("request submit Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during request submit:", error);
    return { status: "error", message: "Something went wrong" };
  }
}

export async function requestGetApi() {
  try {
    const res = await apiClient.get(`/get-demorequest `);
    // console.log("✅ Request GET Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("❌ Error during GET /get-demorequest:", error.response?.data || error.message);
    return {
      status: "error",
      message: error.response?.data?.message || "Something went wrong while fetching data.",
    };
  }
}


