import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-secondary p-3">
            <div className="container">
                <nav className="d-flex">
                    <ul className="nav">
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">
                                <img src="../../public/th.jpeg" className="logo" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active fw-bold fw-header" aria-current="page">
                                Homepage
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies" className="nav-link fw-bold fw-header">
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}