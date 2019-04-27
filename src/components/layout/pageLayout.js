import React from "react";
import styled from "styled-components/macro";
import { blackColor, whiteColor } from "./../../pages/pagesStylesheet";
import Footer from "components/layout/footer";

const Page = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(8, 1fr);

  h1 {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 0.5px ${whiteColor};
    width: 100%;
    margin: 15% 0 10% 0;
    text-align: center;

    svg {
      width: 100%;
      max-height: 175px;

      text {
        fill: none;
        stroke: ${whiteColor};
        stroke-width: 1.2px;
        font-size: 105px;
        font-family: "Share", cursive;
      }
    }
  }

  h2 {
    font-weight: bold;
    background-color: ${whiteColor};
    color: ${blackColor};
    text-transform: uppercase;
    padding: 5px 8px 2px 8px;
    display: inline-block;
    font-size: 1.74em;
    margin-left: -8px;
    margin-bottom: 25px;
  }

  p {
    margin: 0 0 20% 0;
    line-height: 1.2;
  }
`;

function Layout(props) {
  return (
    <Page id={props.id}>
      {props.children}
      <Footer />
    </Page>
  );
}

export default Layout;
