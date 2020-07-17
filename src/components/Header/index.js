import React from "react";
import { NavLink } from "react-router-dom";
import StyledHeader from "./StyledHeader";

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>
                <div className="rtl">B</div>R
            </h1>
            <nav>
                <NavLink exact to="/">
                    Gallery
                </NavLink>
                <NavLink exact to="/about">
                    About
                </NavLink>
                <NavLink exact to="/contact">
                    Contact
                </NavLink>
            </nav>
        </StyledHeader>
    );
};

export default Header;
