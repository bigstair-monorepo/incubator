import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      // Log the response status and text for debugging
      const responseText = await response.text();
      console.error('API call failed with status:', response.status, response.statusText);
      console.error('Response text:', responseText);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Please check if your server is running and you set all the required tokens.');
  }
}
