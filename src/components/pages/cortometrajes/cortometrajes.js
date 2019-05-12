import React from "react";
import styled, { css } from "styled-components/macro";
import Fade from "react-reveal/Fade";

import Layout, { Section, PageTitle } from "components/layout/pageLayout";
import TrailerPlayer from "components/shared/trailerPlayer";
import DirectorCard from "./directorCard";
import { ReactComponent as CortometrajesTitle } from "assets/img/layout/cortometrajes.svg";

import stillFollowback from "assets/img/videos/followback.jpg";
import stillFollowbackwebp from "assets/img/videos/followback.webp";
import alayde from "assets/img/directores/alayde.jpg";
import alaydewebp from "assets/img/directores/alayde.webp";
import stacy from "assets/img/directores/stacy.jpg";
import stacywebp from "assets/img/directores/stacy.webp";

import stillDesechables from "assets/img/videos/desechables.jpg";
import stillDesechableswebp from "assets/img/videos/desechables.webp";
import miguel from "assets/img/directores/miguel.jpg";
import miguelwebp from "assets/img/directores/miguel.webp";

import stillVoces from "assets/img/videos/vocesblancas.jpg";
import stillVoceswebp from "assets/img/videos/vocesblancas.webp";
import ana from "assets/img/directores/ana.jpg";
import anawebp from "assets/img/directores/ana.webp";

import stillTQD from "assets/img/videos/tqd.jpg";
import stillTQDwebp from "assets/img/videos/tqd.webp";
import patterson from "assets/img/directores/patterson.jpg";
import pattersonwebp from "assets/img/directores/patterson.webp";

import stillSBLP from "assets/img/videos/sblp.jpg";
import stillSBLPwebp from "assets/img/videos/sblp.webp";
import angel from "assets/img/directores/angel.jpg";
import angelwebp from "assets/img/directores/angel.webp";

import stillQCLN from "assets/img/videos/qcln.jpg";
import stillQCLNwebp from "assets/img/videos/qcln.webp";
import gina from "assets/img/directores/gina.jpg";
import ginawebp from "assets/img/directores/gina.webp";

const InfoSection = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 40px;
  position: relative;
  margin-bottom: 15%;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Directors = styled.div`
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 1100px) {
    grid-gap: 30px;
  }
  @media (max-width: 1000px) {
    grid-gap: 20px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-column: 1 / span 6;
  }
`;

const Credits = styled.p`
  grid-column: 3 / span 4;
  columns: 2;
  column-fill: auto;
  min-height: 110px;
  height: 100px;
  column-gap: 40px;
  margin: 0;
  p {
    margin: 0 !important;
  }
  @media (max-width: 1150px) {
    height: 125px;
  }
  @media (max-width: 930px) {
    column-gap: 30px;
  }
  @media (max-width: 900px) {
    grid-column: 1 / span 6;
    min-height: 110px;
    column-fill: auto;
    width: 100%;
    margin-top: -30px;
  }
  @media (max-width: 800px) {
    position: absolute;
    margin-top: 85px;
    ${props =>
      props.double &&
      css`
        margin-top: 185px;
      `}
  }
  @media (max-width: 60px) {
    min-height: 140;
  }
  @media (max-width: 510px) {
    columns: 1;
    height: auto;
  }
  ${props =>
    props.followback &&
    css`
      height: 125px;
      @media (max-width: 1150px) {
        height: 150px;
      }
      @media (max-width: 900px) {
        height: auto;
      }
    `}
`;

const Encapsulator = styled.span`
  display: block;
`;

