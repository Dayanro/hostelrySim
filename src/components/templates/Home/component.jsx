import React from "react";
import { Wrapper, Header, List, Map, Footer } from "./style";
import TableList from "../TableList/component";
import TableMap from "../TableMap/component";

const Home = ({ floors, zones, tables }) => {
  console.log("HOME", tables);
  return (
    <Wrapper>
      <Header />
      <List>
        <TableList items={tables} />
      </List>
      <Map>
        <TableMap tables={tables} zones={zones} floors={floors} />
      </Map>
      <Footer />
    </Wrapper>
  );
};

export default Home;
