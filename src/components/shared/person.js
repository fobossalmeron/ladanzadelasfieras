import React from "react";
import styled, { css } from "styled-components/macro";
import { ReactComponent as IMDBIcon } from "assets/img/layout/imdb.svg";
import { ReactComponent as IGIcon } from "assets/img/layout/ig.svg";
import { ReactComponent as MailIcon } from "assets/img/layout/mail.svg";
import { ReactComponent as WebIcon } from "assets/img/layout/web.svg";
import { ReactComponent as LinkedIcon } from "assets/img/layout/linkedin.svg";

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.alignLeft ? "left" : "center")};
  align-items: ${props => (props.alignLeft ? "flex-start" : "center")};
  transition: 0.3s ease all;
  width: 110px;
  img {
    border-radius: 100%;
    max-width: 80px;
    margin-bottom: 18px;
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
`;

const IconContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: ${props => (props.alignLeft ? "flex-start" : "space-evenly")};
  width: 100%;
  margin: 10px 0 15px 0;
  svg {
    height: 22px;
    margin-right: ${props => (props.alignLeft ? "10px" : "0")};
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

function Person(props) {
  return (
      <PersonContainer hovered={props.hovered} alignLeft={props.alignLeft}>
        <img src={props.img} alt={props.name} />
        <b>{props.title}</b> {props.name}
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
