import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import Fade from "react-reveal/Fade";

import { Section, PageTitle } from "./pagesStylesheet";
import Footer from "./../components/footer";
import VideoPlayer from "./../components/videoPlayer";
import { ReactComponent as CortometrajesTitle } from "./../assets/img/layout/cortometrajes.svg";

import stillqcln from "./../assets/img/videos/qcln.jpg";
import stillFollowback from "./../assets/img/videos/followback.jpg";
import alayde from "./../assets/img/directores/alayde.jpg";
import stacy from "./../assets/img/directores/stacy.jpg";
import stillDesechables from "./../assets/img/videos/desechables.jpg";
import miguel from "./../assets/img/directores/miguel.jpg";

import { ReactComponent as IMDBIcon } from "./../assets/img/layout/imdb.svg";
import { ReactComponent as FacebookIcon } from "./../assets/img/layout/facebook.svg";
import { ReactComponent as MailIcon } from "./../assets/img/layout/mail.svg";

const InfoSection = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  position: relative;
  margin-bottom: 15%;
`;

const DirectorCard = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  img {
    border-radius: 100%;
    max-width: 80px;
    margin: -15px 0 15px 0px;
  }
`;

const Director = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-end: span 1;
  align-items: center;
  text-align: center;
`;

const InfoDirector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  svg {
    opacity: 0;
  }
  ${props =>
    props.hovered &&
    css`
      z-index: 2;
      svg {
        opacity: 1;
      }
    `}
`;

const IconContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 15px 0;
  svg {
    height: 22px;
    path {
      fill: white;
    }
  }
`;

const HoverDirector = styled.div`
  opacity: 1;
  background-color: black;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0%;
  grid-template-columns: repeat(6, 1fr);
  display: none;
  align-items: center;
  text-align: left;
  padding-right: 40px;
  p {
    grid-column: 3 / span 4;
    b {
      color: #c64028;
      font-weight: normal;
    }
  }
  :hover {
    display: grid;
    div {
      z-index: 2;
    }
  }
  ${props =>
    props.hovered &&
    css`
      display: grid;
    `}
`;

const Credits = styled.p`
  grid-column: 3 / span 4;
  columns: 2;
  column-gap: 40px;
  margin: 0;
`;

export default function Cortometrajes() {
  document.title = "La Danza de las Fieras | Cortometrajes";

  const [isHovered, setHovered] = useState(false);

  function handleShow(bool = !isHovered) {
    setHovered(bool);
  }

  return (
    <div id="Cortometrajes" className="Page">
      <PageTitle>
        <CortometrajesTitle />
      </PageTitle>
      <Section columnStart="2" columnEnd="6">
        <Fade cascade>
          <h2>Followback</h2>
          <p style={{ marginBottom: "5%" }}>
            <b>FOLLOWBACK</b> es un cortometraje con un formato innovador, pues
            toda la historia se cuenta a través de pantallas de celulares. El
            cortometraje se divide en 3 partes: la primera está contada desde el
            celular de Lorena, una chica de 16 años que viaja a la ciudad de
            México con la promesa de un trabajo de modelo; la segunda es
            observada en el celular de un tratante, y la tercera desde el
            teléfono de un joven consumidor de pornografía aparentemente
            amateur.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <VideoPlayer
          url={"https://player.vimeo.com/video/236672459"}
          still={stillFollowback}
        />
      </Section>
      <Section columnStart="2" columnEnd="8">
        <InfoSection>
          <DirectorCard>
            <Director onClick={() => handleShow()}>
              <InfoDirector hovered={isHovered}>
                <img src={stacy} alt="Stacy Perskie" />
                <b>CO-DIRECTOR:</b> Stacy Perskie
                <IconContainer>
                  <IMDBIcon />
                  <MailIcon />
                </IconContainer>
              </InfoDirector>
              <HoverDirector hovered={isHovered}>
                <p>
                  Co-Fundador de la casa productora <b>Redrum</b>, con la cual
                  ha producido películas como Get The Gringo (2012) y
                  co-producido, entre muchas otras, películas como 007 Spectre
                  (2015), Elysium (2013) y la serie Mozart in the Jungle (2014).
                </p>
              </HoverDirector>
            </Director>
            <Director>
              <img src={alayde} alt="Alayde Castro" />
              <b>CO-DIRECTORA:</b>Alayde Castro
            </Director>
          </DirectorCard>
          <Credits>
            <b>GÉNERO:</b> Ficción
            <br />
            <b>DURACIÓN:</b> 15:00 minutos
            <br />
            <b>GUIÓN:</b>Gina Herrera, Alayde Castro Hernández
            <br />
            <b>ANIMACIÓN:</b> Rodrigo Salmerón, Marco Antonio del Toro
            <br />
            <b>CAST:</b> Paulina Matos, Arianna Nicole Sucar, Lorena del
            Castillo, Julio Hernández, Luis Genaro Peñalosa, Violeta Robles
            Vivas, Sayra Rendón Ibarra, Sebastián Mauthe
            <br />
            <b>MÚSICA:</b>Dapuntobeat
          </Credits>
        </InfoSection>
      </Section>
      <Section columnStart="2" columnEnd="6">
        <Fade cascade>
          <h2>Desechables</h2>
          <p style={{ marginBottom: "5%" }}>
            <b>DESECHABLES</b> sigue la historia de Martín, un joven de 15 años
            que es engañado y amenazado por un cartel de narcotraficantes que
            quiere convertirlo en sicario. Inesperadamente Martín se reencuentra
            con alguien que interviene para ayudarle, desatando la furia de los
            delincuentes y una serie de repercusiones mortales.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <VideoPlayer
          url={"https://player.vimeo.com/video/236672175"}
          still={stillDesechables}
        />
      </Section>
      <Section columnStart="2" columnEnd="8">
        <InfoSection>
          <DirectorCard>
            <Director>
              <img src={miguel} alt="Stacy Perskie" />
              <b>DIRECTOR:</b> Miguel Angel Fernández
            </Director>
          </DirectorCard>
          <Credits>
            <b>GÉNERO:</b> Ficción
            <br />
            <b>DURACIÓN:</b> 19:53 min
            <br />
            <b>GUIÓN:</b> Miguel Ángel Fernández
            <br />
            <b>
              DIRECTOR DE
              <br />
              FOTOGRAFÍA:
            </b>{" "}
            Alejandro Chávez
            <br />
            <b>CAST:</b> Rodolfo Calderón, Ángel Noe Alvarado, Francisco Pita,
            Ángel Copado, Eduardo Rodríguez
            <br />
            <b>MÚSICA:</b> Ruben Cruz Martínez
          </Credits>
        </InfoSection>
      </Section>
      <Footer />
    </div>
  );
}
