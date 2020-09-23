import React from "react";
import { Wrapper} from "./style";
import TableList from "../TableList/component";
import TableMap from "../TableMap/component";
import { NavBar, Footer} from "../../organisms"

const Home = ({ floors, zones, tables }) => {
  return (
    <Wrapper>
      <div className="header">
        <NavBar logo={"Casala"} />
      </div>
      <div className="list">
        <TableList items={tables} />
      </div>
      <div className="map">
        <TableMap tables={tables} zones={zones} floors={floors} />
      </div>
      <div className="footerBottom">
        <Footer />
      </div>
    </Wrapper>
  );
};
export default Home;
