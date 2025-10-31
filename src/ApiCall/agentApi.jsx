import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// ✅ Agent Registration
export async function agentPostApi(formData) {
  try {
    const res = await apiClient.post(`/agent`, formData);
    return res.data;
  } catch (error) {
    console.error("Error during agent submit:", error.response?.data || error);
    return { status: "false", message: "Something went wrong" };
  }
}

// ✅ Send Email OTP
export async function sentEmailOtpApi(email) {
  try {
    const res = await apiClient.post(`/emailverify`, { "email": email }); 
    console.log("emailverify otp", res.data)
    return res.data;
  } catch (error) {
    console.error("Error sending email OTP:", error.response?.data || error);
    return { status: "false", message: "Failed to send email OTP" };
  }
}


// ✅ Verify Email OTP
export async function verifyEmailOtpApi(email, otp) {
  try {
    const res = await apiClient.post(`/emailverifyotp`, { email, otp });
    return res.data;
  } catch (error) {
    console.error("Error verifying email OTP:", error.response?.data || error);
    return { status: "false", message: "Failed to verify email OTP" };
  }
}

// ✅ Send Phone OTP
export async function sentPhoneOtpApi(phone_number) {
  try {
    const res = await apiClient.post(`/phone-number-verify`, { phone_number });
    console.log("emailverify otp", res.data)
    return res.data;
  } catch (error) {
    console.error("Error sending phone OTP:", error.response?.data || error);
    return { status: "false", message: "Failed to send phone OTP" };
  }
}

// ✅ Verify Phone OTP
export async function verifyPhoneOtpApi(phone_number, otp) {
  try {
    const res = await apiClient.post(`/phone-verify-otp`, { phone_number, otp });
    return res.data;
  } catch (error) {
    console.error("Error verifying phone OTP:", error.response?.data || error);
    return { status: "false", message: "Failed to verify phone OTP" };
  }
}
