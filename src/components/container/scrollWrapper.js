import React, { useEffect, useRef } from "react";
import Smooth from "smooth-scrolling";
import styled from "styled-components/macro";

const PageScroll = styled.div`
  top: 0;
  width: 100%;
  max-width: 1280px;
  -webkit-overflow-scrolling: touch;
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
      passive:true,
      vs: {
        mouseMultiplier: 0.3,
        firefoxMultiplier: 30,
        touchMultiplier: 1,
        keyStep: 300
      }
    });
    if (!props.mobile) {
      smooth.init();
    }

    return function cleanup() {
      smooth.destroy();
    };
  });
  var overflow = props.mobile ? "scroll" : " ";
  var position = props.mobile ? "relative" : "absolute";
  return (
    <PageScroll
      height={height}
      ref={pageRef}
      style={{
        overflowY: overflow,
        position: position
      }}
      id={"pageScroller"}
    >
      {props.children}
    </PageScroll>
  );
}
