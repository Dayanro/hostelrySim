import React from "react";
import { CardWrapper} from "./style";

const Card = React.forwardRef(({ item, isOnclick }, ref) => { 
  return <CardWrapper onClick={isOnclick} ref={ref}>{item.name_table}</CardWrapper>;
});

export default Card;
