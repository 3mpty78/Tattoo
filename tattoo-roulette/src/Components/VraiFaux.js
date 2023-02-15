import React from "react";
import { NavLink } from "react-router-dom";

const VraiFaux = () => {
  return (
    <>
      <section id="quiz">
        <article className="vraiFaux">
          <div className="quizImg"></div>
          <div className="textContainer">
            <h2>Tattoo Kouiz !</h2>
            <h3>Vrai ou Faux ?</h3>
            <p>
              Avant un tatouage on a souvent un tas de questions en tête. Du
              genre : "C'est vrai que si je me fais tatouer je ne pourrais plus
              donner mon sang ?".
              <br />
              <br />
              Heureusement, <span>Tattoo Roulette</span> a pensé à toi hehe. On
              t'as préparé un petit quiz Vrai ou Faux pour t'aider un peu.
              <br />
              <br />
              Le but de ce quiz est de te renseigner sur les eventuelles
              questions que tu pourrais te poser. Donc hésites pas à faire des
              recherches de ton côté si on aborde pas le sujet qui te
              turlupines.
            </p>
            <NavLink to="" className="button">
              <button id="btn">Let's gooo</button>
            </NavLink>
          </div>
        </article>
      </section>
    </>
  );
};

export default VraiFaux;
