import { getTranslations } from "../i18n.js";

export const typingAnimation = async () => {
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
};
