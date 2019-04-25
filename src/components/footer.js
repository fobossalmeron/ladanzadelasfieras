import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Fade from "react-reveal/Fade";
import { Heading3, blackColor, redColor } from "./../pages/pagesStylesheet";

import { ReactComponent as credit } from "./../assets/img/layout/creditos.svg";

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 30px;
`;

const Capture = styled.div`
  label {
    text-transform: uppercase;
    font-weight: bold;
  }
  input,
  textarea {
    background-color: transparent;
    border-bottom: 1px solid #ffffff;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    color: white;
    width: 100%;
    padding: 15px 20px 15px 0;
    font-family: inherit;
    height: 50px;
    ::placeholder {
      color: white;
      opacity: 0.48;
    }
  }

  textarea {
    resize: none;
    overflow: visible;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  grid-column: 2 / span 6;
`;

const SendButton = styled.button`
  font-weight: bold;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  padding: 9px 17px 9px 17px;
  display: inline-block;
  font-size: 1.2em;
  border: none;
  width: auto;
  align-self: flex-end;
  margin-right: -17px;
  cursor: pointer;
  transition: transform .4s ease;
  :hover{
    transform:scale(1.1);
  }
`;

const MovieCredits = styled(credit)`
  margin: 7% 0 30px 0;
  width: 100%;
`;

const FinalCredit = styled.div`
  margin-bottom: 7%;
  font-size: 9.7px;
  text-transform: uppercase;
  text-align: center;
  a {
    font-size: 18.5px;
    background-color: black;
    color: #c64028;
    text-decoration: none;
    padding: 2px 3px 1px 2px;
    margin-left: 4px;
    :visited {
      color: #c64028;
    }
  }
`;

function Footer() {
  const [hasBeenSent, setSent] = useState(false);

  const EmailForm = () => {
    function doSetSent() {
      setSent(true);
    }
    var opaC = hasBeenSent? "0" : "1";

    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Escribe tu email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Escribe una dirección de Email real";
          }
          if (!values.name) {
            errors.name = "Escribe tu nombre";
          }
          if (!values.message) {
            errors.message = "Escribe tu mensaje";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          doSetSent();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            /*axios
            .post("https://formcarry.com/s/CRlt34grpHi", values, {
              headers: { Accept: "application/json" }
            })
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });*/
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              transition: ".4s ease all",
              opacity: opaC,
            }}
            id="checkMyHeight"
          >
            <StyledForm>
              <Capture>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Escribe tu nombre"
                />
                <ErrorMessage name="name" component="div" />
              </Capture>

              <Capture>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Escribe tu email"
                />
                <ErrorMessage name="email" component="div" />
              </Capture>

              <Capture>
                <label htmlFor="message">Mensaje</label>
                <Field
                  type="text"
                  name="message"
                  component="textarea"
                  placeholder="Escribe tu mensaje"
                />
                <ErrorMessage name="message" component="div" />
              </Capture>
            </StyledForm>

            <SendButton type="submit" disabled={isSubmitting}>
              Enviar
            </SendButton>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <FooterWrapper>
      <Fade bottom>
        <Heading3 color={blackColor} backgroundColor={redColor}>
          Contacto
        </Heading3>
        <EmailForm />
        {!hasBeenSent ? "" : "Gracias!"}
        <MovieCredits />
        <FinalCredit>
          Diseño y desarrollo por
          <a href="https://rodrigosalmeron.mx/">Rodrigo Salmerón</a>
        </FinalCredit>
      </Fade>
    </FooterWrapper>
  );
}

export default Footer;
