import { renderWorkExperience } from "./shared/workExperience.js";
import { renderProjects } from "../js/shared/projects.js";
import { typingAnimation } from "./shared/typing.js";

const loadAllComponents = async () => {
  const navbar = document.querySelector("custom-navbar");
  const workExperienceCards = document.querySelectorAll(
    "custom-work-experience-card",
  );
  const projectCards = document.querySelectorAll("custom-project-card");
  const footer = document.querySelector("custom-footer");

  await navbar.translationsReady;
  await navbar.updateComplete;

  await Promise.all(
    [...workExperienceCards].map(async (workExperienceCard) => {
      await workExperienceCard.translationsReady;
      await workExperienceCard.updateComplete;
    }),
  );

  await Promise.all(
    [...projectCards].map(async (projectCard) => {
      await projectCard.translationsReady;
      await projectCard.updateComplete;
    }),
  );

  await footer.updateComplete;
};

const animationConfig = () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

const importVisualEffects = async () => {
  await import("./shared/particles.js");
  await import("./shared/animations.js");
};

const hideSpinner = () => {
  const loaderOverlay = document.querySelector(".c-loader-overlay");

  gsap.to(loaderOverlay, {
    opacity: 0,
    duration: 0.6,
    delay: 2,
    ease: "power1.out",
    async onComplete() {
      const body = document.body;
      const loaderOverlay = document.querySelector(".c-loader-overlay");

      loaderOverlay.style.pointerEvents = "none";

      body.style.overflowY = "visible";
      body.style.height = "100%";

      typingAnimation();
    },
  });
};

// DOM Content Loaded
document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderWorkExperience();
    renderProjects();
  },
  { once: true },
);

// On Load
window.addEventListener(
  "load",
  async () => {
    const body = document.body;

    gsap.set(body, {
      overflowY: "hidden",
      height: "100vh",
    });

    await loadAllComponents();
    animationConfig();
    await importVisualEffects();
    hideSpinner();
  },
  { once: true },
);

// Hash Change
window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
});

// Link Hide Offcanvas
document.querySelectorAll('.offcanvas a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  });
});
