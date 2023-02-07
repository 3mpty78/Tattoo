import React from "react";
import Header from "../Components/Header";

const Infos = () => {
  return (
    <>
      <Header />
      <section id="infos">
        <article className="soins">
          <div className="imgContainer"></div>
          <div className="textContainer">
            <h2>Comment entretenir son tatouage</h2>
            <h3>Avoir un tatouage c'est bien, l'entretenir c'est mieux !</h3>
            <p>
              Nombreux sont celles et ceux qui, après avoir eu leur premier
              tatouage, pensent que ça y est, c'est fini. <br />
              <br />
              Et bah NON !<br />
              <br />
              Entretenir son tatouage, c'est prendre soin de sa peau qui, pour
              rappel, viens de subir un traumatisme pour pouvoir y injecter
              l'encre. Mais alors comment faire pour préserver sa peau, les
              couleurs du tatouage, et ainsi éviter au maximum les infections ?
            </p>
            <button id="btn">Lire l'article</button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Infos;
