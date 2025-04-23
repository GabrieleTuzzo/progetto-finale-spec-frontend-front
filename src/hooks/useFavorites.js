import { useState } from 'react';

export default function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    function addToFavorites(motorcycle) {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === motorcycle.id)) {
                return prevFavorites;
            }
            return [...prevFavorites, motorcycle];
        });
    }

    function removeFromFavorites(motorcycle) {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((fav) => fav.id !== motorcycle.id)
        );
    }

    function isFavorite(motorcycle) {
        return favorites.some((fav) => fav.id === motorcycle.id);
    }

    return {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };
}
