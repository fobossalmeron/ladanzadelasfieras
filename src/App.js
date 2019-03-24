import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Redirect,
  Switch
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ProduccionTitle } from "./img/producción.svg";
import ReactPlayer from "react-player";
import Smooth from "smooth-scrolling";

import Loader from "./Loader";

import video from "./video/video.mp4";
import homeScreenImg from "./img/home.png";

import "./App.scss";

const imgStyle = {
  width: "100%",
  height: "auto",
  display: "block"
};

function Inicio() {
  document.title = "La Danza de las Fieras";
  return (
    <div className="Page">
      <h1 style={{ fontSize: 0, opacity: 0 }}>La Danza de las Fieras</h1>
      <img src={homeScreenImg} style={imgStyle} alt="homeScreen" />
    </div>
  );
}
function Produccion() {
  document.title = "Producción";
  return (
    <div className="Page">
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
    </div>
  );
}

function Cortometrajes() {
  document.title = "Cortometrajes";
  return (
    <div className="Page">
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
      <h1>Cortometrajes</h1>
    </div>
  );
}

function Prensa() {
  document.title = "Prensa";

  /*useEffect(() => {
    setTimeout(() => {
      var section = document.querySelector(".Page");
    }, 0);
  });*/
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

function NoMatch(props) {
  return (
    <div className="Page">
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
      <h1>
        No match for <code>{props.location.pathname}</code>
      </h1>
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

function runScrolling(option) {
      var section = document.querySelector(".Page");
      const listener = document.querySelector("body");
      const smooth = new Smooth({
        native: false,
        listener: listener,
        vs: "limitInertia",
        limitInertia: true,
        section: section,
        noscrollbar: true,
        ease: 0.04
      });
      if (option === false){
        console.log("off")
      } else {
        smooth.init();
      }
}

function stopScrolling(){}

function App() {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      runScrolling();
    }, 500);
  });

  const PageWrapper = props => (
    <div className="PageWrapper">{props.children}</div>
  );

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
                // withRouter(
                <TransitionGroup component={PageWrapper}>
                  <CSSTransition
                    timeout={600}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route name="inicio" exact path="/" component={Inicio} />
                      {
                        //<Redirect from="/" to="inicio" />
                      }
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
                //)
              );
            }}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
