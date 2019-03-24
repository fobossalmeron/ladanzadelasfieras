import React from "react";
import { ReactComponent as Logo } from "./../assets/img/layout/homeLogo.svg";
import { ReactComponent as Laureles } from "./../assets/img/layout/homeLaureles.svg";

export default function Inicio() {
    document.title = "La Danza de las Fieras";
    return (
      <div id="Inicio" className="Page">
        <h1 style={{ fontSize: 0, opacity: 0 }}>La Danza de las Fieras</h1>
        <Logo className="logoHome"/>
        <Laureles className="laurelesHome"/>
        <p><b>LA DANZA DE LAS FIERAS</b> es un largometraje cuyo propósito es concientizar y generar reflexiones, debates y acciones para prevenir la trata de personas. Para cumplir su objetivo, la película está dividida en seis secciones, cada una de las cuales aborda un tema específico relacionado con la trata de personas. Las seis historias han sido construidas con arduo trabajo de investigación y desarrollo creativo, en los cuales se han involucrado siete directores de cine y más de veinte expertos en el tema: sociólogos, antropólogos, psicólogos, criminalistas y otros especialistas en derechos humanos y trata de personas.</p>
      </div>
    );
  } 