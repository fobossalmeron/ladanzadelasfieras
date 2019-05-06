import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import {
  whiteColor,
  navMargin,
  navMarginMobile
} from "components/layout/pageLayout";
import NavList from "./navList";
import { ReactComponent as HamburgerIcon } from "assets/img/layout/hamburger.svg";

const Menu = styled.nav`
  display: block;
  width: auto;
  z-index: 3;
  left: 0;
  position: fixed;
  margin: ${navMargin} 0 0 ${navMargin};
  margin-left: 40px;
  font-size: 0.76em;
  @media (max-width: 800px) {
    margin: ${navMarginMobile} 0 0 ${navMarginMobile};
  }
`;

const HamburgerMenu = styled.div`
  svg {
    width: 35px;
    height: auto;
    display: none;
    z-index: 4;
    cursor: pointer;
    line {
      fill: none;
      stroke-width: 25;
      stroke: ${whiteColor};
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  }
  @media (max-width: 1100px) {
    svg {
      display: block;
      line {
        transition: transform 0.4s cubic-bezier(1, -0.5, 0.5, 1);
      }
    }
  }
  ${props =>
    props.active &&
    css`
      svg {
        #hamb_top {
          transform: rotate(-45deg) translateY(205px) translateX(-160px);
        }
        #hamb_bottom {
          transform: rotate(45deg) translateY(-190px) translateX(40px);
        }
      }
    `}
`;

function Nav() {
  const [isActive, setActive] = useState(false);

  function handleActive(bool = !isActive) {
    setActive(bool);
  }

  return (
    <Menu>
      <HamburgerMenu onClick={() => handleActive()} active={isActive}>
        <HamburgerIcon />
      </HamburgerMenu>
      <NavList visible={isActive} handleActive={handleActive} />
    </Menu>
  );
}

export default Nav;
