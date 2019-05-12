import React from "react";
import { ReactComponent as PrensaTitle } from "assets/img/layout/prensa.svg";
import Layout, {
  Section,
  PageTitle,
  Heading3,
  whiteColor,
  redColor,
  blackColor
} from "components/layout/pageLayout";
import Fade from "react-reveal/Fade";
import styled, { css } from "styled-components/macro";
import Loadable from "react-loadable";
import Loader from "components/shared/loaders/squareLoader";
import news from "./newsdb";

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

const Imagen = Loadable({
  loader: () => import("./imagen"),
  loading: Loader
});

const Descargable = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  max-width: 150px;
  a {
    color: ${whiteColor};
    text-decoration: none;
    width: 100%;
  }
  :hover {
    div {
      background-size: 110%;
    }
  }
  img {
    margin-bottom: 18px;
    max-width: 100%;
  }
  p {
    text-transform: uppercase;
    text-align: center;
    transition: all 0.4s ease;
  }
  ${props =>
    props.mobile &&
    css`
      :hover {
        div {
          background-size: 100%;
        }
      }
    `}
`;

const Descargables = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10%;
  padding: 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Noticia = styled.div`
  color: ${whiteColor};
  :hover {
    h3 {
      color: ${redColor};
    }
  }
`;

const TitleQuote = styled.a`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  text-decoration: none;
  color: ${whiteColor};
  margin-top: 20px;
  margin-bottom: 10%;
  h4 {
    grid-column: 1 / span 5;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-decoration: none;
    margin-top: 0;
  }
  p {
    grid-column: 1 / span 4;
    quotes: "“" "”" "‘" "’";
    position: relative;
    text-decoration: none;
    @media (max-width: 900px) {
      grid-column: 1 / span 5;
    }
    b {
      text-transform: uppercase;
    }
    :before,
    :after {
    }
    :before {
      font-size: 2rem;
      font-weight: bold;
      content: open-quote;
      position: absolute;
      left: -18px;
      top: -4px;
    }
    :after {
      font-size: 2rem;
      font-weight: bold;
      content: close-quote;
      right: -16px;
      bottom: -4px;
      position: relative;
      line-height: 0;
      left: 5px;
      top: 14px;
    }
  }
`;

const Publisher = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: row-gap;
  a {
    display: flex;
    text-decoration: none;
  }
  h3 {
    margin-bottom: 0;
    margin-top: 0;
    transition: 0.3s ease all;
  }
  span {
    color: white;
    background-color: ${blackColor};
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    align-items: flex-end;
    line-height: 1;
    padding: 2px 10px 7px 10px;
  }
`;

export default function Prensa(props) {
  document.title = "La Danza de las Fieras | Prensa";

  function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
  }

  const noticias = news.map((article, index) => {
    function set(x) {
      return { __html: x };
    }
    return (
      <Section
        columnStart={isEven(index) ? "2" : "3"}
        columnEnd={isEven(index) ? "7" : "8"}
        columnEndSmall={"8"}
        columnStartSmall={"2"}
        key={index + "not"}
      >
        <Fade bottom>
          <Noticia>
            <Publisher>
              <a target="_blank" rel="noopener noreferrer" href={article.link}>
                <Heading3>{article.publisher}</Heading3>
                <span>{article.date}</span>
              </a>
            </Publisher>
            <TitleQuote
              target="_blank"
              rel="noopener noreferrer"
              href={article.link}
            >
              <h4>{article.title}</h4>
              <p
                dangerouslySetInnerHTML={set(article.quote)}
                style={{ marginBottom: "0" }}
              />
            </TitleQuote>
          </Noticia>
        </Fade>
      </Section>
    );
  });

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
            <Descargable mobile={props.mobile}>
              <a
                target={"_blank"}
                href={
                  process.env.PUBLIC_URL +
                  "/descargables/TheWildDance_Presskit.pdf"
                }
              >
                <Imagen
                  src={props.webp ? englishPresskitwebp : englishPresskit}
                  alt="English Presskit"
                />
                <p>English Presskit</p>
              </a>
            </Descargable>
            <Descargable mobile={props.mobile}>
              <a
                target={"_blank"}
                href={
                  process.env.PUBLIC_URL +
                  "/descargables/LaDanzaDeLasFieras_Presskit.pdf"
                }
              >
                <Imagen
                  src={props.webp ? spanishPresskitwebp : spanishPresskit}
                  alt="Presskit en Español"
                />
                <p>Presskit</p>
              </a>
            </Descargable>
            <Descargable mobile={props.mobile}>
              <a
                target={"_blank"}
                href={process.env.PUBLIC_URL + "/descargables/Poster.png"}
              >
                <Imagen src={props.webp ? posterwebp : poster} alt="Poster" />
                <p>Poster</p>
              </a>
            </Descargable>
            <Descargable mobile={props.mobile}>
              <a href={process.env.PUBLIC_URL + "/descargables/Stickers.zip"}>
                <Imagen
                  src={props.webp ? stickerswebp : stickers}
                  alt="Stickers"
                />
                <p>Stickers</p>
              </a>
            </Descargable>
          </Descargables>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <h2>Premios</h2>
        </Fade>
        <Fade delay={300}>
          <img
            src={props.webp ? premioswebp : premios}
            alt="premios"
            style={{ marginBottom: "10%" }}
          />
        </Fade>
      </Section>
      <Section columnStart="3" columnEnd="8" columnStartSmall="2">
        <Fade bottom>
          <h2>Festivales</h2>
        </Fade>
        <Fade delay={300}>
          <img
            src={props.webp ? seleccioneswebp : selecciones}
            alt="selecciones oficiales"
            style={{ marginBottom: "10%" }}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <h2>Noticias</h2>
        </Fade>
      </Section>
      {noticias}
    </Layout>
  );
}
