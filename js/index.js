document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // ! My Stack
  gsap.from(".c-stack-card", {
    scrollTrigger: {
      trigger: ".c-grid",
      start: "top bottom",
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
    const wrapper = card.closest(".c-work-wrapper");

    const baseShadow = "inset 0 1px 2px #ffffff50";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "top top+=56",
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
    const wrapper = card.closest(".c-card-wrapper");
    const left = card.getBoundingClientRect().left;

    let x = 0;

    if (card.classList.contains("c-card-right")) {
      x = left * -1;
    }

    if (card.classList.contains("c-card-left")) {
      x = left * 1;
    }

    gsap.fromTo(
      card,
      {
        x: x,
        y: 75,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: wrapper,
          start: "top 90%",
          // end: "top 40%",
          // scrub: 1,
          // markers: true,
        },
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      },
    );
  });
});
