import React from "react";
import Fade from "react-reveal/Fade";
import { Section, Intro } from "./pagesStylesheet";
import Footer from "./../components/footer";
import VideoPlayer from "./../components/videoPlayer";
import { ReactComponent as Logo } from "./../assets/img/layout/homeLogo.svg";
import { ReactComponent as Laureles } from "./../assets/img/layout/homeLaureles.svg";
import trailerstill from "./../assets/img/videos/trailer.png";

export default function Inicio() {
  document.title = "La Danza de las Fieras";
  return (
    <div id="Inicio" className="Page">
      <h1 style={{ fontSize: 0, opacity: 0 }}>La Danza de las Fieras</h1>
      <Section columnStart="3" columnEnd="7">
        <Intro>
          <Logo className="logoHome" />
          <Laureles className="laurelesHome" />
        </Intro>
      </Section>
      <Section columnStart="3" columnEnd="7">
        <Fade bottom>
          <p style={{ marginTop: "10%" }}>
            <b>LA DANZA DE LAS FIERAS</b> es un largometraje cuyo propósito es
            concientizar y generar reflexiones, debates y acciones para prevenir
            la trata de personas. Para cumplir su objetivo, la película está
            dividida en seis secciones, cada una de las cuales aborda un tema
            específico relacionado con la trata de personas. Las seis historias
            han sido construidas con arduo trabajo de investigación y desarrollo
            creativo, en los cuales se han involucrado siete directores de cine
            y más de veinte expertos en el tema: sociólogos, antropólogos,
            psicólogos, criminalistas y otros especialistas en derechos humanos
            y trata de personas.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <VideoPlayer
            url={"https://player.vimeo.com/video/226767311"}
            still={trailerstill}
          />
        </Fade>
      </Section>
      <Section columnStart="4" columnEnd="6">
        <Fade bottom>
          <p className="tecnical">
            <b>GÉNERO:</b> Mixto, ficción y documental
            <br />
            <b>DURACIÓN:</b> 1 hora 52 minutos
          </p>
        </Fade>
      </Section>
      <Section columnStart="3" columnEnd="6">
        <Fade bottom>
          <h2>Sinópsis</h2>
          <p>
            El internet como facilitador de víctimas para la esclavitud sexual,
            niños sicarios, pequeños jornaleros en condiciones infrahumanas,
            albergues disfuncionales, víctimas colaterales y familias
            destruidas, son los temas que aborda <b>LA DANZA DE LAS FIERAS</b>.
          </p>
        </Fade>
      </Section>
      <Section columnStart="4" columnEnd="8">
        <Fade bottom>
          <h2>La trata de personas</h2>
          <p>
            La trata de personas es un fenómeno global. En el 2017 existen más
            esclavos que en cualquier otro momento de la historia de la
            humanidad. Según un reporte de la Casa Blanca, a nivel mundial hay
            más de 27 millones de personas sufriendo condiciones similares a la
            esclavitud. La esclavitud o el tráfico de personas es definido en la
            actualidad como:
            <br />
            <br />
            1. Tráfico sexual en el cual se comercia el acto sexual por medio de
            la fuerza, fraude o coerción, o en el que la persona inducida a
            cometer el acto no ha cumplido 18 años de edad.
            <br />
            <br />
            2. El reclutamiento, almacenamiento, transportación,
            aprovisionamiento u obtención de una persona para realizar trabajos
            o servicios por medio del uso de la fuerza, fraude o coerción con el
            propósito de subyugación a servitud, peonaje o esclavitud.
            <br />
            <br />
            En México, la trata de personas es el segundo delito de más
            importancia económica y se estima que al año al menos 20,000 niñas
            sufren explotación sexual.
          </p>
        </Fade>
      </Section>
      <Footer />
    </div>
  );
}
