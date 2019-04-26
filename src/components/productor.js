import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import createHoverMonitor from './shared/createHoverMonitor';
import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
import { ReactComponent as IGIcon } from "./../assets/img/layout/ig.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";
import { ReactComponent as WebIcon } from "./../assets/img/layout/web.svg";
import { ReactComponent as LinkedIcon } from "./../assets/img/layout/linkedin.svg";


const Producer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  img {
    border-radius: 100%;
    max-width: 80px;
    margin-bottom: 18px;
  }
  b {
    width: 100%;
    text-transform: uppercase;
  }
`;

const InfoProducer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: 0.3s ease all;
  width: 100%;
  svg {
    opacity: 0;
    transition: 0.3s ease all;
  }
  ${props =>
    props.hovered &&
    css`
      svg {
        opacity: 1;
      }
    `}
`;

const IconContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0 15px 0;
  svg {
    height: 22px;
    margin-right:10px;
    transform:scale(1);
    cursor:pointer;
    :hover{
      transform:scale(1.1);
    }
    path {
      fill: white;
    }
  }
`;

function Productor(props) {
  const img = props.img;
  const title = props.title;
  const name = props.name;
  const [isHovered, setHovered] = useState(false);
  const hover = createHoverMonitor();

  function handleShow(bool = !isHovered) {
    if (!hover.isEnabled) {
      setHovered(bool);
    }
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
    <Producer onClick={() => handleShow()} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <InfoProducer hovered={isHovered} double={props.double}>
        <img src={img} alt={name} />
        <b>{title}</b> {name}
        <IconContainer>
        {props.web ? (
            <a target="_blank" rel="noopener noreferrer" href={props.web}>
              <WebIcon />
            </a>
          ) : null}
          {props.linked ? (
            <a target="_blank" rel="noopener noreferrer" href={props.linked}>
              <LinkedIcon />
            </a>
          ) : null}
          {props.imdb ? (
            <a target="_blank" rel="noopener noreferrer" href={props.imdb}>
              <IMDBIcon />
            </a>
          ) : null}
          {props.ig ? (
            <a target="_blank" rel="noopener noreferrer" href={props.ig}>
              <IGIcon />
            </a>
          ) : null}
          {props.mail ? (
            <a href={"mailto:" + props.mail}>
              <MailIcon />
            </a>
          ) : null}
        </IconContainer>
      </InfoProducer>
    </Producer>
  );
}

export default Productor;
