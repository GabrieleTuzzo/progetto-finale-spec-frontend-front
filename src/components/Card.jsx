export default function Card({ motorcycle, onClick }) {
    return (
        <div onClick={() => onClick()} className={`col-md-4 col-lg-3`}>
            <div className="card h-100">
                <div className="card-body clickable">
                    <div className="d-flex align-items-baseline justify-content-between">
                        <h5 className="card-title">{motorcycle.title}</h5>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('Clicked favorite button!');
                            }}
                            className="btn fs-5"
                        >
                            ⭐
                        </button>
                    </div>
                    <p className="card-text">{motorcycle.category}</p>
                </div>
            </div>
        </div>
    );
}
