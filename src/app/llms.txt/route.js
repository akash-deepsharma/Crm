export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getLlmsData } from "@/ApiCall/llmsTextApi";

export async function GET() {
  // 1️⃣ Fetch dynamic content
  const contentData = await getLlmsData();
  const content = contentData?.content[0]?.content
  console.log("Fetched content:", content);

  // 2️⃣ Dynamic domain
  const domain =
    process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
