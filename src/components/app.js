import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";

import Loader from "./loader";
import Nav from "./nav";
import PageWrapper from "./pageWrapper";

import Inicio from "../pages/inicio";
import Cortometrajes from "../pages/cortometrajes";
import Produccion from "../pages/produccion";
import Prensa from "../pages/prensa";
import NoMatch from "../pages/404";

import video from "./../assets/video/video.mp4";
import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
import { ReactComponent as FacebookIcon } from "./../assets/img/layout/facebook.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";

import "./../assets/styles/app.scss";

function SocialLinks() {
  return (
    <ul className="socialLinks">
    <Fade right>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/title/tt7072396/">
          <IMDBIcon />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ladanzadelasfieras/">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="mailto:alayde.castro@gmail.com">
          <MailIcon />
        </a>
      </li>
      </Fade>
    </ul>
  );
}

function VideoBackground(play) {
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
      />
      <div className="overlay" />
    </div>
  );
}

function App(props) {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  });

  return (
    <div className="App">
      <Loader class={`loader-fade-out ${hasLoaded && "invisible"}`} />
      <div className={`app-fade-in ${hasLoaded && "visible"}`}>
        <Router>
          <Nav />
          <SocialLinks />
          <VideoBackground />
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup component={PageWrapper}>
                  <CSSTransition
                    timeout={600}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route name="inicio" exact path="/" component={Inicio} />
                      <Route name="inicio" exact path="/ladanzadelasfieras" component={Inicio} />
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
      </div>
    </div>
  );
}

export default App;
