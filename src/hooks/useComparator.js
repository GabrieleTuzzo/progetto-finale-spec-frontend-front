import { useState } from 'react';

export default function useComparator() {
    const [comparator, setComparator] = useState([]);

    const addToComparator = (itemId) => {
        setComparator((prevComparator) => {
            if (prevComparator.some((comp) => comp === itemId)) {
                return prevComparator;
            }
            return [...prevComparator, itemId];
        });
    };

    const removeFromComparator = (itemId) => {
        setComparator((prevComparator) =>
            prevComparator.filter((comp) => comp !== itemId)
        );
    };

    const isCompared = (itemId) => {
        return comparator.some((comp) => comp === itemId);
    };

    const clearComparator = () => {
        setComparator([]);
    };

    return {
        comparator,
        addToComparator,
        removeFromComparator,
        clearComparator,
        isCompared,
    };
}
