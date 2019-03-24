import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ProduccionTitle } from "./../assets/img/layout/produccion.svg";

function ProduccionTitle2() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });

  return (
    <h1>
      <CSSTransition in={inProp} timeout={800} classNames="titleSlide">
        <h1>
          <ProduccionTitle />
        </h1>
      </CSSTransition>
    </h1>
  );
}

export default function Produccion() {
  document.title = "La Danza de las Fieras | Producción";
  return (
    <div id="Produccion" className="Page">
      <ProduccionTitle2 />
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
      <h1>
        <ProduccionTitle />
      </h1>
    </div>
  );
}
