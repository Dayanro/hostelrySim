import React from "react";
import { Wrapper, Header, List, Map, Footer, LabelWrapper } from "./style";
import TableList from "../TableList/component";
import TableMap from "../TableMap/component";
import { NavBar} from "../../organisms"

const Home = ({ floors, zones, tables }) => {
  console.log("HOME", tables);
  return (
    <Wrapper>
      <Header>
        <NavBar logo={"SIM"} />
      </Header>
      <List>
        <LabelWrapper>
          <TableList items={tables} />
        </LabelWrapper>
      </List>
      <Map>
        <TableMap tables={tables} zones={zones} floors={floors} />
      </Map>
      <Footer />
    </Wrapper>
  );
};

export default Home;
