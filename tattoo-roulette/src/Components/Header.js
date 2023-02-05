import React from "react";
import "../Styles/header.css";

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
        <nav>
          <ul>
            <li>
              <a href="../Pages/Home.js">Home</a>
            </li>
            <li>
              <a href="../Pages/Spin.js">Spin</a>
            </li>
            <li>
              <a href="../Pages/Infos.js">Infos</a>
            </li>
            <li>
              <a href="../Pages/Artistes.js">Artists</a>
            </li>
            <li>
              <a href="../Pages/Contact.js">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
