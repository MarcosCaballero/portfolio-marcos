import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Navbar from "../components/Navbar/Navbar";

export default function () {
  return (
    <div>
      <title>¡Contactame!</title>
      <Navbar />
      {/* Formulario con formik */}
      <ContactForm />
    </div>
  );
}
