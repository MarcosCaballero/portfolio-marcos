import mongoose from "mongoose";

const Proyects = new mongoose.Schema({
  project_name: {
    type: String,
    required: [true, "Por favor ingrese el nombre del proyecto"],
  },
  desc: { type: String, required: [true, "Por favor ingrese una descripción"] },
  technologies: {
    type: Array,
    required: [true, "Por favor ingrese las tecnologías utilizadas"],
  },
  project_url: {
    type: String,
    required: [true, "Por favor ingresa la url de la página web"],
  },
  img: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Project || mongoose.model("Project", Proyects);
