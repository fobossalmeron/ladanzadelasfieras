import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components/macro";
import ReactPlayer from "react-player";

import Nav from "./nav";
import SocialNav from "./socialNav";
import PageWrapper from "./pageWrapper";

import Inicio from "../pages/inicio";
import Cortometrajes from "../pages/cortometrajes";
import Produccion from "../pages/produccion";
import Prensa from "../pages/prensa";
import NoMatch from "../pages/404";

import video from "./../assets/video/video.mp4";

import "./../assets/styles/app.scss";

const AppFadeIn = styled.div`
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.3s ease-in;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  ${props =>
    props.visible &&
    css`
      transition: opacity 0.3s ease-in;
      opacity: 1;
    `}
`;

function VideoBackground(play, props) {
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    setPlaying(true);
  });
  return (
    <div className="video_container">
      <ReactPlayer
        url={video}
        playsinline
        playing={isPlaying}
        muted
        loop
        volume={0}
        onLoad={props.passLoad}
      />
      <div className="overlay" />
    </div>
  );
}

function App(props) {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById("loader");
      if (ele) {
        setLoaded(true);
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000);
      }
    });
  });

  // fake authentication Promise
  function authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  return (
    <AppFadeIn visible={hasLoaded}>
        <Router>
          <Nav />
          <SocialNav />
          <VideoBackground />
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup component={PageWrapper}>
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
    </AppFadeIn>
  );
}

export default App;
