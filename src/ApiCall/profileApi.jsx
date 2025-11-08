import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function GetProfile() {
  try {
     const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const res = await apiClient.get("/user-profile", {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  });
    return res.data;
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}



export async function UpdateProfile(payload) {
  try {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    console.log("UpdateProfile payload:", payload);

    const res = await apiClient.post(`/update-profile`, payload, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("UpdateProfile response:", res.data);
    return res.data;
  } catch (error) {
    console.error("UpdateProfile error:", error);
    return { status: "error", message: "Something went wrong" };
  }
}



export async function GetStates() {
  try {
    const res = await apiClient.get(`/states`); 
    return res.data;
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}


export async function GetCities(payload) {
  try {
    const res = await apiClient.get(`/cities`, { params: payload });
    return res.data;
  } catch (error) {
    console.error("GetCities error:", error);
    return { status: "error", message: "Something went wrong" };
  }
}