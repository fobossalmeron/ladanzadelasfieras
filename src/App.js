import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ProduccionTitle } from "./img/producción.svg";
import ReactPlayer from "react-player";
import Smooth from "smooth-scrolling";

import Loader from "./Loader";

import video from "./video/video.mp4";

import "./App.scss";

function Inicio() {
  return (
    <div className="Page">
      <h2>La Danza de las Fieras</h2>
      <p>
        This page demonstrate the page transition animation done on react router
        URLs with styled components and react-transition-group.
      </p>
    </div>
  );
}
function Produccion() {
  return (
    <div className="Page">
      <h1>
        <ProduccionTitle />
      </h1>
      <p>Demo page. Click below to go back to previous page.</p>
    </div>
  );
}

function Cortometrajes() {
  return (
    <div className="Page">
      <h1>Cortometrajes</h1>
      <p>Demo page. Click below to go back to previous page.</p>
    </div>
  );
}

function Prensa() {
  return (
    <div className="Page">
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
      <h1>Prensa</h1>
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/produccion">Producción</Link>
        </li>
        <li>
          <Link to="/cortometrajes">Cortometrajes</Link>
        </li>
        <li>
          <Link to="/prensa">Prensa</Link>
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

function App() {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      const section = document.querySelector(".Page");
      const listener = document.querySelector(".App");
      const smooth = new Smooth({
        native: false,
        listener: listener,
        vs: "limitInertia",
        section: section,
        noscrollbar: true,
        ease: 0.04
      });
      smooth.init();
      //smooth.on();
      //smooth.scrollTo(500);
    }, 500);
  });
  return (
    <div className="App">
      <Loader class={`loader-fade-out ${hasLoaded && "invisible"}`} />
      <div className={`app-fade-in ${hasLoaded && "visible"}`}>
        <Router>
          <Header />
          <VideoBackground />
          <Route
            render={({ location }) => {
              return (
                <div className="PageWrapper">
                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={600}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/produccion"
                          component={Produccion}
                        />
                        <Route
                          exact
                          path="/cortometrajes"
                          component={Cortometrajes}
                        />
                        <Route exact path="/prensa" component={Prensa} />
                        <Route exact path="/" component={Inicio} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              );
            }}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
