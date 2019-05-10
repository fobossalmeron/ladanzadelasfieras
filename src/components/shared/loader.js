import React from "react";
import { ReactComponent as LoaderSvg } from "assets/img/layout/loaderLogo.svg";
import { redColor } from "components/layout/pageLayout";
import styled from "styled-components";

const LoaderMessage = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: opacity 0.4s ease-out;
  display: flex;
  flex-direction: column;
  button {
    background-color: ${redColor};
    border:none;
    cursor: pointer;
    padding: 5px 20px;
    margin-top:20px;
  }
`;

const LoaderLogo = styled(LoaderSvg)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: square;
  z-index: 2;
  transition: opacity 0.4s ease-out;
  #back {
    stroke: #ffffff;
    opacity: 0.2;
  }
  #front {
    stroke: #ffffff;
    stroke-dasharray: 1748, 500;
    stroke-dashoffset: 1748;
    animation: dash 2s linear infinite;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

function Loader(props) {
  if (props.error) {
    // When the loader has errored
    return (
      <LoaderMessage>
        La conexión a internet ha fallado{" "}
        <button onClick={props.retry}>Vuelve a intentarlo</button>
      </LoaderMessage>
    );
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <LoaderMessage>
        Está tardando mucho en cargar...{" "}
        <button onClick={props.retry}>Vuelve a intentarlo</button>
      </LoaderMessage>
    );
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <LoaderLogo />;
  } else {
    // When the loader has just started
    return null;
  }
}

export default Loader;
