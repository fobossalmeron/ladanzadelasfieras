import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components/macro";
import mobileAndTabletCheck from "components/shared/mobileAndTabletCheck";

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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

function webpCheck() {
  if (window.Modernizr.webp) {
    return true;
  } else {
    return false;
  }
}

function App(props) {
  const [hasLoaded, setLoaded] = useState(false);
  const mobile = mobileAndTabletCheck();
  const webp = webpCheck();

  useEffect(() => {
    authenticate().then(() => {
      const loader = document.getElementById("loader");
      if (loader) {
        setLoaded(true);
        setTimeout(() => {
          // transition out
          loader.style.opacity = "0";
          setTimeout(() => {
            // remove from DOM
            loader.remove();
          }, 500);
        }, 500);
      }
    });
  });

  // fake authentication Promise
  function authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
  return (
    <AppContainer visible={hasLoaded}>
      <Router>
        <Nav />
        <SocialNav />
        <BackgroundVideo webp={webp}/>
        <Route
          render={({ location }) => {
            return (
              <ScrollWrapper mobile={mobile}>
                  <Switch location={location}>
                    <Route
                      name="inicio"
                      exact
                      path="/"
                      component={() => <Inicio hasLoaded={hasLoaded} webp={webp} />}
                    />
                    <Route
                      name="inicio"
                      exact
                      path="/ladanzadelasfieras"
                      component={() => <Inicio hasLoaded={hasLoaded} webp={webp} />}
                    />
                    <Route
                      exact
                      path="/produccion"
                      component={() => <Produccion mobile={mobile} />}
                    />
                    <Route
                      exact
                      path="/cortometrajes"
                      component={() => <Cortometrajes mobile={mobile} webp={webp}/>}
                    />
                    <Route exact path="/prensa" component={() => <Prensa mobile={mobile} />} />
                    <Route component={NoMatch} />
                  </Switch>
                </ScrollWrapper>
            );
          }}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
