document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".c-timeline-line", {
    height: "0%",
  });

  gsap.set(".c-timeline-dot", {
    top: "0%",
  });

  gsap.to(".c-timeline-line", {
    height: "100%",
    scrollTrigger: {
      trigger: ".c-timeline",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  gsap.to(".c-timeline-dot", {
    top: "100%",
    scrollTrigger: {
      trigger: ".c-timeline",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });
});

document.querySelectorAll('.offcanvas a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvasEl = document.querySelector(".offcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  });
});
