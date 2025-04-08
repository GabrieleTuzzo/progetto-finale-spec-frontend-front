import { useEffect, useState } from 'react';
const VITE_BASE_URI = import.meta.env.VITE_BASE_URI;

export default function useMotorcycles() {
    const [motorcycles, setMotorcycles] = useState(null);

    useEffect(() => {
        async function fetchMotorcycles() {
            const fetchedMotorcycles = await fetchData('/motorcycles', 'GET');
            setMotorcycles(fetchedMotorcycles);
        }

        fetchMotorcycles();
    }, []);

    async function fetchData(path, method, body = null) {
        const options = {
            method: method,
        };

        if (body) {
            options.body = JSON.stringify(body);
            options.headers = { 'Content-Type': 'application/json' };
        }

        const res = await fetch(`${VITE_BASE_URI}${path}`, options);
        const data = await res.json();

        return data;
    }

    return { motorcycles };
}
