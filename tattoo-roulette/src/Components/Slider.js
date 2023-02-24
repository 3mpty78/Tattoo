import { useState } from "react";
import { useWindowListener } from "./WindowListener";

export default function Slider() {
  const [position, setPosition] = useState({ delta: 0 });
  let topPanel = document.querySelector(".top");
  let handle = document.querySelector(".handle");
  let parent = document.querySelector(".splitview");
  let skew = 0;

  useWindowListener("mousemove", (e) => {
    setPosition({
      delta: (e.clientX - window.innerWidth / 2) * 0.5,
    });
    if (parent.className.indexOf("skewed") !== -1) {
      skew = 1000;
    }
    topPanel.style.width = e.clientX + position.delta + skew + "px";
    handle.style.left = e.clientX + position.delta + "px";
  });

  return (
    <>
      <section className="splitview skewed">
        <div className="panel bottom">
          <div className="content">
            <div className="description">
              <h2>On trouve l'artiste</h2>
            </div>
          </div>
        </div>
        <div className="panel top">
          <div className="content">
            <div className="description">
              <h2>Trouves ton motif</h2>
            </div>
            <div className="afterPicture"></div>
          </div>
        </div>
        <div className="handle" />
      </section>
    </>
  );
}
