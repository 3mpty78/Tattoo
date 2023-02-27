import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Sensitive = () => {
  return (
    <>
      <Header />
      <main>
        <section id="sensitive">
          <div className="contentHider"></div>
          <div className="sensitiveContainer">
            <h1>
              Les <em>zones sensibles</em> à tatouer
            </h1>
            <div className="content">
              <p>
                On va pas se le cacher : ce thème est sujet à de nombreux débats
                du style :{" "}
                <em>"Ah bon t'as eu mal ? Faiblards j'ai rien sentis moi !"</em>
                . Ou l'inverse d'ailleurs. Car oui, en effet, la tolérance à la
                douleur dépend principalement des gens, mais aussi de leur état
                (alcool, drogues, fatigue, faim, etc.). <br /> <br />
                Certains seront plus résistants que d'autres au fait de se faire
                gratter la peau pendant plusieurs heures. Cependant, il existe
                malgré tout quelques zones de notre corps pour lesquelles la
                majorité des tatoués et tatoueurs s'accordent à dire qu'elles
                sont effectivement <em>plus sensibles </em>que d'autres. <br />{" "}
                <br />
                Exemple : les côtes, les articulations en général, et les zones
                où la peau est la plus fine comme derrière les genoux par
                exemple. <br /> <br /> Si vous êtes du genre douillet et que
                vous projeter de vous faire comme tout premier tatouage une
                pièce assez conséquente sur toute la poitrine, ou les côtes, bon
                courage à vous ! Ce sont entre <em>4</em> et <em>6</em> longues
                heures de travail qui vous attendent haha. <br />
                <br />
                Par ailleurs, la <em>taille</em> du tatouage, sa{" "}
                <em>complexité</em>, le <em>temps </em>
                passé ainsi que la <em>dexterité</em> du tatoueur sont des
                paramètres qui rentrent en compte dans notre perception de la
                "douleur". <br /> <br />
                Donc ce n'est pas la peine d'aller scander partout que{" "}
                <em>tel</em> ou <em>tel </em>
                artiste fais mal son job parce que votre petite phrase sur la
                fesse vous à fais un mal de chien. C'est peut-être juste vous
                qui supportez mal la douleur. <br /> <br /> Mais comme on dit :
                il faut souffrir pour être beau ou belle !
              </p>
              <picture>
                <div className="painImg"></div>
                <figcaption>
                  Source :{" "}
                  <a
                    href="https://www.healthline.com/health/body-modification/pain-tattoos-chart#pain-chart"
                    target={"_blank"}
                  >
                    healthline.com
                  </a>
                </figcaption>
              </picture>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sensitive;
