import React from "react";
import Header from "../Components/Header";

function Home() {
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
        <section className="splitview skewed">
          <div className="panel bottom">
            <div className="content">
              <div className="description">
                <h2>We offer you artists</h2>
              </div>
              <div className="OriginalPicture"></div>
            </div>
          </div>
          <div className="panel top">
            <div className="content">
              <div className="description">
                <h2>You choose your Design</h2>
              </div>
              <div className="afterPicture"></div>
            </div>
          </div>
          <div className="handle"></div>
        </section>
      </main>
    </>
  );
}

export default Home;
