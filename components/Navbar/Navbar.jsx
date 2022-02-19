import React from "react";
import Link from "next/link";
import { routes } from "./routesOps";

const Navbar = () => {
  return (
    <header className="w-full fixed -top-0 bg-white flex justify-between items-center">
      <div className="xlm:w-full mx-auto p-5 flex justify-center "></div>
      <nav className="flex w-full items-baseline justify-evenly">
        {routes.map((route, index) => (
          <Link key={index} href={route.ph}>
            <a className="text-xl uppercase">{route.name}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
