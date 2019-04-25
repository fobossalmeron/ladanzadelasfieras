import styled, { css } from "styled-components";

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

export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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