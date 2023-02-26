import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="splitview">
          <div className="carousel">
            <div className="carouselContainer">
              <div className="firstImg"></div>
              <div className="secondImg"></div>
              <div className="thirdImg"></div>
              <div className="fourthImg"></div>
            </div>
          </div>
          <div className="description">
            <span>Lances la roue,</span>
            <br />
            <span>Choisis un motif,</span>
            <br />
            <span>On trouve l'artiste.</span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Home;
