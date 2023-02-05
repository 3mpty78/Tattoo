import React from "react";
import "../Styles/header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header>
        <section>
          <h1>
            Tattoo <br /> Roulette
          </h1>
          <img src="../logo.png" alt="Logo de la page" />
        </section>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
