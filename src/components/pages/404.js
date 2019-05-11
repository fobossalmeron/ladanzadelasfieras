import React from "react";
import Layout from "components/layout/pageLayout";
import Fade from "react-reveal/Fade";
import { ReactComponent as NotFoundTitle } from "assets/img/layout/404.svg";

import { Section, PageTitle } from "components/layout/pageLayout";

export default function NoMatch(props) {
  document.title = "La Danza de las Fieras | 404";
  return (
    <Layout id="404" mobile={props.mobile}>
      <PageTitle>
        <Fade>
          <NotFoundTitle />
        </Fade>
      </PageTitle>
      <Section columnStart="2" columnEnd="8">
        <p style={{textAlign:"center"}}>
          Esta página no existe, pero te invitamos a visitar el resto del sitio!
        </p>
      </Section>
    </Layout>
  );
}
