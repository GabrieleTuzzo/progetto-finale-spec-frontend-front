import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Card({ item, onClickCard }) {
    const { isFavorite, removeFromFavorites, addToFavorites } =
        useContext(GlobalContext);

    return (
        <div onClick={() => onClickCard()} className={`col-md-4 col-lg-3`}>
            <div className="card h-100">
                <div className="card-body clickable">
                    <div className="d-flex align-items-baseline justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
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
                    </div>
                    <p className="card-text">{item.category}</p>
                    <button
                        className="btn btn-primary mt-auto"
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log('compare');
                        }}
                    >
                        Compare
                    </button>
                </div>
            </div>
        </div>
    );
}
