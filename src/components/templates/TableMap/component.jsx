import React, { useState } from "react";
import { Wrapper, Header, Map, Control } from "./style";
import { Button } from "../../atoms";
import { Floor } from "../../organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Home = ({ floors, zones, tables }) => {
  console.log("MAP", floors);
  const floorsNumbers = Object.keys(floors).map((floor) => Number(floor)).sort((a, b) =>  a - b);

  
  const [floor, setFloor] = useState(0);
  const currentFloor = floorsNumbers[floor]; 
  console.log("currentFloor", currentFloor);
  const upFloor = () => {
    let currentFloor = floor === floorsNumbers.length - 1 ? 0 : floor + 1;
    console.log("currentFloor", currentFloor);
    setFloor(currentFloor);
  };
  const downFloor = () => {
    let currentFloor =
      floor === 0 ? floorsNumbers.length- 1 : floor - 1;
    console.log("currentFloor", currentFloor);
    setFloor(currentFloor);
  };

  return (
    <Wrapper>
      <Header />
      <Map>
        <Floor
          floors={floors}
          zones={zones}
          tables={tables}
          currentFloor={currentFloor}
        />
      </Map>
      <Control>
        <Button onClick={downFloor}>
          <FontAwesomeIcon icon={faMinus} size="xs" color="grey" />
        </Button>
        <Button onClick={upFloor}>
          <FontAwesomeIcon icon={faPlus} size="xs" color="grey" />
        </Button>
      </Control>
    </Wrapper>
  );
};

export default Home;
