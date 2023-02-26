import React from "react";
import { NavLink } from "react-router-dom";

const VraiFaux = () => {
  return (
    <>
      <section id="quiz">
        <article>
          <div className="quizImg"></div>
          <div className="textContainer">
            <h2>Tattoo Kouiz !</h2>
            <h3>Vrai ou Faux ?</h3>
            <p>
              Le but de ce quiz est de te renseigner sur les eventuelles
              questions que tu pourrais te poser. Donc hésites pas à faire des
              recherches de ton côté si on aborde pas le sujet qui te
              turlupines.
            </p>
            <NavLink to="" className="button">
              <button id="btn">Let's go</button>
            </NavLink>
          </div>
        </article>
        <article>
          <div className="zoneImg"></div>
          <div className="textContainer">
            <h2>Les zones sensibles</h2>
            <h3>Ca fais mal ???</h3>
            <p>
              On entend souvent dire "Les tatouages ça fais super mal ! Surout
              sur <em>X partie du corps</em> !"
              <br />
              Vas faire un tour sur cet article pour voir si t'es d'accords avec
              nous.
            </p>
            <NavLink to="" className="button">
              <button id="btn">J'ai mal</button>
            </NavLink>
          </div>
        </article>
        <article>
          <div className="Img"></div>
          <div className="textContainer">
            <h2>Tattoo Kouiz !</h2>
            <h3>Vrai ou Faux ?</h3>
            <p>
              Le but de ce quiz est de te renseigner sur les eventuelles
              questions que tu pourrais te poser. Donc hésites pas à faire des
              recherches de ton côté si on aborde pas le sujet qui te
              turlupines.
            </p>
            <NavLink to="" className="button">
              <button id="btn">Let's go</button>
            </NavLink>
          </div>
        </article>
      </section>
    </>
  );
};

export default VraiFaux;
