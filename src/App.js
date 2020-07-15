import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Gallery from "./components/Gallery";

const StyledApp = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Gallery />
    </StyledApp>
  );
}

export default App;
