import React, { useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";

const Projects = (props) => {
  const { projects } = props;
  console.log(projects);
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const autocomplete = createAutocomplete({
    // Cada vez que cambie el state de Algolia lo vamos a ver reflejado en el state de autocomplete
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [source],
  });
  return (
    // <form className="flex justify-center mt-20 mb-20">
    //   <div className="flex relative p-1 bg-gradient-to-tr from-purple-600 to-blue-300 rounded-full w-2/6">
    //     <input
    //       className="flex-1 p-2 pl-4 rounded-full w-full"
    //       type="text"
    //       placeholder="Search"
    //     />
    //   </div>
    // </form>
    <div className="w-[400px] mx-10 g-10  mt-20">
      {projects.map((element, index) => (
        <div className="border border-black p-10" key={index}>
          <h3 className="text-center">{element.project_name}</h3>
          {/* desc */}
          {/* technologies */}
          <h5>Stack de tecnologías: </h5>
          {element.technoligies.map((technology, index) => (
            <h6 key={index}>{technology}</h6>
          ))}
          {/* tags */}
          {element.tags.map((tag, index) => (
            <p key={index}>#{tag}</p>
          ))}
          <div className="border border-solid border-black hover:scale-110">
            <a href={element.project_url}>Click me</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
