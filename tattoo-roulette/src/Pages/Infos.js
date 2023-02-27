import React from "react";
import Header from "../Components/Header";
import Soins from "../Components/Soins";
import Articles from "../Components/Articles";

const Infos = () => {
  return (
    <>
      <Header />
      <section id="infos">
        <Soins />
        <Articles />
      </section>
    </>
  );
};

export default Infos;
