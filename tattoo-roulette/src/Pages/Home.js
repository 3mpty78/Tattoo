import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="splitview">
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
