import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Fade from "react-reveal/Fade";

import { ReactComponent as credit } from "./../assets/img/layout/creditos.svg";

const EmailForm = () => (
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
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <StyledForm>
          <Capture>
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" placeholder="Escribe tu nombre" />
            <ErrorMessage name="name" component="div" />
          </Capture>

          <Capture>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" placeholder="Escribe tu email" />
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
  return (
    <FooterWrapper>
      <Fade bottom>
        <h3>Contacto</h3>
        <EmailForm />
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
