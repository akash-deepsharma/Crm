import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getSupport() {
  try {
    const res = await apiClient.get(`/support`);
    return res.data;
} catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
}
}




export async function getSingleSupport(slug) {
    try {
        // const res = await apiClient.get(`/faq/${slug}`);

      if(slug === 'support'){
          const res = await apiClient.get(`/faq/${slug}`);
            return res.data;
          }else{
            const res = await apiClient.get(`/faq/${slug}`, {
              params: { page: "support" },});
              return res.data;
      }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}