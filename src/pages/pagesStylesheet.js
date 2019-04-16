import styled, { css } from "styled-components";

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