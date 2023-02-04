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
            <div className="freaksPhoto"></div>
            <h3>Freaks And Geeks Tattoo</h3>
            <h4>Salon à Paris</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse
              perspiciatis impedit quo iure dolore animi velit facilis, ex
              assumenda.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
