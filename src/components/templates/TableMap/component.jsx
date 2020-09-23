import React, { useState } from "react";
import { TableMapWrapper} from "./style";
import { Button } from "../../atoms";
import { Menu } from "../../molecules";
import { Floor } from "../../organisms";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const Home = ({ floors, zones, tables }) => {
  const floorsNumbers = Object.keys(floors)
    .map((floor) => Number(floor))
    .sort((a, b) => a - b);

  const [floor, setFloor] = useState(0);
  
  const currentFloor = floorsNumbers[floor];
  
  const upFloor = () => {
    let currentFloor = floor === floorsNumbers.length - 1 ? 0 : floor + 1;
   
    setFloor(currentFloor);
  };
  const downFloor = () => {
    let currentFloor = floor === 0 ? floorsNumbers.length - 1 : floor - 1;
    setFloor(currentFloor);
  };

  const currentZone = () => {
    const filteredZones = Object.keys(zones)
      .filter(key => Number(zones[key].floor) === currentFloor)
      .map(key => zones[key].name);
    
    return filteredZones.length > 0 ? filteredZones[0] : "";
  }

  return (
    <TableMapWrapper>
      <div className="mapHeader">
        <Menu currentFloor={currentFloor} currentZone={currentZone()} />
      </div>

      <div className="mapTable">
        <TransformWrapper
          defaultPositionX={0}
          defaultPositionY={0}
          options={{ maxScale: 2, limitToWrapper: true }}
          wheel={{ step: 2 }}
          zoomIn={{ step: 6 }}
          zoomOut={{ step: 6 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <Button onClick={zoomIn}>
                <FontAwesomeIcon icon={faSearchPlus} size="xs" color="grey" />
              </Button>
              <Button onClick={zoomOut}>
                <FontAwesomeIcon icon={faSearchMinus} size="xs" color="grey" />
              </Button>
              <Button onClick={resetTransform}>
                <FontAwesomeIcon
                  icon={faExpandArrowsAlt}
                  size="xs"
                  color="grey"
                />
              </Button>

              <TransformComponent>
                <Floor
                  floors={floors}
                  zones={zones}
                  tables={tables}
                  currentFloor={currentFloor}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>

      <div className="mapControl">
        <Button onClick={downFloor}>
          <FontAwesomeIcon icon={faMinus} size="xs" color="grey" />
        </Button>
        <Button onClick={upFloor}>
          <FontAwesomeIcon icon={faPlus} size="xs" color="grey" />
        </Button>
      </div>
    </TableMapWrapper>
  );
};

export default Home;
