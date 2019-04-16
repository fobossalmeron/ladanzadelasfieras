import React from "react";
import { Section, PageTitle } from "./pagesStylesheet";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Footer from "./../components/footer";
import { ReactComponent as CortometrajesTitle } from "./../assets/img/layout/cortometrajes.svg";

export default function Cortometrajes() {
    document.title = "La Danza de las Fieras | Cortometrajes";
    return (
      <div id="Cortometrajes" className="Page">
        <PageTitle>
          <CortometrajesTitle />
        </PageTitle>
        <Section>
          <Fade up>
          <h2>Followback</h2>
          </Fade>
        </Section>
        <Footer/>
      </div>
    );
  }