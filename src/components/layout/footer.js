import React, { useState } from "react";
import { blackColor, redColor, Heading3 } from "components/layout/pageLayout";
import axios from "axios";
import { Transition } from "react-transition-group";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Fade from "react-reveal/Fade";
import styled from "styled-components/macro";
import { ReactComponent as credit } from "./../../assets/img/layout/creditos.svg";
import { ReactComponent as SuccessIcon } from "./../../assets/img/layout/success.svg";

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Capture = styled.div`
  label {
    text-transform: uppercase;
    font-weight: 700;
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
    border-radius: 0;
    appearance: none;
    box-shadow: none;
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
  font-weight: 700;
  background-color: #0a0a0a;
  color: #f9f9f9;
  text-transform: uppercase;
  padding: 9px 17px 9px 17px;
  display: inline-block;
  font-size: 1.2em;
  border: none;
  width: auto;
  align-self: flex-end;
  margin-right: -17px;
  cursor: pointer;
  transition: transform 0.4s ease;
  :hover {
    transform: scale(1.1);
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
    text-decoration: none;
    padding: 2px 3px 1px 2px;
    margin-left: 4px;
    color: #c64028;
    background-color: #0a0a0a;
    &:visited,
    &:link {
      color: #c64028;
      background-color: #0a0a0a;
    }
  }
`;

const defaultStyle = {
  transition: `opacity 400ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const SuccessMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 20%;
  left: 0;
  z-index: -2;
  pointer-events: none;
  b {
    text-transform: uppercase;
  }
  p {
    margin-bottom: 0;
  }
  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
`;

const ErroredMessage = styled.div`
  background-color: #c64028;
  color: #0a0a0a;
  padding: 5px;
`;

function Success() {
  return (
    <SuccessMessage>
      <SuccessIcon />
      <b>Mensaje enviado</b>
      <p>Gracias! Nos pondremos en contacto contigo a la brevedad</p>
    </SuccessMessage>
  );
}

function Footer() {
  const [hasBeenSent, setSent] = useState(false);

  const EmailForm = props => {
    function doSetSent() {
      setSent(true);
    }

    var clickable = hasBeenSent ? "none" : "auto";

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
            errors.email = "Olvidaste escribir tu email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Escribe una dirección de correo real";
          }
          if (!values.name) {
            errors.name = "Olvidaste escribir tu nombre";
          }
          if (!values.message) {
            errors.message = "Olvidaste escribir tu mensaje";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          doSetSent();
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            axios
              .post("https://formcarry.com/s/FOgvW8mFEh2", values, {
                headers: { Accept: "application/json" }
              })
              .then(function(response) {
                console.log(response);
              })
              .catch(function(error) {
                console.log(error);
              });
          }, 400);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              pointerEvents: clickable
            }}
          >
            <StyledForm>
              <Capture>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Escribe tu nombre"
                  autoComplete="nope"
                />
                <ErrorMessage name="name" component={ErroredMessage} />
              </Capture>

              <Capture>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Escribe tu email"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component={ErroredMessage} />
              </Capture>

              <Capture>
                <label htmlFor="message">Mensaje</label>
                <Field
                  type="text"
                  name="message"
                  component="textarea"
                  placeholder="Escribe tu mensaje"
                />
                <ErrorMessage
                  name="message"
                  component={ErroredMessage}
                  style={{ marginTop: "-4px" }}
                />
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
        <Transition in={!hasBeenSent} timeout={400}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <EmailForm />
            </div>
          )}
        </Transition>
        <Transition in={hasBeenSent} timeout={400}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <Success />
            </div>
          )}
        </Transition>
        <MovieCredits />
        <FinalCredit backColor={blackColor}>
          Diseño y desarrollo por
          <a href="https://rodrigosalmeron.mx/">Rodrigo Salmerón</a>
        </FinalCredit>
      </Fade>
    </FooterWrapper>
  );
}

export default Footer;
