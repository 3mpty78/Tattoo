import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Heal = () => {
  return (
    <>
      <Header />
      <main>
        <section className="healContainer">
          <h2>
            <strong>Entretenir</strong> son tatouage
          </h2>
          <p>
            Pour expliquer les étapes à suivre, prenons l'exemple de Michel.
            <br />
            Michel vient tout juste de passer 4h sur la table de son artiste
            préféré afin de se faire tatouer ce magnifique motif de dragon
            japonais découvert sur <span>Tattoo Roulette</span>. Fraîchement
            tatoué et fier de sa nouvelle pièce, Michel rentre chez lui à pied,
            traversant parcs et avenues et profitant d'un beau soleil. Une fois
            chez lui, Michel s'empresse de partager son nouveau tatouage avec
            ses amis sur Instagram, et file se coucher, épuisé. Les jours
            passent et Michel sent son bras le démanger. Il gratte et frotte
            mais rien n'y fait : ça gratte ! Quelques semaines plus tard, Michel
            se rend chez son tatoueur pour lui faire part de la tragédie : son
            tatouage s'est infecté ! <br />
            <br /> Alors pourquoi ? Et comment ? Simplement car Michel n'as pas
            entretenu son tatouage. <br />
            <br />
            Comment aurait-il pu éviter cette infection ?
          </p>
        </section>
        <div className="articles">
          <article className="firstArticle">
            <div className="first"></div>
            <h3>Couvrez votre tatouage !</h3>
            <p>
              Le temps de faire le trajet retour du salon à chez vous : couvrez
              le tatouage pour éviter aux microbes extérieurs de se coller sur
              la plaie. Pour se faire, les tatoueurs nettoieront une première
              fois et placeront eux-même un pansement stérile sur le tatouage
              afin de le protéger de l'extérieur. A noter qu'au moment du
              coucher, il est préférable de changer ce pansement pour la nuit,
              car il se peut que du sang et de l'encre aient coulé, et donc il
              faudra nettoyer tout ça. C'est là que la deuxième étape prend tout
              son sens, car elle sera à réaliser AVANT de placer le nouveau
              pansement.
            </p>
            <div className="coverPicture"></div>
          </article>
          <article className="secondArticle">
            <div className="second"></div>
            <h3>Lavez votre tatouage !</h3>
            <p>
              Il est primordial d'accorder un soin tout particulier au lavage et
              au séchage de votre tatouage. En effet, privilégiez un nettoyage à
              l'eau tiède pour ne pas brûler votre peau. Utilisez un savon doux
              au pH neutre (de préférence). Pour ce qui est de sécher le
              tatouage, utilisez une serviette propre et douce, mais ne surtout
              PAS FROTTER. Tapotez délicatement pour éponger. C'est suffisant.
              Une fois le tatouage nettoyé et sec, appliquez une fine couche de
              pommade grasse (type vaseline ou{" "}
              <a href="https://www.hustlebutter.com/" target="_blank">
                Hustle Butter
              </a>
              ) puis posez votre nouveau pansement. Il est important de nettoyer
              votre tatouage 2 à 3 fois par jours. Et maintenant, au lit !
            </p>
            <div className="washPicture"></div>
          </article>
          <article className="thirdArticle">
            <div className="third"></div>
            <h3>Hydratez votre tatouage !</h3>
            <p>
              Sans surprises (enfin j'espère), il est parfaitement indispensable
              d'hydrater votre tatouage tout au long du processus de
              cicatrisation ! Cela vous évitera notamment les infections. Cette
              étape est à réaliser 2 à 3 fois par jours également pendant une
              quinzaine de jours (tout dépend de votre capacité de cicatrisation
              évidemment, ce n'est pas une valeur fixe). Tout comme le
              nettoyage, hydrater son tatouage est très important. Il faudra
              donc y apporter le plus grand soin. Utilisez la même pommade
              grasse qu'après le lavage.
            </p>
            <div className="hydroPicture"></div>
          </article>
          <article className="fourthArticle">
            <div className="fourth"></div>
            <h3>Ne pas exposer son tatouage au soleil !</h3>
            <p>
              Tant que ce dernier n'est pas cicatrisé (et même après), il faut
              éviter au MAXIMUM de l'exposer aux UV ! Pour rappel, un tatouage
              frais est une plaie ouverte ! S'exposer au soleil reviendrait à
              verser de l'eau chaude sur une brûlure, c'est stupide et dangereux
              !
            </p>
            <div className="soleilPicture"></div>
          </article>
          <section className="advice">
            <h3>Quelques conseils</h3>
            <p>
              Si dans les jours qui suivent votre tatouage votre peau gonfle
              légèrement, rougit et vous gratte un peu : c'est normal ! C'est
              que votre peau cicatrise. <br />
              <br />
              Alors oui, ça croûte, oui c'est dégueulasse, et oui c'est moche.
              Mais c'est un passage obligatoire et malgré les légères
              démangeaisons, il faudra éviter de gratter. Vous risqueriez
              d'arracher des croûtes et donc de créer une cicatrice sur votre
              peau, ce qui altérerai le tracé du tatouage voir même les
              couleurs. Laissez les partir toutes seules sous la douche, et tout
              ira pour le mieux.
            </p>
            <p className="pain">
              En revanche, si vous souffrez de démangeaisons plus aigües, que
              votre peau rougit et vous brûle : n'attendez pas et prenez conseil
              auprès de votre médecin traitant ou d'un dermatologue. Il se peut
              que vous fassiez une réaction allergique. Mieux vaut prévenir que
              guérir.
            </p>
            <h3>Evitez l'eau et le soleil !</h3>
            <p>
              Alors attention, quand je dis « évitez l'eau », je ne vous dis pas
              d'arrêter de vivre ou de vous laver, bien au contraire ! Ce que
              j'entends par là, c'est d'éviter les eaux salées ou chlorées (mer,
              piscine, sauna, jacuzzi, et j'en passe…).
            </p>
            <p>
              Et comme nous l'avons évoqué plus haut, évitez le soleil le temps
              d'obtenir une cicatrisation complète. Ce serait dommage de tout
              foirer si près du but.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Heal;
