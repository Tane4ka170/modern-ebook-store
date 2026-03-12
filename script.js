(function () {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      const bars = hamburger.querySelectorAll(".bar");
      hamburger.classList.toggle("active");
      if (navMenu.classList.contains("open")) {
        bars[0].style.transform = "rotate(45deg) translate(6px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
      } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
      }
    });
  }
})();
