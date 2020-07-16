import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from "./components/About";
import styles from "./data/styles";

const StyledApp = styled.div`
    min-height: 100vh;
    background-color: ${styles.color.light};
`;

function App() {
    return (
        <StyledApp>
            <Header />
            <Switch>
                <Route exact path="/" component={Gallery} />
                <Route exact path="/about" component={About} />
            </Switch>
        </StyledApp>
    );
}

export default App;
