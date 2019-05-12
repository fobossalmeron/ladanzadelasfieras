import React from "react";
import styled from "styled-components/macro";
import Fade from "react-reveal/Fade";
import Layout, { Section, PageTitle } from "components/layout/pageLayout";
import Productor, { ProducerContainer } from "./productor";

import { ReactComponent as ProduccionTitle } from "assets/img/layout/produccion.svg";

import silvia from "assets/img/productores/silvia.jpg";
import martha from "assets/img/productores/martha.jpg";
import german from "assets/img/productores/german.jpg";
import bernardo from "assets/img/productores/bernardo.jpg";
import silviawebp from "assets/img/productores/silvia.webp";
import marthawebp from "assets/img/productores/martha.webp";
import germanwebp from "assets/img/productores/german.webp";
import bernardowebp from "assets/img/productores/bernardo.webp";
import { ReactComponent as ReflektoIcon } from "assets/img/casas/reflekto.svg";
import { ReactComponent as AntitesisIcon } from "assets/img/casas/antitesis.svg";
import { ReactComponent as BalaIcon } from "assets/img/casas/bala.svg";
import { ReactComponent as EducadoresIcon } from "assets/img/casas/educadores.svg";

const Productores = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10%;
  padding: 0;
  max-width: 620px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 290px;
    ${ProducerContainer} {
      height: 200px;
    }
  }
`;

const Productora = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  svg {
    grid-column: 1 / span 1;
    max-height: 120px;
  }
  p {
    grid-column: 2 / span 3;
  }
  @media (max-width: 900px) {
    svg {
      grid-column: 1 / span 4;
    }
    p {
      grid-column: 1 / span 4;
    }
  }
`;

const Educadores = styled(Productora)`
  grid-template-columns: repeat(5, 1fr);
  svg {
    grid-column: 1 / span 2;
  }
  p {
    grid-column: 3 / span 3;
  }
  @media (max-width: 900px) {
    svg {
      grid-column: 1 / span 5;
    }
    p {
      grid-column: 1 / span 5;
    }
  }
`;

export default function Produccion(props) {
  document.title = "La Danza de las Fieras | Producción";
  const webp = props.webp;
  return (
    <Layout id="Produccion" mobile={props.mobile}>
      <PageTitle>
        <Fade cascade>
          <ProduccionTitle />
        </Fade>
      </PageTitle>
      <Section
        columnStart="3"
        columnEnd="7"
        columnStartMedium="2"
        columnEndMedium="8"
      >
        <Fade bottom>
          <h2>Productores</h2>
          <Productores>
            <Productor
              img={webp ? silviawebp : silvia}
              title={"Productora Ejecutiva"}
              name={"Silvia Garza"}
              web={"http://www.educadoressinfronteras.mx/"}
              mail={"silvia@educadoresainfronteras.mx"}
              mobile={props.mobile}
            />
            <Productor
              img={webp ? marthawebp : martha}
              title={"Productora Ejecutiva"}
              name={"Martha Hernández"}
              linked={
                "https://www.linkedin.com/in/martha-hern%C3%A1ndez-aguilar-58b32735/"
              }
              web={"http://ojosdepapelvolando.com/"}
              mail={"marthahernandez@ojosdepapelvolando.com"}
              mobile={props.mobile}
            />
            <Productor
              img={webp ? germanwebp : german}
              title={"Productor"}
              name={"German Castilla"}
              ig={"https://www.instagram.com/germancastillag/"}
              imdb={"http://m.imdb.com/name/nm5720839/"}
              mail={"castilla.german@gmail.com"}
              mobile={props.mobile}
            />
            <Productor
              img={webp ? bernardowebp : bernardo}
              title={"Productor Asociado"}
              name={"Bernardo de Urquidi"}
              linked={
                "https://www.linkedin.com/in/bernardo-de-urquidi-6b3b8a15/"
              }
              imdb={"http://www.imdb.com/name/nm5153681/"}
              mobile={props.mobile}
            />
          </Productores>
        </Fade>
      </Section>
      <Section
        columnStart="2"
        columnEnd="6"
        columnEndMedium="7"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <h2 style={{ marginBottom: "40px" }}>Casas Productoras</h2>
        <Fade bottom cascade>
          <Productora>
            <ReflektoIcon />
            <p>
              <b>REFLEKTO KREATIVO</b> es una generadora de productos
              culturales. Una empresa de jóvenes que ofrece gran flexibilidad a
              la vertiginosa aparición de novedosas plataformas, aplicaciones,
              formatos y opciones educativas y de entretenimiento. El proyecto
              aglutina un grupo de empresas que desarrollan proyectos de
              investigación, gestión cultural, producción audiovisual,
              producción de espectáculos y creación de conceptos didácticos; lo
              cual les permite elaborar propuestas sólidas, sustentadas y llenas
              de creatividad acorde a las características y necesidades de cada
              proyecto.
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section
        columnStart="4"
        columnEnd="8"
        columnStartMedium="3"
        columnEndMedium="8"
        columnStartSmall="2"
      >
        <Fade bottom cascade>
          <Productora>
            <AntitesisIcon />
            <p>
              <b>ANTÍTESIS</b> es una productora que nace del deseo de un grupo
              de jóvenes cineastas que busca generar proyectos relevantes. A
              través de la confianza depositada en artistas para el desarrollo
              de los proyectos, el colectivo escucha las necesidades de las
              nuevas mentes creativas para dar resultados frescos, innovadores y
              actualizados.
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section
        columnStart="2"
        columnEnd="6"
        columnEndMedium="7"
        columnStartSmall="2"
        columnEndSmall="8"
      >
        <Fade bottom cascade>
          <Productora>
            <BalaIcon />
            <p>
              <b>BALA FILMS</b> es una familia dedicada a la realización de
              obras cinematográficas y proyectos audiovisuales. Su trabajo ha
              sido seleccionado en festivales nacionales e internacionales como
              el FICM (Festival Internacional de Cine de Morelia), FICG
              (Festival Internacional de Cine de Guadalajara), FICUNAM (Festival
              Internacional de Cine UNAM), GIFF (Guanajuato International Film
              Festival), FIC MONTERREY (Festival Internacional de Cine de
              Monterrey), Short Shorts Film Festival, New York Independent Film
              Festival, entre otros.
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section
        columnStart="3"
        columnEnd="8"
        columnStartMedium="2"
        columnEndMedium="8"
        columnStartSmall="2"
      >
        <Fade bottom cascade>
          <Educadores>
            <EducadoresIcon />
            <p>
              <b>EDUCADORES SIN FRONTERAS</b> es una organización no
              gubernamental, autónoma y sin fines de lucro que desarrolla y
              fomenta programas académicos y culturales, así como publicaciones
              e investigaciones con el objetivo de mejorar la educación en
              México. Las temáticas de los programas son: prevención de la
              violencia, ética, cívica, lectura, cultura de la legalidad,
              equidad de género, participación social, didáctica, psicología,
              gestión de conflictos, mediación, inteligencia emocional y
              justicia.
            </p>
          </Educadores>
        </Fade>
      </Section>
    </Layout>
  );
}
