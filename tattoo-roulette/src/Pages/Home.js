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
            <p>
              <span>Trouves ton motif</span>
            </p>
            <p>
              <span>On trouve l'artiste</span>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Home;
