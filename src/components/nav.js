import React from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Fade left delay={1300}>
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
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/cortometrajes"
            >
              Cortometrajes
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="is-active" to="/prensa">
              Prensa
            </NavLink>
          </li>
        </Fade>
      </ul>
    </nav>
  );
}

export default Nav;
