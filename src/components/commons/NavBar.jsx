import React from 'react';
import { style } from "./NavBar.style";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div>
            <NavLink className="link" activeClassName="link_active" to="/page1">Page 1</NavLink>
            <NavLink style={style.link} activeStyle={style.active} to="/page2">Page2</NavLink>
        </div>
    )
}
