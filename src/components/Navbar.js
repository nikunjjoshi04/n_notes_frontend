import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    let location = useLocation();

    const handelLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={`${localStorage.getItem("token") ? "/" : "/login"}`}>
                Navbar
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {localStorage.getItem("token") && (
                        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    )}
                    <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
                {!localStorage.getItem("token") ? (
                    <div className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-primary mx-2" to="/login" role="button">
                            Login
                        </Link>
                        <Link className="btn btn-primary mx-2" to="/signup" role="button">
                            Signup
                        </Link>
                    </div>
                ) : (
                    <button className="btn btn-primary mx-2" onClick={handelLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
