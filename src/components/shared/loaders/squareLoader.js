import React from "react";
import { blackColor, redColor } from "components/layout/pageLayout";
import styled from "styled-components";

const SquareFiller = styled.div`
  height: 0;
  padding-bottom: 148%;
  margin-bottom: 18px;
  display: flex;
  width: 100%;
  background-color: ${blackColor};
`;

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
    border: none;
    cursor: pointer;
    padding: 5px 20px;
    margin-top: 20px;
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
    return <SquareFiller />;
  } else {
    // When the loader has just started
    return null;
  }
}

export default Loader;
