import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
import { ReactComponent as IGIcon } from "./../assets/img/layout/ig.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";

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
  z-index: ${props => props.double? "2" : "4"};
  cursor: pointer;
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
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0 15px 0;
  svg {
    height: 22px;
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
  left: 0;
  top: 0;
  bottom: 0%;
  grid-template-columns: repeat(6, 1fr);
  display: grid;
  grid-gap:40px;
  align-items: center;
  text-align: left;
  transition: opacity 0.4s ease;
  z-index: -1;
  p {
    grid-column: 3 / span 4;
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
      z-index: ${props => props.double? "1" : "3"};
      transition: opacity 0.4s ease, z-index 0.5s ease;
    `}
`;

function DirectorCard(props) {
  const bio = props.bio;
  const img = props.img;
  const title = props.title;
  const name = props.name;
  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    setHovered(bool);
    console.log(props.double)
  }

  function createBio() {
    return { __html: bio };
  }

  return (
    <Director onClick={() => handleShow()}>
      <InfoDirector hovered={isHovered} double={props.double}>
        <img src={img} alt={name} />
        <b>{title}:</b> {name}
        <IconContainer>
          {props.imdb ? (
            <a href={props.imdb}>
              <IMDBIcon />
            </a>
          ) : null}
          {props.ig ? (
            <a href={props.ig}>
              <IGIcon />
            </a>
          ) : null}
          {props.mail ? (
            <a href={"mailto:" + props.mail}>
              <MailIcon />
            </a>
          ) : null}
        </IconContainer>
      </InfoDirector>
      <HoverDirector hovered={isHovered} double={props.double}>
        <p dangerouslySetInnerHTML={createBio()} />
      </HoverDirector>
    </Director>
  );
}

export default DirectorCard;
