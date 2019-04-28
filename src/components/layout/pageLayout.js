import React from "react";
import styled, {css} from "styled-components/macro";
import Footer from "components/layout/footer";

export const whiteColor = "#f9f9f9";
export const blackColor = "#0A0A0A";
export const redColor =  "#C64028";

export const columnStartProps = props => css`
  ${props.columnStart && `grid-column-start: ${props.columnStart || "1"}`};
`;

export const columnEndProps = props => css`
  ${props.columnEnd && `grid-column-end: ${props.columnEnd || "2"}`};
`;

export const Section = styled.div`
  ${columnStartProps}
  ${columnEndProps}
`;

export const PageTitle = styled.h1`
  grid-column-start: 1;
  grid-column-end: 9;
  svg {
    max-height: 175px;
    width: 100%;
    text {
      font-weight: normal;
      font-family:inherit;
    }
  }
`;

export const Heading3 = styled.h3` 
  font-weight:bold;
  background-color: ${props => props.backgroundColor || blackColor};
  color: ${props => props.color || whiteColor};
  text-transform: uppercase;
  padding: 4px 7px 2px 8px;
  display: inline-block;
  font-size: 1.64rem;
  margin-left: -8px;
  margin-top:0;
`;

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
