import React from "react";
import Header from "../Components/Header";
import Soins from "../Components/Soins";
import VraiFaux from "../Components/VraiFaux";

const Infos = () => {
  return (
    <>
      <Header />
      <section id="infos">
        <Soins />
        <VraiFaux />
      </section>
    </>
  );
};

export default Infos;
