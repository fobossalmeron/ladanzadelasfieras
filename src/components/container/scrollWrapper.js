import React, { useEffect, useRef } from "react";
import Smooth from "smooth-scrolling";
import styled from 'styled-components';

const PageScroll = styled.div` 
  position: absolute;
  overflow: hidden;
  top: 0;
  width: 100%;
  max-width: 1280px;
`;

export default function ScrollWrapper(props) {
  const pageRef = useRef(null);

  useEffect(() => {
    const section = pageRef.current;

    var smooth = new Smooth({
      noscrollbar: false,
      native: false,
      section: section,
      ease: 0.1,
      vs: { mouseMultiplier: 0.3, touchMultiplier: 1, keyStep: 300 },
      timer: 1000
    });
    smooth.init();

    return function cleanup() {
      smooth.destroy();
    };
  });
  return <PageScroll ref={pageRef}>{props.children}</PageScroll>;
}
