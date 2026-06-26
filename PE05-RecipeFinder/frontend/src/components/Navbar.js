import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success rounded mb-4">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    🍽 Recipe Finder
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Recipes
                    </Link>

                    <Link className="nav-link" to="/create">
                        Add Recipe
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;