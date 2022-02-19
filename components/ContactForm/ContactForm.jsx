import { Field, Form, Formik } from "formik";
import React from "react";

export default function ContactForm() {
  //Valores iniciales
  const initialValues = {
    email: undefined, // string
    name: undefined, //string
    message: undefined, // string
  };

  return (
    <div className="m-20">
      <Formik initialValues={initialValues}>
        {(props) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                className="ml-10"
                type="email"
                name="email"
                placeHolder="email@email.com"
                value={props.initialValues.email}
              />
            </div>
            <div>
              <label htmlFor="name">Nombre</label>
              <Field
                className="ml-10"
                type="text"
                name="name"
                placeHolder="John, pedro"
                value={props.initialValues.name}
              />
            </div>
            <div>
              <label htmlFor="mensagge">mensaje</label>
              <Field
                className="ml-10"
                as="textarea"
                name="message"
                placeHolder="Escribe tu mensaje aqui :)"
                value={props.initialValues.message}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
