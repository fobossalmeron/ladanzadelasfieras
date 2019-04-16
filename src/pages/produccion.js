import React from "react";
import { Section, PageTitle } from "./pagesStylesheet";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Footer from "./../components/footer";

import { ReactComponent as ProduccionTitle } from "./../assets/img/layout/produccion.svg";

import silvia from "./../assets/img/productores/silvia.jpg";
import martha from "./../assets/img/productores/martha.jpg";
import german from "./../assets/img/productores/german.jpg";
import bernardo from "./../assets/img/productores/bernardo.jpg";
import { ReactComponent as ReflektoIcon } from "./../assets/img/casas/reflekto.svg";
import { ReactComponent as AntitesisIcon } from "./../assets/img/casas/antitesis.svg";
import { ReactComponent as BalaIcon } from "./../assets/img/casas/bala.svg";
import { ReactComponent as EducadoresIcon } from "./../assets/img/casas/educadores.svg";


const Productores = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 10%;
`;

const Productor = styled.li`
  display: flex;
  flex-direction: column;
  img {
    border-radius: 100%;
    max-width: 80px;
    margin-bottom: 18px;
  }
  b {
    width: 100%;
    text-transform: uppercase;
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
`;

const Educadores = styled(Productora)`
  grid-template-columns: repeat(5, 1fr);
  svg {
    grid-column: 1 / span 2;
  }
  p {
    grid-column: 3 / span 3;
  }
`;

export default function Produccion() {
  document.title = "La Danza de las Fieras | Producción";
  return (
    <div id="Produccion" className="Page">
      <PageTitle>
        <ProduccionTitle />
      </PageTitle>
      <Section columnStart="3" columnEnd="7">
        <h2>Productores</h2>
        <Fade cascade>
          <Productores>
            <Productor>
              <img src={silvia} alt="Silvia Garza" />
              <b>Productora Ejecutiva</b>Silvia Garza
            </Productor>
            <Productor>
              <img src={martha} alt="Martha Hernández" />
              <b>Productora Ejecutiva</b>Martha Hernández
            </Productor>
            <Productor>
              <img src={german} alt="German Castilla" />
              <b>Productora</b>German Castilla
            </Productor>
            <Productor>
              <img src={bernardo} alt="Bernardo de Urquidi" />
              <b>Productor Asociado</b> Bernardo de Urquidi
            </Productor>
          </Productores>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6">
        <h2 style={{ marginBottom: "40px" }}>Casas Productoras</h2>
        <Fade bottom cascade>
          <Productora>
            <ReflektoIcon />
            <p>
              <b>REFLEKTO KREATIVO</b> es una generadora de productos
              culturales. Somos una empresa de jóvenes, lo que ofrece una gran
              flexibilidad de cara a la vertiginosa aparición de novedosas
              plataformas, aplicaciones, formatos y opciones educativas y de
              entretenimiento. Aglutinamos varias empresas que llevan a cabo
              proyectos de investigación, gestión cultural, producción
              audiovisual, producción de espectáculos y creación de conceptos
              didácticos, lo cual nos permite elaborar propuestas llenas de
              creatividad, pero sólidamente sustentadas, acordes a las
              características y necesidades de cada proyecto.
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section columnStart="4" columnEnd="8">
        <Fade bottom cascade>
          <Productora>
            <AntitesisIcon />

            <p>
              <b>ANTÍTESIS</b> nace de los deseos de un grupo de jóvenes
              cineastas que buscan generar proyectos relevantes. A través de la
              confianza depositada en jóvenes artistas para el desarrollo de los
              proyectos, escuchando las necesidades de los nuevos creativos para
              dar resultados frescos, innovadores y actualizados.
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6">
        <Fade bottom cascade>
          <Productora>
            <BalaIcon />

            <p>
              <b>BALA FILMS</b> es una familia dedicada a la realización de
              obras cinematográficas y proyectos audiovisuales. Nuestras obras
              han sido seleccionadas en los siguientes festivales nacionales e
              internacionales: FICM (Festival Internacional de Cine de Morelia),
              FICG (Festival Internacional de Cine de Guadalajara), FICUNAM
              (Festival Internacional de Cine UNAM), GIFF (Guanajuato
              International Film Festival), FIC MONTERREY (Festival
              Internacional de Cine de Monterrey), Short Shorts Film Festival,
              Festival de Cine Iquique Chile, New York Independent Film
              Festival, 12 Months Film Festival Rumania, Lakino Film Festival
              Berlin, FESAALP (Festival de Cine Latinoamericano de la Plata),
              FICA (Festival Internacional de Cine de Acapulco), FICAGS
              (Festival Internacional de Cine de Aguascalientes)
            </p>
          </Productora>
        </Fade>
      </Section>
      <Section columnStart="3" columnEnd="8">
        <Fade bottom cascade>
          <Educadores>
            <EducadoresIcon />

            <p>
              <b>EDUCADORES SIN FRONTERAS</b> es una organización no
              gubernamental, autónoma, sin fines de lucro, que desarrolla y
              fomenta programas académicos y culturales, así como publicaciones
              e investigaciones con el objetivo de mejorar la educación en
              México. Las temáticas de nuestros programas son: prevención de la
              violencia, ética, cívica, lectura, cultura de la legalidad,
              equidad de género, participación social, didáctica, psicología,
              gestión de conflictos, mediación, inteligencia emocional y
              justicia.
            </p>
          </Educadores>
        </Fade>
      </Section>
      <Footer />
    </div>
  );
}
