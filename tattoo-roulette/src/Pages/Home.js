import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <section className="welcome">
          <h2>
            Find the perfect <strong>design</strong>, <br />
            We find the perfect <span>artist</span>.
          </h2>
        </section>
        <section className="cards">
          <article>
            <div className="freaksPicture"></div>
            <h3>Freaks and Geeks Tattoo</h3>
            <h4>Tattoo shop based in Paris</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              voluptatem vel officiis accusantium hic sed laborum deserunt autem
              totam fuga.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
