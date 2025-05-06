import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function DetailCard({
    item,
    additionalClass = '',
    isMinimal = false,
}) {
    const {
        isFavorite,
        removeFromFavorites,
        addToFavorites,
        addToComparator,
        removeFromComparator,
        isCompared,
    } = useContext(GlobalContext);

    return (
        <div className={`container ${additionalClass}`}>
            <div className="card h-100">
                <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        {isMinimal ? (
                            <h4 className="card-title">{item.title}</h4>
                        ) : (
                            <>
                                <h1 className="card-title">{item.title}</h1>
                                <div>
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
                                    <button
                                        className={`btn ${
                                            isCompared(item.id)
                                                ? 'btn-outline-primary'
                                                : 'btn-primary'
                                        } mt-auto`}
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
                                </div>
                            </>
                        )}
                    </div>
                    <p className="card-text">
                        <strong>Category:</strong> {item.category}
                    </p>
                    <p className="card-text">
                        <strong>Price:</strong> {item.price}€
                    </p>
                    <p className="card-text">
                        <strong>CC:</strong> {item.cc}
                    </p>
                    <p className="card-text">
                        <strong>Height:</strong> {item.height} cm
                    </p>
                    <p className="card-text">
                        <strong>Empty Weight:</strong> {item.emptyWeight} kg
                    </p>
                    <p className="card-text">
                        <strong>Production Year:</strong> {item.productionYear}
                    </p>
                    <p className="card-text">
                        <strong>Brand:</strong> {item.brand}
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            Created At:{' '}
                            {new Date(item.createdAt).toLocaleDateString()}
                        </small>
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            Updated At:{' '}
                            {new Date(item.updatedAt).toLocaleDateString()}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}
