import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactPlayer from "react-player";

import Loader from "./loader";
import PageWrapper from "./pageWrapper";

import Inicio from "../pages/inicio";
import Cortometrajes from "../pages/cortometrajes";
import Produccion from "../pages/produccion";
import Prensa from "../pages/prensa";
import NoMatch from "../pages/404";
 
import video from "./../assets/video/video.mp4";

import "./../assets/styles/app.scss";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/produccion">
            Producción
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/cortometrajes">
            Cortometrajes
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/prensa">
            Prensa
          </NavLink>
        </li>
      </ul>
    </nav>
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
