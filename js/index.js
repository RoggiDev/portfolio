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
    onComplete() {
      loaderOverlay.style.pointerEvents = "none";

      body.style.overflowY = "visible";
      body.style.height = "100%";

      // ! Typing animation
      const occupation = document.querySelector(".c-hero-subtitle");

      occupation.textContent = "";

      let typed = new Typed(occupation, {
        strings: ["React Developer", "Frontend Developer", "Web Developer"],
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

// ! About
const dataNumber = document.querySelectorAll(".c-data-number");

dataNumber.forEach((data) => {
  const endValue = parseInt(data.textContent.trim(), 10);

  const counter = { val: 0 };

  gsap.fromTo(
    counter,
    {
      val: 0,
    },
    {
      scrollTrigger: {
        trigger: ".c-data",
        start: "top 90%",
        toggleActions: "play none none reverse",
        // end: "top 80%",
        // scrub: true,
        // markers: true,
      },
      val: endValue,
      duration: 0.75,
      ease: "power1.out",
      onUpdate() {
        const v = Math.round(counter.val);

        data.textContent = v < 10 ? `0${v}` : v;
      },
    },
  );
});

// ! My Stack
gsap.from(".c-stack-card", {
  scrollTrigger: {
    trigger: ".c-grid",
    start: "top bottom",
    toggleActions: "play none none reverse",
    // markers: true,
  },
  y: 100,
  opacity: 0,
  ease: "power2.inOut",
  duration: 0.8,
  stagger: 0.1,
});

const stackCards = document.querySelectorAll(".c-stack-card");

stackCards.forEach((card) => {
  const hoverTween = gsap.to(card, {
    scale: 1.05,
    duration: 0.25,
    ease: "ease2.inOut",
    paused: true,
    overwrite: "auto",
  });

  card.addEventListener("mouseenter", () => hoverTween.play());
  card.addEventListener("mouseleave", () => hoverTween.reverse());
});

// ! Experience
gsap.set(".c-timeline-line", {
  height: "0%",
});

gsap.set(".c-timeline-dot", {
  top: "0%",
});

gsap.to(".c-timeline-line", {
  scrollTrigger: {
    trigger: ".c-timeline",
    start: "top bottom",
    end: "bottom 10%+=56",
    scrub: 1,
    // markers: true,
  },
  height: "100%",
  duration: 1,
  ease: "power1.inOut",
});

gsap.to(".c-timeline-dot", {
  scrollTrigger: {
    trigger: ".c-timeline",
    start: "top bottom",
    end: "bottom 10%+=56",
    scrub: 1,
    // markers: true,
  },
  top: "100%",
  duration: 1,
  ease: "power1.inOut",
});

document.querySelectorAll(".c-work-experience").forEach((card) => {
  const wrapper = card.closest(".c-work-trigger");
  const baseShadow = "inset 0 1px 2px #ffffff50";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top+=56",
      scrub: 1,
      // markers: true,
    },
  });

  tl.fromTo(
    card,
    {
      boxShadow: `${baseShadow}, 0 0 0px var(--primary-color)`,
    },
    {
      boxShadow: `${baseShadow}, 0 0 10px var(--primary-color)`,
      ease: "none",
    },
  ).to(card, {
    boxShadow: `${baseShadow}, 0 0 0px var(--primary-color)`,
    ease: "none",
  });
});

// ! Projects
document.querySelectorAll(".c-card").forEach((card, index) => {
  const wrapper = card.closest(".c-card-trigger");
  const isRight = card.classList.contains("c-card-right");

  gsap.from(card, {
    scrollTrigger: {
      trigger: wrapper,
      start: "top 80%",
      end: "top center+=28",
      scrub: 0.5,
      // markers: true,
    },
    opacity: 0,
    x: isRight ? 100 : -100,
    y: 50,
    willChange: "transform, opacity",
  });
});
