import React, {useEffect} from "react";
import Smooth from "smooth-scrolling";
import { TweenLite } from "gsap/TweenMax";


export default function PageWrapper(props) {
    useEffect(() => {
        const section = document.querySelector(".PageWrapper");
        const listener = document.querySelector(".PageWrapper");
        TweenLite.set(section, {
          y: -window.pageYOffset
        });
        var smooth = new Smooth({
          noscrollbar: false,
          section: section,
          ease: 0.1,
          timer: 1000
        });
        //smooth.init();
        //smooth.on();

      return function cleanup() {
        //smooth.destroy();
      };
    });
    return <div className="PageWrapper">{props.children}</div>;
  }