import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <NavLink className="navbar-brand fs-4" to="/">
                    Bikers Friend
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active nav-link'
                                        : 'inactive nav-link'
                                }
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active nav-link'
                                        : 'inactive nav-link'
                                }
                                to="/motorcycle/favorites"
                            >
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
