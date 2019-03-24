import React, {useEffect} from "react";
import Smooth from "smooth-scrolling";

export default function PageWrapper(props) {
    useEffect(() => {
        const section = document.querySelector(".PageWrapper");
        const listener = document.querySelector("body");
        var smooth = new Smooth({
          native: false,
          listener: listener,
          vs: "limitInertia",
          limitInertia: true,
          section: section,
          noscrollbar: true,
          ease: 0.04
        });
        smooth.init();
  
      return function cleanup() {
        smooth.destroy();
      };
    });
    return <div className="PageWrapper">{props.children}</div>;
  }