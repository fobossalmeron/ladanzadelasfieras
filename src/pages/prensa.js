import React from "react";
import { ReactComponent as PrensaTitle } from "./../assets/img/layout/prensa.svg";
import { Section, PageTitle } from "./pagesStylesheet";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Footer from "./../components/footer";

import englishPresskit from "./../assets/img/descargables/englishPresskit.png";
import spanishPresskit from "./../assets/img/descargables/spanishPresskit.png";
import poster from "./../assets/img/descargables/poster.png";
import stickers from "./../assets/img/descargables/stickers.png";

import { ReactComponent as Premios } from "./../assets/img/layout/premios.svg";
import { ReactComponent as Selecciones } from "./../assets/img/layout/selecciones.svg";


const Descargables = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10%;
  padding: 0;
`;

const Descargable = styled.li`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 18px;
    max-width: 100%;
  }
  p {
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function Prensa() {
  document.title = "La Danza de las Fieras | Prensa";
  return (
    <div id="Prensa" className="Page">
      <PageTitle>
        <PrensaTitle />
      </PageTitle>
      <Section columnStart="3" columnEnd="7">
        <h2>Descargables</h2>
        <Fade cascade>
          <Descargables>
            <Descargable>
              <img src={englishPresskit} alt="English Presskit" />
              <p>
                Download
                <br />
                English Presskit
              </p>
            </Descargable>
            <Descargable>
              <img src={spanishPresskit} alt="Presskit en Español" />
              <p>
                Descargar
                <br />
                Presskit
              </p>
            </Descargable>
            <Descargable>
              <img src={poster} alt="Poster" />
              <p>
                Descargar
                <br />
                Poster
              </p>
            </Descargable>
            <Descargable>
              <img src={stickers} alt="Stickers" />
              <p>
                Descargar
                <br />
                Stickers
              </p>
            </Descargable>
          </Descargables>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <h2>Premios</h2>
        <Premios style={{marginBottom:"10%"}}/>
      </Section>
      <Section columnStart="3" columnEnd="8">
        <h2>Festivales</h2>
        <Selecciones />
      </Section>
      <Footer/>
    </div>
  );
}
