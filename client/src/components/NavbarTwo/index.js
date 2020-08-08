import React from 'react';
import { Link } from "react-router-dom";

const NavbarTwo = () => {
    return (
        <div id="nav-body-two">
            <nav className="navbar navbar-inverse navbar-expand-lg">
                <div id="logoNavTwo">
                    <Link className="navbar-brand" to="/">
                        <img src={process.env.PUBLIC_URL + '/images/CampfireLogo.png'} alt="Campfire Stories Logo" loading="lazy" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavbarTwo;