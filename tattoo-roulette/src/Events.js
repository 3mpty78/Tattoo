document.addEventListener("DOMContentLoaded", () => {
  let parent = document.querySelector(".splitview"),
    topPanel = parent.querySelector(".top"),
    handle = parent.querySelector(".handle"),
    skewHack = 0,
    delta = 0;

  if (parent.className.indexOf("skewed") != -1) {
    skewHack = 1000;
  }
  parent.addEventListener("mousemove", (event) => {
    delta = (event.clientX - window.innerWidth / 2) * 0.5;
    handle.getElementsByClassName.left = event.clientX + delta + "px";
    topPanel.getElementsByClassName.width =
      event.clientX + skewHack + delta + "px";
  });
});
