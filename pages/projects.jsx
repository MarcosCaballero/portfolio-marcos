import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import dbConnect from "../lib/dbConnect";
import Proyects from "../models/projects";

export default function projects({ projects }) {
  return (
    <div>
      <title>Mis Proyectos</title>
      <Navbar />
      <Projects projects={projects} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Proyects.find();
    const projects = res.map((element) => {
      const project = element.toObject();
      project._id = project._id.toString();
      return project;
    });
    return { props: { projects } };
  } catch (error) {
    console.log(error);
  }
}
