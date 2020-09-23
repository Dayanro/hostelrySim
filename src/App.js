import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Home } from "./components/templates";
import { AppWrapper } from "./AppWrapper";
import { useSelector, useDispatch } from "react-redux";
import { loadMap } from "./redux/actions/map";


function App() {
  const dispatch = useDispatch();

  const floorsById = useSelector((state) => state.map.floors);
  const zonesById = useSelector((state) => state.map.zones);
  const tablesById = useSelector((state) => state.map.tables);

 useEffect(() => {
    dispatch(loadMap());
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Home floors={floorsById} zones={zonesById} tables={tablesById} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
