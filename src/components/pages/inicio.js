import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components/macro";
import Layout, { Section, whiteColor } from "components/layout/pageLayout";
import TrailerPlayer from "components/shared/trailerPlayer";
import { ReactComponent as LogoSvg } from "assets/img/layout/homeLogo.svg";
import { ReactComponent as LaurelesSvg } from "assets/img/layout/homeLaureles.svg";
import trailerstill from "assets/img/videos/trailer.jpg";

export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  div {
    width: 100%;
  }
  svg {
    width: 100%;
  }
`;

const Logo = styled(LogoSvg)`
  width: 100%;
  max-width: 620px;
  margin-bottom: 5%;
`;

const Laureles = styled(LaurelesSvg)`
  max-width: 620px;
  margin-bottom: 10%;
`;

const Technical = styled.p`
  border: 1px solid ${whiteColor};
  padding: 6% 5%;
`;

export default function Inicio(props) {
  document.title = "La Danza de las Fieras";
  var delayTime = props.hasLoaded ? 0 : 1500;
  return (
    <Layout id="Inicio">
      <h1 style={{ fontSize: 0, opacity: 0 }}>La Danza de las Fieras</h1>
      <Section
        columnStart="3"
        columnEnd="7"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <Intro>
          <Fade bottom delay={delayTime}>
            <Logo />
            <Laureles />
          </Fade>
        </Intro>
      </Section>
      <Section
        columnStart="3"
        columnEnd="7"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <Fade bottom>
          <p style={{ marginTop: "10%" }}>
            <b>LA DANZA DE LAS FIERAS</b> es un largometraje que concientiza y
            genera reflexiones, debates y acciones para prevenir la trata de
            personas. Está dividido en seis historias y cada una aborda un tema
            relacionado a dicha cuestión. Los relatos fueron construidos gracias
            a un arduo trabajo de investigación y desarrollo creativo, en los
            cuales se involucraron siete directores de cine y más de 20 expertos
            en el tema; incluyendo sociólogos, antropólogos, psicólogos,
            criminalistas y más especialistas en derechos humanos y trata de
            personas.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/226767311"}
            still={trailerstill}
            ratio={"56.3%"}
          />
        </Fade>
      </Section>
      <Section
        columnStart="4"
        columnEnd="6"
        columnStartSmall="3"
        columnEndSmall="7"
      >
        <Fade bottom>
          <Technical style={{ marginTop: "20%" }}>
            <b>GÉNERO:</b> Mixto, ficción y documental
            <br />
            <b>DURACIÓN:</b> 1 hora 52 minutos
          </Technical>
        </Fade>
      </Section>
      <Section
        columnStart="3"
        columnEnd="6"
        columnStartMedium="2"
        columnEndMedium="7"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <Fade bottom>
          <h2>Sinópsis</h2>
          <p>
            El internet como facilitador de víctimas para la esclavitud sexual,
            niños sicarios, jornaleros infantes en condiciones infrahumanas,
            albergues disfuncionales, víctimas colaterales y familias
            destruídas; estos son los temas que aborda{" "}
            <b>LA DANZA DE LAS FIERAS</b> alrededor de la trata de personas.
          </p>
        </Fade>
      </Section>
      <Section
        columnStart="4"
        columnEnd="8"
        columnStartMedium="3"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <Fade bottom>
          <h2>La trata de personas</h2>
          <p style={{marginBottom: "20px"}}>
            Fenómeno global que reporta a más de 27 millones de personas
            sufriendo condiciones similares a la esclavitud (Casa Blanca, 2017).
            La trata o tráfico de personas puede entenderse como:
          </p>
          <p style={{marginBottom: "20px"}}>
            1. Tráfico en el cual se comercia el acto sexual por medio de la
            fuerza, fraude o coerción, o en el que la persona inducida a cometer
            el acto no ha cumplido 18 años de edad.
          </p>
          <p style={{marginBottom: "20px"}}>
            2. El reclutamiento, almacenamiento, transportación,
            aprovisionamiento u obtención de una persona para realizar trabajos
            o servicios por medio del uso de la fuerza, fraude o coerción con el
            propósito de subyugación a servitud, peonaje o esclavitud.
          </p>
          <p>
            En México, la trata de personas es el segundo delito de más
            importancia económica y se estima que, al año, al menos 20,000 niñas
            sufren explotación sexual.
          </p>
        </Fade>
      </Section>
    </Layout>
  );
}
