export default function Card({ motorcycle, onClick }) {
    return (
        <div onClick={() => onClick()} className="col-md-4 col-lg-2">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{motorcycle.title}</h5>
                    <p className="card-text">{motorcycle.category}</p>
                </div>
            </div>
        </div>
    );
}
