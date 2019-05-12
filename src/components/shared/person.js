import React from "react";
import styled, { css } from "styled-components/macro";
import { blackColor } from "components/layout/pageLayout";
import { ReactComponent as IMDBIcon } from "assets/img/layout/imdb.svg";
import { ReactComponent as IGIcon } from "assets/img/layout/ig.svg";
import { ReactComponent as MailIcon } from "assets/img/layout/mail.svg";
import { ReactComponent as WebIcon } from "assets/img/layout/web.svg";
import { ReactComponent as LinkedIcon } from "assets/img/layout/linkedin.svg";

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  min-height: 80px;
  min-width: 80px;
  background-color: ${blackColor};
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 18px;
  position: relative;
  ${props =>
    props.marginTop &&
    css`
      margin-top: -18px;
    `}
`;

const TitleContainer = styled.span`
  color: white;
`;

const IconContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: ${props =>
    props.alignLeft ? "flex-start" : "space-evenly"};
  width: 100%;
  margin: 10px 0 15px 0;
  svg {
    height: 22px;
    margin-right: ${props => (props.alignLeft ? "10px" : "0")};
    transform: scale(1);
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
    path {
      fill: white;
    }
  }
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.alignLeft ? "left" : "center")};
  align-items: ${props => (props.alignLeft ? "flex-start" : "center")};
  transition: 0.3s ease all;
  width: 110px;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  b {
    width: 100%;
    text-transform: uppercase;
  }
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
  @media (max-width:800px) {
    /* Esto es lo que debe jalar solo en direccion*/
    ${props =>
      props.isDirector &&
      css`
        display: grid;
        grid-template-columns: 80px 18px 1fr;
        flex-direction: row;
        width: 100%;
        margin-bottom: 18px;
        ${TitleContainer} {
          grid-column: 3 / span 1;
          text-align: left;
          align-self: flex-start;
        }
        ${ImageContainer} {
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
        }
        ${IconContainer} {
          grid-column: 3 / span 1;
          width: auto;
          margin-bottom: 0;
          justify-content: flex-start;
          svg {
            margin-right: 10px;
          }
        }
      `}
  }
`;

function Person(props) {
  return (
    <PersonContainer hovered={props.hovered} alignLeft={props.alignLeft} isDirector={props.isDirector}>
      <ImageContainer marginTop={props.marginTop}>
        <img src={props.img} alt={props.name} />
      </ImageContainer>
      <TitleContainer>
        <b>{props.title}</b>
        <br />
        {props.name}
      </TitleContainer>
      <IconContainer alignLeft={props.alignLeft}>
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
    </PersonContainer>
  );
}

export default Person;
