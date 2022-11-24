import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
                <Forum fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header;
