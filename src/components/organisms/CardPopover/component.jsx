import React, { useState,useEffect, useRef } from "react";
import { Wrapper } from "./style";
import { Card, Popover } from "../../molecules";

const CardPopover = ({ item, getCardMessage }) => {
  const [displayPopover, setDisplayPopover] = useState(false);
  const cardRef = useRef(null);

  const onClick = () => {
    setDisplayPopover(true);
  };

  useEffect(() => {
    const handleClickOutsideCard = (event) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setDisplayPopover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideCard);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCard);
    };
  }, [cardRef]);

  const text = item ? getCardMessage(item.name_table) : "";
  return (
    <Wrapper>
      <Card item={item} isOnclick={onClick} ref={cardRef} />
      {displayPopover ? <Popover text={text} /> : null}
    </Wrapper>
  );
};

export default CardPopover;
