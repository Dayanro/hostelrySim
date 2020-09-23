import React from "react";
import { NavBarWrapper } from "./style";
import { Logo, Icon } from "../../atoms";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({logo }) => {
    return (
        <NavBarWrapper>
            <Logo logo={logo} />
            <Icon size={30} color={"#a4bdc4"}>
                <FontAwesomeIcon icon={faUtensils} size="1x" color="white" />
            </Icon>
        </NavBarWrapper>
        
    );
};

export default NavBar;
