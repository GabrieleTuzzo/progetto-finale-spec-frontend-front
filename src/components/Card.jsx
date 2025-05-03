import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Card({ item, onClickCard = null, isMinimal = false }) {
    const {
        isFavorite,
        removeFromFavorites,
        addToFavorites,
        addToComparator,
        removeFromComparator,
        isCompared,
    } = useContext(GlobalContext);

    return (
        <div onClick={() => onClickCard()} className={`col-md-4 col-lg-3`}>
            <div className="card h-100">
                <div
                    className={`card-body ${
                        onClickCard === null || 'clickable'
                    }`}
                >
                    <div className="d-flex align-items-baseline justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
                        {isMinimal || (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isFavorite(item)) {
                                        removeFromFavorites(item);
                                    } else {
                                        addToFavorites(item);
                                    }
                                }}
                                className="btn fs-5"
                            >
                                {isFavorite(item) ? '🌟' : '⭐'}
                            </button>
                        )}
                    </div>
                    <p className="card-text">{item.category}</p>
                    {isMinimal || (
                        <button
                            className={`btn btn-primary mt-auto`}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isCompared(item.id)) {
                                    removeFromComparator(item.id);
                                } else {
                                    addToComparator(item.id);
                                }
                            }}
                        >
                            {isCompared(item.id)
                                ? 'Remove from Comparator'
                                : 'Add to Comparator'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
