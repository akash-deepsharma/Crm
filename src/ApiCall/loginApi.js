import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function LoginApi(payload) {
  try {
    const res = await apiClient.post(`/user/create`, payload);
    console.log("Login or register Response:", res.data);
    return res.data;
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}



export async function OtpVerified(payload) {
  try {
    console.log("📤 Sending OTP Verify Payload:", payload);
    const res = await apiClient.post(`/verifyotpregister`, payload);
    console.log("✅ OTP Verified Response:", res.data);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data; 
    }
    return { status: "error", message: "Network or server error" };
  }
}



export async function SetCheckPassword(payload) {
  try {
    const res = await apiClient.post(`/setpassword`, payload);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data; 
    }
    return { status: "error", message: "Network or server error" };
  }
}

export async function Signinwithgoogle(payload) {
  try {
    const res = await apiClient.post(`/signinwithgoogle`, payload);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data; 
    }
    return { status: "error", message: "Network or server error" };
  }
}


export async function ForgetPassword(payload) {
  try {
    // console.log("ForgetPassword data payload", payload )
    const res = await apiClient.post(`/forgetpassword`, payload);
    return res.data;

  } catch (error) {
    if (error.response) {
      return error.response.data; 
    }
    return { status: "error", message: "Network or server error" };
  }
}


export async function UpdatePassword(payload) {
  try {
    console.log("reset Password Payload", payload )
    const res = await apiClient.post(`/resetpassword`, payload);
    console.log("reset password response", res)
    return res.data;

  } catch (error) {
    if (error.response) {
      return error.response.data; 
    }
    return { status: "error", message: "Network or server error" };
  }
}



