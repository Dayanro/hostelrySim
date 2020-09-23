import React from "react";
import { StyledLink } from "../../atoms";
import {
  NavLinkWrapper,
} from "./style";

const NavLink = ({text}) => {
  return (
    <NavLinkWrapper>
      <div className="navWrapper">
        <div className="linkWrapper">
          <StyledLink to="/">{text}</StyledLink>
        </div>
      </div>
    </NavLinkWrapper>
  );
};

export default NavLink;
