export async function getAllBlogs() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status);
      return [];
    }
    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getAllServices() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    if (!res.ok) {
      console.error("Failed to fetch services:", res.status);
      return [];
    }
    const data = await res.json();
    return data.services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}