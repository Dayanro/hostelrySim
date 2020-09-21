import React, { useState } from "react";
import { NavBarWrapper } from "./style";
import {Logo} from "../../atoms";

const NavBar = ({logo }) => {
    return (
        <NavBarWrapper>
            <Logo logo={logo}/>
        </NavBarWrapper>
    );
};

export default NavBar;
