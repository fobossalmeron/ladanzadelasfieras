import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components/macro";

import Nav from "components/layout/nav";
import SocialNav from "components/layout/socialNav";
import ScrollWrapper from "components/container/scrollWrapper";
import BackgroundVideo from "components/container/backgroundVideo";

import Inicio from "components/pages/inicio";
import Cortometrajes from "components/pages/cortometrajes/cortometrajes";
import Produccion from "components/pages/produccion/produccion";
import Prensa from "components/pages/prensa/prensa";
import NoMatch from "components/pages/404";

import "assets/styles/app.scss";

const AppContainer = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease-in;
  ${props =>
    props.visible &&
    css`
      transition: opacity 0.3s ease-in;
      opacity: 1;
    `}
`;

function App(props) {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById("loader");
      if (ele) {
        setLoaded(true);
        setTimeout(() => {
          // remove from DOM
          ele.remove();
        }, 1000);
      }
    });
  });

  // fake authentication Promise
  function authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  return (
    <AppContainer visible={hasLoaded}>
      <Router>
        <Nav />
        <SocialNav />
        <BackgroundVideo />
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup component={ScrollWrapper}>
                <CSSTransition
                  timeout={600}
                  classNames="page"
                  inProp={hasLoaded}
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route
                      name="inicio"
                      exact
                      path="/"
                      component={() => <Inicio hasLoaded={hasLoaded} />}
                    />
                    <Route
                      name="inicio"
                      exact
                      path="/ladanzadelasfieras"
                      component={() => <Inicio hasLoaded={hasLoaded} />}
                    />
                    <Route exact path="/produccion" component={Produccion} />
                    <Route
                      exact
                      path="/cortometrajes"
                      component={Cortometrajes}
                    />
                    <Route exact path="/prensa" component={Prensa} />
                    <Route component={NoMatch} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
