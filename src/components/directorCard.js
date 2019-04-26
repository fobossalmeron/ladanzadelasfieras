import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
//import { ReactComponent as IGIcon } from "./../assets/img/layout/ig.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";
import createHoverMonitor from './shared/createHoverMonitor';

const Director = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-end: span 1;
  align-items: center;
  text-align: center;
`;

const InfoDirector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: ${props => (props.double ? "2" : "4")};
  cursor: pointer;
  transition: 0.3s 400ms ease all;
  width: 100%;
`;

const IconContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0 15px 0;
  transition: opacity 0.3s 0ms ease;
  opacity: 0;
  ${props =>
    props.hovered &&
    css`
      opacity: 1;
      transition: opacity 0.4s ease;
    `}
  svg {
    height: 22px;
    transition: transform 300ms ease;
    transform: scale(1);

    :hover {
      transform: scale(1.1);
    }
    path {
      fill: white;
    }
  }
`;

const HoverDirector = styled.div`
  opacity: 0;
  background-color: black;
  width: 100%;
  position: absolute;
  grid-column-start: ${props => (props.double ? "2" : "1")};
  align-self: flex-start;
  top: 0;
  bottom: 0%;
  grid-template-columns: ${props => (props.double ? "repeat(5, 1fr)" : "repeat(6, 1fr)")};
  display: grid;
  grid-gap: 40px;
  align-items: center;
  text-align: left;
  transition: opacity 0.4s ease, z-index 0ms 400ms;
  z-index: -1;
  margin-top: -1px;
  p {
    grid-column: ${props => (props.double ? "2 / span 4" : "3 / span 4")};
    padding-right: 40px;
    a {
      color: #c64028;
      font-weight: normal;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  ${props =>
    props.hovered &&
    css`
      opacity: 1;
      z-index: ${props => (props.double ? "1" : "3")};
      transition: opacity 0.4s ease, z-index 0ms ease;
    `}
`;

const hover = createHoverMonitor();

function DirectorCard(props) {
  const bio = props.bio;
  const img = props.img;
  const title = props.title;
  const name = props.name;
  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    if (!hover.isEnabled) {
      setHovered(bool);
    }
  }

  function createBio() {
    return { __html: bio };
  }

  function handleMouseEnter(e) {
    if (hover.isEnabled && !isHovered) {
      setHovered(true);
    }
  }
  
  function handleMouseLeave(e) {
    if (isHovered) {
      setHovered(false);
    }
  }


  return (
    <Director onClick={() => handleShow()} onMouseLeave={handleMouseLeave}>
      <InfoDirector double={props.double} onMouseEnter={handleMouseEnter}>
        <img src={img} alt={name} />
        <b>{title}:</b> {name}
        <IconContainer hovered={isHovered}>
          {props.imdb ? (
            <a target="_blank" rel="noopener noreferrer" href={props.imdb}>
              <IMDBIcon />
            </a>
          ) : null}
          {props.mail ? (
            <a href={"mailto:" + props.mail}>
              <MailIcon />
            </a>
          ) : null}
          {/*props.ig ? (
            <a target="_blank" rel="noopener noreferrer" href={props.ig}>
              <IGIcon />
            </a>
          ) : null*/}
        </IconContainer>
      </InfoDirector>
      <HoverDirector hovered={isHovered} double={props.double}>
        <p dangerouslySetInnerHTML={createBio()} />
      </HoverDirector>
    </Director>
  );
}

export default DirectorCard;
