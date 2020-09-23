import React from "react";
import { Icon } from "../../atoms";
import { CardWrapper } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Card = React.forwardRef(({ item, isOnclick }, ref) => {
  return (
    <CardWrapper onClick={isOnclick} ref={ref}>
      <div>
        <p className="textCard">{item.name_table}</p>
        <p className="textCard">MESA Nº:{item.id_table}</p>
      </div>
      <Icon size={30} color={"#a4bdc4"}>
        <FontAwesomeIcon icon={faUtensils} size="xs" color="white" />
      </Icon>
    </CardWrapper>
  );
});

export default Card;
