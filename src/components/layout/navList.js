import React from "react";
import { NavLink } from "react-router-dom";
import { whiteColor, blackColor } from "components/layout/pageLayout";
import styled, { css } from "styled-components/macro";
import Fade from "react-reveal/Fade";
import { ReactComponent as IMDBIcon } from "assets/img/layout/imdb.svg";
import { ReactComponent as FacebookIcon } from "assets/img/layout/facebook.svg";
import { ReactComponent as MailIcon } from "assets/img/layout/mail.svg";

const LinkWrapper = styled.li`
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
    :visited {
      color: ${whiteColor};
    }
  }
`;

const SocialMobile = styled.ul`
  flex-direction: row;
  padding: 0;
  justify-content: space-between;
  width: 200px;
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
  li {
    text-decoration: none;
    list-style: none;
  }
  svg {
    height: 25px;
    path {
      fill: ${whiteColor};
    }
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  @media (max-width: 1101px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${blackColor};
    text-align: center;
    color: ${blackColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20% 0;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    &::before {
      content: " ";
      margin: 15% 0%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    ${LinkWrapper} {
      margin: 0 0 4rem 0;
      color: ${blackColor};
      font-size: 2rem;
      line-height: 1;
      a {
        &:hover :after {
          width: 0;
        }
      }
    }
    ${props =>
      props.visible &&
      css`
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.5s cubic-bezier(1, -0.5, 0.5, 1);
      `}
  }
  @media (max-width: 1099px) {
    transition: opacity 0.5s cubic-bezier(1, -0.5, 0.5, 1);
  }
  @media (max-width: 500px) {
    ${LinkWrapper} {
      font-size: 1.7rem;
    }
  }
`;

const Contactanos = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
`;

function NavList(props) {
  function scroll() {
    if (props.visible) {
      let page = document.getElementById("pageScroller");
      page.scrollTop = 0;
    }
  }
  return (
    <List visible={props.visible} onClick={() => scroll()}>
      <Fade left delay={1300}>
        <LinkWrapper onClick={() => props.handleActive(false)}>
          <NavLink exact={true} activeClassName="is-active" to="/">
            Inicio
          </NavLink>
        </LinkWrapper>
        <LinkWrapper onClick={() => props.handleActive(false)}>
          <NavLink exact={true} activeClassName="is-active" to="/produccion">
            Producción
          </NavLink>
        </LinkWrapper>
        <LinkWrapper onClick={() => props.handleActive(false)}>
          <NavLink exact={true} activeClassName="is-active" to="/cortometrajes">
            Cortometrajes
          </NavLink>
        </LinkWrapper>
        <LinkWrapper onClick={() => props.handleActive(false)}>
          <NavLink exact={true} activeClassName="is-active" to="/prensa">
            Prensa
          </NavLink>
        </LinkWrapper>
        <div>
          <Contactanos>Contáctanos</Contactanos>
          <SocialMobile>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.imdb.com/title/tt7072396/"
              >
                <IMDBIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/ladanzadelasfieras/"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="mailto:alayde.castro@gmail.com">
                <MailIcon />
              </a>
            </li>
          </SocialMobile>
        </div>
      </Fade>
    </List>
  );
}

export default NavList;
