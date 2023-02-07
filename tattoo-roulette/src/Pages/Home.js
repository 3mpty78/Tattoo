import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";

function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="welcome">
          <h2>
            Trouves ton <strong>motif</strong>, <br />
            On se charge de l'<span>artiste</span>.
          </h2>
        </section>
        <Slider />
        <Footer />
      </main>
    </>
  );
}

export default Home;
