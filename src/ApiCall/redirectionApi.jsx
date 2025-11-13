import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});




export async function getRedirection(pathname) {
  // console.log( "prams pathname", pathname)
  try {
     const res = await apiClient.get(`/redirections`, {
      params: { path: pathname },
    });
    // console.log( `${pathname} resirect to responese`, res)
    return res.data;
  } catch (error) {
    console.error("Error fetching Pages data:", error);
    return null;
  }
}