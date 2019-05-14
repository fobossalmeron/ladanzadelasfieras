import React, { useState } from "react";
import { blackColor } from "components/layout/pageLayout";
import styled, { css } from "styled-components";

const Graphic = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 148%;
  background-size: 100%;
  background-position: 50% 50%;
  margin-bottom: 18px;
  transition: all 0.4s ease;
  display: flex;
  width: 100%;
  overflow:hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${props => (!props.background ? blackColor : "none")};
  :hover{
      img{
          transform: scale(1.07);
      }
  }
  img {
    width: 100%;
    height: 100%;
    opacity:0;
    position: absolute;
    transition: 0.3s ease all;
  }
  ${props =>
    props.background &&
    css`
      img {
        opacity: 1;
      }
    `}
`;

const Imagen = props => {
  const [hasLoaded, setLoaded] = useState(false);

  function doSetLoaded() {
    setLoaded(true);
  }

  return (
    <Graphic background={hasLoaded}>
      <img src={props.src} alt={props.alt} onLoad={doSetLoaded} />
    </Graphic>
  );
};

export default Imagen;
