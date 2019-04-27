import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Fade from "react-reveal/Fade";
import { whiteColor } from "pages/pagesStylesheet";

const NavMenu = styled.nav`
  display: block;
  width: auto;
  z-index: 2;
  left: 0;
  position: fixed;
  margin-top: 40px;
  margin-left: 40px;
  font-size: 0.76em;

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
    line-height: 3;

    a {
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      color: ${whiteColor};

      :after {
        content: " ";
        display: inline-block;
        width: 0px;
        height: 1px;
        background-color: ${whiteColor};
        transition: ease-in all 200ms;
      }

      :hover {
        :after {
          width: 10px;
        }
      }

      &.is-active {
        font-weight: bold;
      }

      .animate {
        transform-origin: 0% 50%;
        display: block;
      }

      :visited {
        color: ${whiteColor};
      }
    }
  }
`;

function Nav() {
  return (
    <NavMenu>
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
    </NavMenu>
  );
}

export default Nav;
