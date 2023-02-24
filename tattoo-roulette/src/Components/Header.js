import React from "react";
import "../Styles/header.css";
import Navigation from "./Navigation";
import Toggler from "./Toggler";

const Header = () => {
  return (
    <>
      <section className="logo">
        <h1>
          Tattoo <br /> Roulette
        </h1>
        <img src="../logo.png" alt="Logo de la page" />
      </section>
      <header className="headerito">
        <Navigation />
      </header>
      <button className="nav-toggler" onClick={Toggler}>
        <span className="line l1"></span>
        <span className="line l2"></span>
        <span className="line l3"></span>
      </button>
    </>
  );
};

export default Header;
