import React from "react";
import { CardListWrapper } from "./style";
import CardPopover from "../CardPopover/component";

const CardList = ({ items, getCardMessage }) => {
  return (
    <CardListWrapper>
      {Object.keys(items).map((itemId) => (
        <CardPopover
          key={items[itemId].name_table}
          item={items[itemId]}
          getCardMessage={getCardMessage}
        />
      ))}
    </CardListWrapper>
  );
};

export default CardList;
