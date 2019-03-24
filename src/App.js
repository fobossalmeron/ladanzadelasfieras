import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ProduccionTitle } from "./img/producción.svg";

import ReactPlayer from "react-player";

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

function VideoBackground() {
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

class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
