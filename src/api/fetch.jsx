const BASE_URL = 'https://v2.api.noroff.dev/online-shop';

/**
 * 
 * @returns an array of products from the API
 */

export async function FetchProducts() {
    try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
} catch (error) {
    console.error("Ran into a problem fetching products:", error);
}
    }

/**
* @param {*} id 
* @returns the product with the specified id parameter
*/

export async function FetchProductById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ran into a problem fetching product by id:", error);
    }
}