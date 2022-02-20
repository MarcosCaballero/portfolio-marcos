import React from "react";
import Link from "next/link";
import { routes } from "./routesOps";
import Banner from "../Banner/Banner";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className="w-full fixed -top-0 bg-white flex justify-between items-center">
      <Banner text="marcos caballero full stack developer" />
      <nav className="flex w-2/4 items-baseline justify-evenly">
        {routes.map((route, index) => (
          <Link key={index} href={route.ph}>
            <a
              className={
                router.pathname === route.ph
                  ? "text-xl uppercase scale-125"
                  : "text-xl uppercase "
              }
            >
              {route.name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
