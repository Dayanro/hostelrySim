import React from "react";
import { MenuWrapper} from "./style";
import { Button, Label } from "../../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ currentFloor, currentZone }) => {
  return (
    <MenuWrapper>
      <div className="dataWrapper">
        <Label>Piso Nº: {currentFloor}</Label>
        <Label>Zona: {currentZone}</Label>
      </div>
      <Button>
        <FontAwesomeIcon icon={faCog} size="xs" color="#5491a2" />
      </Button>
    </MenuWrapper>
  );
};

export default Menu;
