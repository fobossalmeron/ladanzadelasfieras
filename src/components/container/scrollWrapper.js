import React, { useEffect, useRef } from "react";
import Smooth from "smooth-scrolling";
import styled from "styled-components/macro";

const PageScroll = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1280px;
`;

export default function ScrollWrapper(props) {
  const pageRef = useRef(null);
  var height = "100px";

  useEffect(() => {
    const section = pageRef.current;

    var smooth = new Smooth({
      noscrollbar: true,
      native: false,
      section: section,
      ease: 0.1,
      vs: {
        mouseMultiplier: 0.3,
        firefoxMultiplier: 20,
        touchMultiplier: 1,
        keyStep: 300
      },
      timer: 1000
    });
    smooth.init();

    return function cleanup() {
      smooth.destroy();
    };
  });
  return (
    <PageScroll height={height} ref={pageRef}>
      {props.children}
    </PageScroll>
  );
}
