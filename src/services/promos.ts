import { apiFetch } from "./api"

export async function getPromos() {
    try {
        const data: any = await apiFetch({
            endpoint: '/pages/155',
            method: 'GET',
        });

        return data.acf.promos as string[];
    } catch (error) {
        console.error('Error fetching pages:', error instanceof Error ? error.message : error);
        throw error;
    }
}