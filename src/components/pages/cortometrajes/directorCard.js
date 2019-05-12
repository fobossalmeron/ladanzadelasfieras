import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import Person from "components/shared/person";
import { blackColor } from "components/layout/pageLayout";

const DirectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-end: span 1;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: ${props => props.double ? "-70px" : "inherit"}
  }
  @media (max-width: 735px) {
    margin-top: ${props => props.double ? "-80px" : "inherit"}
  }
  @media (max-width: 527px) {
    margin-top: ${props => props.double ? "-100px" : "inherit"}
  }
  @media (max-width: 437px) {
    margin-top: ${props => props.double ? "-110px" : "inherit"}
  }
  @media (max-width: 376px) {
    margin-top: ${props => props.double ? "-120px" : "inherit"}
  }
`;

const InfoDirector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: ${props => (props.double ? "2" : "4")};
  cursor: pointer;
  transition: 0.3s ease all;
  width: 100%;
  @media (max-width: 800px) {
    align-items: start;
  }
  @media (max-width: 800px) {
    position: absolute;
    left: 0;
    padding-left: 10px;
  }
`;

const HoverDirector = styled.div`
  opacity: 0;
  background-color: ${blackColor};
  width: 100%;
  position: absolute;
  left:0;
  grid-column-start: ${props => (props.double ? "2" : "1")};
  align-self: flex-start;
  top: 0;
  bottom: 0%;
  grid-template-columns: ${props =>
    props.double ? "repeat(5, 1fr)" : "repeat(6, 1fr)"};
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
    margin: 0;
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
  @media (max-width:800px) {
    position: relative;
    margin-top: -30px;
    padding-bottom: 40px;
    display:flex;
    p{
      grid-column: 1 / span 6;
      padding-right: 40px;
      padding-top: 120px;
      padding-left: 10px;
      align-self: flex-start;
      margin: 0;
    }
  }
  @media (max-width: 420px) {
    align-items: flex-start;
    margin-left: -20px;
    padding-left: 20px;
    width: calc(100% + 40px);
  }
`;

function DirectorCard(props) {
  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    if (props.mobile) {
      setHovered(bool);
    }
  }

  function createBio() {
    return { __html: props.bio };
  }

  function handleMouseEnter(e) {
    if (!props.mobile && !isHovered) {
      setHovered(true);
    }
  }

  function handleMouseLeave(e) {
    if (isHovered) {
      setHovered(false);
    }
  }

  return (
    <DirectorContainer
      onClick={() => handleShow()}
      onMouseLeave={handleMouseLeave}
      double={props.double}
    >
      <InfoDirector double={props.double} onMouseEnter={handleMouseEnter}>
        <Person {...props} hovered={isHovered} marginTop isDirector/>
      </InfoDirector>
      <HoverDirector hovered={isHovered} double={props.double}>
        <p dangerouslySetInnerHTML={createBio()} />
      </HoverDirector>
    </DirectorContainer>
  );
}

export default DirectorCard;