export default function Cortometrajes(props) {
  document.title = "La Danza de las Fieras | Cortometrajes";
  const webp = props.webp;
  return (
    <Layout id="Cortometrajes" mobile={props.mobile}>
      <PageTitle>
        <Fade>
          <CortometrajesTitle />
        </Fade>
      </PageTitle>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>Followback</h2>
          <p style={{ marginBottom: "5%" }}>
            Cortometraje con un formato innovador que cuenta su historia a
            través de pantallas de celulares. El corto se divide en tres partes:
            la primera es contada desde el celular de Lorena, una chica de 16
            años que viaja a Ciudad de México con la promesa de un trabajo de
            modelo; la segunda es observada en el celular de un tratante y la
            tercera desde el teléfono de un joven consumidor de pornografía
            aparentemente amateur.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://vimeo.com/236672379"}
            still={webp ? stillFollowbackwebp : stillFollowback}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Alayde Castro"}
                title={"CODIRECTORA"}
                img={webp ? alaydewebp : alayde}
                imdb={"https://www.imdb.com/name/nm7429166/"}
                mail={"alayde.castro@gmail.com"}
                bio={`Socia fundadora y Directora Creativa de la casa productora 
                <b>Antítesis</b> que ha trabajado para clientes como la UNAM, 
                el STC Metro y la Secretaría de Turismo del Estado de Puebla.`}
                double={false}
                mobile={props.mobile}
              />
              <DirectorCard
                double={true}
                name={"Stacy Perskie"}
                title={"CODIRECTOR"}
                img={webp ? stacywebp : stacy}
                imdb={"https://www.imdb.com/name/nm1142384/"}
                mail={"stacy@redrum.com.mx"}
                bio={`Co-Fundador de la casa productora <a href="http://redrum.com.mx/" 
              target="_blank">Redrum</a>, con la cual ha producido películas como 
              <em>Get The Gringo</em> (2012) y co-producido, entre muchas otras, 
              películas como <em>007 Spectre</em> (2015), <em>Elysium</em> (2013) y 
              la serie <em>Mozart in the Jungle</em> (2014).`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits followback style={{ marginBottom: "0" }} double>
              <b>GÉNERO:</b> Ficción
              <br />
              <b>DURACIÓN:</b> 15:00 minutos
              <br />
              <b>GUIÓN:</b> Gina Herrera, Alayde Castro Hernández
              <br />
              <b>ANIMACIÓN:</b> Rodrigo Salmerón, Marco Antonio del Toro
              <br />
              <b>CAST:</b> Paulina Matos, Ariana Nicole Sucar, Lorena del
              Castillo, Julio Hernández, Luis Genaro Peñalosa, Violeta Robles
              Vivas, Sayra Rendón Ibarra, Sebastián Mauthe
              <br />
              <b>MÚSICA:</b> Dapuntobeat
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>Desechables</h2>
          <p style={{ marginBottom: "5%" }}>
            La historia de Martín; un joven de 15 años que es engañado y
            amenazado por un cartel de narcotraficantes que pretende convertirlo
            en sicario. Inesperadamente, Martín se reencuentra con alguien que,
            interviniendo en su ayuda, desata la furia de los delincuentes y una
            serie de repercusiones mortales.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/236672175"}
            still={webp ? stillDesechableswebp : stillDesechables}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Miguel Ángel Fernández"}
                title={"DIRECTOR"}
                img={webp ? miguelwebp : miguel}
                imdb={"https://www.imdb.com/name/nm5699678/"}
                mail={"fernandezgmiguel@gmail.com"}
                bio={`Guionista, director y editor del cortometraje <b>
              <a href="https://vimeo.com/127000861" target="_blank">Chalma</a>,
              </b> adaptación del cuento <em>Talpa</em> de Juan Rulfo, que fue 
              parte de la selección oficial del FICG (2016) y del Latino Film Festival 
              de Berlín (2016). Su otro cortometraje, <b>
              <a href="https://vimeo.com/154378481" target="_blank">Pasajeros</a></b>, 
              fue selección oficial del FICM y el FICIQQ de Chile.`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits style={{ marginBottom: "0" }}>
              <b>GÉNERO:</b> Ficción
              <br />
              <b>DURACIÓN:</b> 19:53 min
              <br />
              <b>GUIÓN:</b> Miguel Ángel Fernández
              <br />
              <Encapsulator>
                <b>
                  DIRECTOR DE
                  <br />
                  FOTOGRAFÍA:{" "}
                </b>{" "}
                Alejandro Chávez
              </Encapsulator>
              <b>CAST:</b> Rodolfo Calderón, Ángel Noe Alvarado, Francisco Pita,
              Ángel Copado, Eduardo Rodríguez
              <br />
              <b>MÚSICA:</b> Ruben Cruz Martínez
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>Voces Blancas</h2>
          <p style={{ marginBottom: "5%" }}>
            30 niñas y niños de entre 12 y 17 años son reunidos para profundizar
            en su visión sobre la sexualidad, el sexismo, la trata de personas,
            entre otros temas. Mediante entrevistas y herramientas documentales,
            asoman los contrastes y reflexiones respecto a estos temas en sus
            jóvenes mentes.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/236672641"}
            still={webp ? stillVoceswebp : stillVoces}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Ana Díez"}
                title={"DIRECTORA"}
                img={webp ? anawebp : ana}
                imdb={"https://www.imdb.com/name/nm0246781/"}
                mail={"anadd@telefonica.net"}
                bio={`Directora española que ha ganado una <em>Diosa de Plata</em>, 
              un <em>Ariel</em> y un <em>Goya</em>. Ha dirigido 3 documentales y 5 
              largometrajes ficción, entre ellos: <em>Ander Eta Yul</em> (1988), 
              <em>Todo está Oscuro</em> (1997) y <em>Elvira Luz Cruz: Pena Máxima</em> 
              (1985). Es Socia Co-Fundadora de CIMA (Asociación de Mujeres Cineastas 
                y de Medios Audiovisuales).`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits style={{ marginBottom: "0" }}>
              <b>GÉNERO:</b> Documental
              <br />
              <b>DURACIÓN:</b> 18:23 min
              <br />
              <b>GUIÓN:</b> Ana Díez
              <br />
              <Encapsulator>
                <b>
                  DIRECTOR DE
                  <br />
                  FOTOGRAFÍA:{" "}
                </b>
                Alejandro Chávez
              </Encapsulator>
              <b>CAST:</b> 30 Niños y niñas de 12 a 18 años
              <br />
              <b>MÚSICA:</b> Ricardo García
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>Todos Queremos Dormir</h2>
          <p style={{ marginBottom: "5%" }}>
            Esta es la odisea de Araceli, una empleada doméstica, la tarde que
            descubre que su hija Sonia ha desaparecido. Después de encontrarse
            con muchas trabas en del sistema judicial, decide buscarla ella
            misma. Araceli tendrá que adentrarse en un mundo de corrupción y
            hacer hasta lo impensable si pretende recuperarla.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/236672575"}
            still={webp ? stillTQDwebp : stillTQD}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Rodrigo Ruiz Patterson"}
                title={"DIRECTOR"}
                img={webp ? pattersonwebp : patterson}
                imdb={"http://www.imdb.com/name/nm2559532/"}
                ig={"http://instagram.com/eltonayon"}
                mail={"ruizpattersonrodrigo@gmail.com"}
                bio={`Graduado <em>Cum Laude</em> del CCC con la tesis ficción <b>
              <a href="https://www.youtube.com/watch?v=IpPrRqnBSXU&t=3s" target="_blank">
              Australia</a></b> (nominada al <em>Ariel 2017</em> y ganadora
              del <em>Mejor Cortometraje Latinoamericano de Ficción</em> en el 
              <em>FICD</em>). Además dirigió los 
              cortometrajes <em>En el Camino, Vendetta, Berrettas y Pop, Chicklick</em> 
              y <em>Paradisio</em>. Ha sido seleccionado en más de 10 
              festivales de cine internacionales, entre ellos <em>Cannes</em>, 
              <em>Raindance</em>, <em>La Habana</em> y el <em>FICM</em>.`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits style={{ marginBottom: "0" }}>
              <b>GÉNERO:</b> Ficción
              <br />
              <b>DURACIÓN:</b> 19:58 min
              <br />
              <b>GUIÓN:</b> Rodrigo Ruíz Patterson
              <br />
              <Encapsulator>
                <b>
                  DIRECTOR DE
                  <br />
                  FOTOGRAFÍA:{" "}
                </b>
                Argel Ahumada
              </Encapsulator>
              <b>CAST:</b> Asur Zagada, Francisco Barreiro, Carmen Ramos
              <br />
              <b>MÚSICA:</b> Mateo Gonzalez Bufi
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>El Sol Bajo Los Pies</h2>
          <p style={{ marginBottom: "5%" }}>
            Cortometraje que se introduce en la realidad de los niños que
            involuntariamente se convierten en jornaleros en México. Este
            documental evidencia las condiciones en que se ven obligados a
            trabajar con sus padres y las mentiras y abusos de quienes los
            contratan.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/236672332"}
            still={webp ? stillSBLPwebp : stillSBLP}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Ángel Linares"}
                title={"DIRECTOR"}
                img={webp ? angelwebp : angel}
                imdb={"http://www.imdb.com/name/nm9094476/"}
                mail={"arlinco13@gmail.com"}
                bio={`Documentalista que ha sido nominado al <em>Ariel</em> y galardonado 
                en el FICM, DOCSMX y el Festival Internacional de Cine de Caracas. Sus 
                documentales se han presentado en <em>La Semaine de la Critique</em> de 
                Cannes, en el Festival de Cine de Sarajevo y en <em>La Habana</em>. Su 
                documental más premiado ha sido <em>Las Montañas Invisibles</em> (2012).`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits style={{ marginBottom: "0" }}>
              <b>GÉNERO:</b> Documental
              <br />
              <b>DURACIÓN:</b> 18:23 min
              <br />
              <b>GUIÓN:</b> Ángel Linares
              <br />
              <Encapsulator>
                <b>
                  DIRECTOR DE
                  <br />
                  FOTOGRAFÍA:{" "}
                </b>
                Renato Martínez Gómez
              </Encapsulator>
              <b>CAST:</b> Aurelina Díaz, Olivia Ponce, Silvia Ponce, Don
              Enrique, Pedro Galviz
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="6" columnEndSmall="8">
        <Fade bottom>
          <h2>Que Canten Los Niños</h2>
          <p style={{ marginBottom: "5%" }}>
            Esta historia sigue los esfuerzos de Xochi y Ceci, dos niñas de 12 y
            10 años, que intentan escapar de su existencia llena de abusos
            físicos, emocionales y sexuales dentro de un albergue disfuncional.
            ¿Cuántos niños desamparados y olvidados sobreviven en esas
            condiciones? Esta es la historia del abuso de poder que sometió a
            niños durante décadas para fundar una fábrica de esclavos ignorados.
          </p>
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom>
          <TrailerPlayer
            url={"https://player.vimeo.com/video/236672459"}
            still={webp ? stillQCLNwebp : stillQCLN}
          />
        </Fade>
      </Section>
      <Section columnStart="2" columnEnd="8">
        <Fade bottom distance={"40px"}>
          <InfoSection>
            <Directors>
              <DirectorCard
                name={"Gina Herrera"}
                title={"DIRECTORA"}
                img={webp ? ginawebp : gina}
                ig={"http://instagram.com/ginaherrerapascal"}
                imdb={"http://www.imdb.com/name/nm6163973/"}
                mail={"ginaherrerapascal@gmail.com"}
                bio={`Egresada de Centro de Estudios Cinematográficos, INDIe. Fue nombrada una de <em>Las 5 Cineastas a Seguir</em> por su tesis de ficción <em><a href="https://vimeo.com/156661095" target="_blank">Ni Aquí Ni Allá</a></em>, cortometraje seleccionado en distintos festivales de cine, como el Festival Internacional de Cine de Morelia (FICM), FICUNAM, New York Independent Films Festival, 12 Months (Rumania), Short Short Films Festival, entre otros.`}
                mobile={props.mobile}
              />
            </Directors>
            <Credits style={{ marginBottom: "0" }}>
              <b>GÉNERO:</b> Ficción
              <br />
              <b>DURACIÓN:</b> 20:56 min
              <br />
              <b>GUIÓN:</b> Gina Herrera, Genaro Peñalosa
              <br />
              <Encapsulator>
                <b>
                  DIRECTORA DE
                  <br />
                  FOTOGRAFÍA:{" "}
                </b>
                Flavia Martínez
              </Encapsulator>
              <b>CAST:</b> Nicole Reyes, Matilde Luna, María Lourdes Pérez,
              Catalina López
              <br />
              <b>Música:</b> Compuesta por Jose Luis Perales, interpretado por
              el cast
            </Credits>
          </InfoSection>
        </Fade>
      </Section>
    </Layout>
  );
}
