export default function Toggler() {
  const hamburgerBtn = document.querySelector(".nav-toggler");
  const navigation = document.querySelector(".headerito");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}
