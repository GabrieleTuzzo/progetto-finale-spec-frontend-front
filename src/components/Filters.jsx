export default function Filters() {
    return (
        <div className="row g-3">
            <div className="col-md-4 col-lg-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
            </div>
            <div className="col-md-4 col-lg-2">
                <select className="form-select">
                    <option value="">All</option>
                    <option value="sport">Sport</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="touring">Touring</option>
                </select>
            </div>
        </div>
    );
}
