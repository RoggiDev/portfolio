document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".c-timeline-line", {
    height: "0%",
  });

  gsap.set(".c-timeline-dot", {
    top: "0%",
  });

  gsap.to(".c-timeline-line", {
    scrollTrigger: {
      trigger: ".c-timeline",
      start: "top center",
      end: "bottom center",
      scrub: 2,
      // markers: true,
    },
    height: "100%",
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(".c-timeline-dot", {
    scrollTrigger: {
      trigger: ".c-timeline",
      start: "top center",
      end: "bottom center",
      scrub: 2,
      // markers: true,
    },
    top: "100%",
    duration: 1,
    ease: "power1.inOut",
  });
});

document.querySelectorAll('.offcanvas a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  });
});
