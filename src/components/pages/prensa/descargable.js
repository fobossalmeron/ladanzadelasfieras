import React from "react";
import styled, { css } from "styled-components/macro";
import Loadable from "react-loadable";
import Loader from "components/shared/loaders/squareLoader";
import { whiteColor } from "components/layout/pageLayout";

const Imagen = Loadable({
  loader: () => import("./imagen"),
  loading: Loader,
});

const DescargableContainer = styled.li`
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
  ${(props) =>
    props.mobile &&
    css`
      :hover {
        div {
          background-size: 100%;
        }
      }
    `}
`;

export default function Descargable(props) {
  return (
    <DescargableContainer mobile={props.mobile}>
      <a
        target={"_blank"}
        rel="noopener noreferrer"
        href={process.env.PUBLIC_URL + "/descargables/" + props.file}
      >
        <Imagen src={props.src} alt={props.title} />
        <p>{props.title}</p>
      </a>
    </DescargableContainer>
  );
}
