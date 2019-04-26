import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components/macro";
import {
  whiteColor
} from "./../pages/pagesStylesheet";
import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
import { ReactComponent as FacebookIcon } from "./../assets/img/layout/facebook.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
  z-index: 2;
  right: 0;
  position: fixed;
  font-size: .76em;
  list-style: none;
  padding: 0;
  margin-top: 40px;
  margin-right: 40px;

  li {
      &:hover{
          svg{
              transform:scale(1.1)
          }
      }

      svg {
          height: 22px;
          margin-bottom: 15px;
          transition: transform .3s ease-out;

          * {
              fill: ${whiteColor};
              min-height: 100%;
          }
      }
  }
`

function SocialNav() {
  return (
    <LinkList>
    <Fade right delay={1300}>
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
    </LinkList>
  );
}

export default SocialNav;