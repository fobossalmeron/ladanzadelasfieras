import React, { useState } from "react";
import { blackColor } from "components/layout/pageLayout";
import styled from "styled-components";

const Graphic = styled.div`
  height: 0;
  padding-bottom: 148%;
  background-size: 100%;
  background-position: 50% 50%;
  margin-bottom: 18px;
  transition: all 0.4s ease;
  display: flex;
  width: 100%;
  cursor: pointer;
  transition: opacity .3s ease;
  background-color: ${props => (props.background ? blackColor : "none")};
`;

const Imagen = props => {
  const [hasLoaded, setLoaded] = useState(false);

  function doSetLoaded() {
      console.log("do set loaded in")
    setLoaded(true);
  }

  return (
    <Graphic
      style={{ backgroundImage: `url(${props.src})` }}
      alt={props.alt}
      background={!hasLoaded}
      onLoad={doSetLoaded}
    />
  );
};

export default Imagen;
