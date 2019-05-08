import React, { useState } from "react";
import styled from "styled-components/macro";
import Person from 'components/shared/person';

export const ProducerContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const InfoProducer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: 0.3s ease all;
  width: 100%;
`;

function Productor(props) {
  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    if (props.mobile) {
      setHovered(bool);
    }
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
    <ProducerContainer onClick={() => handleShow()} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <InfoProducer>
        <Person {...props} hovered={isHovered} alignLeft={true}/>
      </InfoProducer>
    </ProducerContainer>
  );
}

export default Productor;
