import { getTranslations } from "./i18n.js";

// ! Spinner
window.addEventListener("load", () => {
  const body = document.body;
  const loaderOverlay = document.querySelector(".c-loader-overlay");

  gsap.set(body, {
    overflowY: "hidden",
    height: "100vh",
  });

  gsap.to(loaderOverlay, {
    opacity: 0,
    duration: 0.6,
    delay: 2,
    ease: "power1.out",
    async onComplete() {
      loaderOverlay.style.pointerEvents = "none";

      body.style.overflowY = "visible";
      body.style.height = "100%";

      // ! Typing animation
      const occupation = document.querySelector(".c-hero-subtitle");

      occupation.textContent = "";

      const { professionalTitles } = await getTranslations();

      new Typed(occupation, {
        strings: professionalTitles,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        smartBackspace: true,
        showCursor: false,
        loop: true,
      });
    },
  });
});
