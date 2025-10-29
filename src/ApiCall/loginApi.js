import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function LoginApi(payload) {
  try {
    const res = await apiClient.post(`/user/create`, payload);
    console.log("Login Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    return { status: "error", message: "Something went wrong" };
  }
}


