import React, { useState} from "react";
import Fade from "react-reveal/Fade";
import {
  NavLink
} from "react-router-dom";

function Nav() {
  const [wasClicked, setClick] = useState(false);
  function setClicked(navItem) {
    setClick(navItem);
    var timer = setTimeout(() => {
      setClick(0);
    }, 500);
  }
  function unsetClicked(){
    setClick(0);
  }
  return (
    <Fade left>
    <nav>
      <ul>
        <li>
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/"
            onMouseDown={() => setClicked(1)}
            className={wasClicked === 1 ? "animate" : " "}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/produccion"
            onMouseDown={() => setClicked(2)}
            className={wasClicked === 2 ? "animate" : " "}
          >
            Producción
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/cortometrajes"
            onMouseDown={() => setClicked(3)}
            className={wasClicked === 3 ? "animate" : " "}
          >
            Cortometrajes
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/prensa"
            onMouseDown={() => setClicked("Inicio")}
            className={wasClicked === "Inicio" ? "animate" : " "}
          >
            Prensa
          </NavLink>
        </li>
      </ul>
    </nav>
    </Fade>
  );
}

export default Nav;