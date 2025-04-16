import { useEffect, useState } from 'react';
const VITE_BASE_URI = import.meta.env.VITE_BASE_URI;

export default function useMotorcycles() {
    const [motorcycles, setMotorcycles] = useState(null);
    const [filteredMotorcycles, setFilteredMotorcycles] = useState(null);

    useEffect(() => {
        async function fetchMotorcycles() {
            const fetchedMotorcycles = await fetchData('/motorcycles', 'GET');
            setMotorcycles(fetchedMotorcycles);
            setFilteredMotorcycles(fetchedMotorcycles);
        }

        fetchMotorcycles();
    }, []);

    function fetchMotorcycleById(id) {
        async function fetchMotorcycle() {
            const res = await fetchData(`/motorcycles/${id}`, 'GET');
            return res;
        }

        return fetchMotorcycle();
    }

    function getCategories() {
        if (!motorcycles) return [];
        const categories = motorcycles.map((motorcycle) => motorcycle.category);
        const uniqueCategories = [];
        for (const category of categories) {
            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category);
            }
        }
        return uniqueCategories;
    }

    function resetFilters() {
        setFilteredMotorcycles(motorcycles);
    }

    function sortMotorcycles(order) {
        const sortedMotorcycles = [...filteredMotorcycles].sort((a, b) => {
            if (order.key === 'title' || order.key === 'category') {
                if (order.direction === 'asc') {
                    return a[order.key].localeCompare(b[order.key]);
                } else if (order.direction === 'desc') {
                    return b[order.key].localeCompare(a[order.key]);
                }
            }
            return 0;
        });
        setFilteredMotorcycles(sortedMotorcycles);
    }

    function filterMotorcycles(searchQuery = '', category = '') {
        async function fetchFilteredMotorcycles() {
            const res = await fetchData(
                `/motorcycles?search=${searchQuery}&category=${category}`,
                'GET'
            );
            setFilteredMotorcycles(res);
        }

        fetchFilteredMotorcycles();
    }

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

    return {
        filteredMotorcycles,
        filterMotorcycles,
        resetFilters,
        getCategories,
        sortMotorcycles,
        fetchMotorcycleById,
    };
}
