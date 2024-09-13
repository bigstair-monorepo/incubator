import {fetchAPI} from "@utils/fetch-api";

export async function getPageBySlug(slug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/pages`;
    const urlParamsObject = {filters: {slug}, locale: lang};
    const options = {headers: {Authorization: `Bearer ${token}`}};
    return await fetchAPI(path, urlParamsObject, options);
}

// Example utility function to get slugs
export async function getAllSlugs() {
  // Replace this with the actual logic for fetching the slugs from your API or database
  return [
    { lang: "en", slug: ["about"] },
    { lang: "fr", slug: ["a-propos"] },
    { lang: "en", slug: ["blog", "how-to-use-nextjs"] },
    { lang: "fr", slug: ["blog", "comment-utiliser-nextjs"] },
  ];
}