const BASE_URL = 'https://v2.api.noroff.dev/online-shop';

export async function FetchProducts() {
    try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log("response", data);
    return data;
} catch (error) {
    console.error("Ran into a problem fetching products:", error);
}
    }