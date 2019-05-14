import React from "react";
import { ReactComponent as PrensaTitle } from "assets/img/layout/prensa.svg";
import Layout, { Section, PageTitle } from "components/layout/pageLayout";
import Fade from "react-reveal/Fade";
import styled from "styled-components/macro";
import Noticias from "./noticias";
import Descargable from "./descargable";

import englishPresskit from "assets/img/descargables/englishPresskit.png";
import englishPresskitwebp from "assets/img/descargables/englishPresskit.webp";
import spanishPresskit from "assets/img/descargables/spanishPresskit.png";
import spanishPresskitwebp from "assets/img/descargables/spanishPresskit.webp";
import poster from "assets/img/descargables/poster.png";
import posterwebp from "assets/img/descargables/poster.webp";
import stickers from "assets/img/descargables/stickers.png";
import stickerswebp from "assets/img/descargables/stickers.webp";

import premios from "assets/img/layout/premios.png";
import premioswebp from "assets/img/layout/premios.webp";
import selecciones from "assets/img/layout/selecciones.png";
import seleccioneswebp from "assets/img/layout/selecciones.webp";

const Descargables = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10%;
  padding: 0;
  min-height: 227px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Festivales = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 42%;
  margin-bottom: 10%;
  background-size: cover;
`;

const Premios = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 26%;
  margin-bottom: 10%;
  background-size: cover;
`;

export default function Prensa(props) {
  document.title = "La Danza de las Fieras | Prensa";
  const webp = props.webp;
  return (
    <Layout id="Prensa" mobile={props.mobile}>
      <PageTitle>
        <Fade cascade>
          <PrensaTitle />
        </Fade>
      </PageTitle>
      <Section
        columnStart="3"
        columnEnd="7"
        columnStartMedium="2"
        columnEndMedium="8"
      >
        <Fade bottom>
          <h2>Descargables</h2>
          <Descargables>
            <Descargable
              title="English Presskit"
              file="TheWildDance_Presskit.pdf"
              src={webp ? englishPresskitwebp : englishPresskit}
              mobile={props.mobile}
            />
            <Descargable
              title="Presskit"
              file="LaDanzaDeLasFieras_Presskit.pdf"
              src={webp ? spanishPresskitwebp : spanishPresskit}
              mobile={props.mobile}
            />
            <Descargable
              title="Poster"
              file="Poster.png"
              src={webp ? posterwebp : poster}
              mobile={props.mobile}
            />
            <Descargable
              title="Stickers"
              file="Stickers.zip"
              src={webp ? stickerswebp : stickers}
              mobile={props.mobile}
            />
          </Descargables>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <h2>Premios</h2>
          <Premios
            style={{
              backgroundImage: `url(${webp ? premioswebp : premios})`
            }}
          />
        </Fade>
      </Section>
      <Section columnStart="3" columnEnd="8" columnStartSmall="2">
        <Fade bottom>
          <h2>Festivales</h2>
          <Festivales
            style={{
              backgroundImage: `url(${webp ? seleccioneswebp : selecciones})`
            }}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <h2>Noticias</h2>
        </Fade>
      </Section>
      <Noticias />
    </Layout>
  );
}
