import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getBlogs(page = 1, perPage = 10) {
  try {
    const res = await apiClient.get("/blogs", { params: { page, per_page: perPage } });
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}

export async function getSingleBlog(slug) {
  try {
    const res = await apiClient.get(`/showsingleblog/${slug}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
