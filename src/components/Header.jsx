import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-secondary p-3">
            <div className="container">
                <nav className="d-flex">
                    <ul className="nav">
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">Logo</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" ><a className="nav-link active fw-bold" aria-current="page" href="#">Homepage</a></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies"><a className="nav-link fw-bold" href="#">Movies</a></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}