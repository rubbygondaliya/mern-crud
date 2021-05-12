import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="" id="">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" active>Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add-project">Add Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/project-list">Project List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;