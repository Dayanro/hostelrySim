import React from "react";
import { CardWrapper, ImagenWrapper, TextWrapper, Text } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Card = React.forwardRef(({ item, isOnclick }, ref) => {
  return (
    <CardWrapper onClick={isOnclick} ref={ref}>
      <Text>
        <TextWrapper>{item.name_table}</TextWrapper>
        <TextWrapper>MESA Nº:{item.id_table}</TextWrapper>
      </Text>
      <ImagenWrapper>
        <FontAwesomeIcon icon={faUtensils} size="xs" color="white" />
      </ImagenWrapper>
    </CardWrapper>
  );
});

export default Card;
