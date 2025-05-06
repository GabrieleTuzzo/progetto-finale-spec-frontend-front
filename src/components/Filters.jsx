import { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Filters() {
    const { filterMotorcycles, resetFilters, getCategories, sortMotorcycles } =
        useContext(GlobalContext);
    const uniqueCategories = getCategories();

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState('title');
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect(() => {
        filterMotorcycles(search, category);
    }, [search, category]);

    return (
        <div className="row g-3 mb-3 align-items-center">
            <div className="col-md-12 col-lg-6 d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All</option>
                    {uniqueCategories &&
                        uniqueCategories.map((category, i) => (
                            <option key={i} value={category}>
                                {category}
                            </option>
                        ))}
                </select>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-primary flex-grow-1"
                        onClick={() => {
                            const newKey =
                                sortBy === 'title' ? 'category' : 'title';
                            setSortBy(newKey);
                            sortMotorcycles({
                                key: newKey,
                                direction: sortDirection,
                            });
                        }}
                    >
                        Sort by: {sortBy}
                    </button>
                    <button
                        className="btn btn-secondary flex-grow-1"
                        onClick={() => {
                            const newDirection =
                                sortDirection === 'asc' ? 'desc' : 'asc';
                            setSortDirection(newDirection);
                            sortMotorcycles({
                                key: sortBy,
                                direction: newDirection,
                            });
                        }}
                    >
                        Direction: {sortDirection}
                    </button>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <button
                    className="btn btn-danger w-100 text-nowrap"
                    onClick={() => {
                        setSearch('');
                        setCategory('');
                        setSortBy('title');
                        setSortDirection('asc');
                        resetFilters();
                    }}
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
}
