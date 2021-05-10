import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#" active>Registration</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Login</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
};

export default Navbar;