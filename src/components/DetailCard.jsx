export default function DetailCard({
    item,
    additionalClass = '',
    isCompared = false,
}) {
    return (
        <div className={`container ${additionalClass}`}>
            <div className="card h-100">
                <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                />
                <div className="card-body">
                    {isCompared ? (
                        <h4 className="card-title">{item.title}</h4>
                    ) : (
                        <h1 className="card-title">{item.title}</h1>
                    )}
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
