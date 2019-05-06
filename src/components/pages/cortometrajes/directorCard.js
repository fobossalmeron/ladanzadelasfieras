import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import Person from "components/shared/person";
import createHoverMonitor from "components/shared/createHoverMonitor";

const DirectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-end: span 1;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    grid-column-end: span 9;
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
  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    if (!hover.isEnabled) {
      setHovered(bool);
    }
  }

  function createBio() {
    return { __html: props.bio };
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
    <DirectorContainer
      onClick={() => handleShow()}
      onMouseLeave={handleMouseLeave}
    >
      <InfoDirector double={props.double} onMouseEnter={handleMouseEnter}>
        <Person {...props} hovered={isHovered} />
      </InfoDirector>
      <HoverDirector hovered={isHovered} double={props.double}>
        <p dangerouslySetInnerHTML={createBio()} />
      </HoverDirector>
    </DirectorContainer>
  );
}

export default DirectorCard;
