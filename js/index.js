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
        strings: [
          "Front End Engineer",
          "Creative Developer",
          "Web Developer",
          "404 Not Found",
        ],
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

// ! 3D Card Animation
function animateCard3D(card) {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    const tiltX = (relativeY - 0.5) * -3;
    const tiltY = (relativeX - 0.5) * 4;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 0.97,
      transformPerspective: 700,
      duration: 1,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });
  });
}

// ! About
const aboutCard = document.querySelector(".c-about-card");
animateCard3D(aboutCard);

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
const stackCards = document.querySelectorAll(".c-stack-card");

gsap.from(stackCards, {
  scrollTrigger: {
    trigger: ".c-grid",
    start: "top bottom",
    toggleActions: "play none none reverse",
    // markers: true,
  },
  y: 100,
  opacity: 0,
  rotationX: -45,
  rotationY: -45,
  ease: "power2.inOut",
  duration: 0.8,
  stagger: 0.1,
});

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
    end: "bottom 20%+=56",
    scrub: 0.5,
    // markers: true,
  },
  height: "100%",
  duration: 1,
  ease: "none",
});

gsap.to(".c-timeline-dot", {
  scrollTrigger: {
    trigger: ".c-timeline",
    start: "top bottom",
    end: "bottom 20%+=56",
    scrub: 0.5,
    // markers: true,
  },
  top: "100%",
  duration: 1,
  ease: "none",
});

const workExperienceCards = document.querySelectorAll(".c-work-experience");

workExperienceCards.forEach((card) => {
  const wrapper = card.closest(".c-work-trigger");

  gsap.from(card, {
    scrollTrigger: {
      trigger: wrapper,
      start: "top 80%",
      end: "top center+=28",
      scrub: 0.5,
      // markers: true,
    },
    opacity: 0,
    x: 100,
    rotationX: 2,
    rotationY: -40,
    rotationZ: 2,
    willChange: "transform, opacity",
  });
});

// ! Projects
document.querySelectorAll(".c-card").forEach((card, index) => {
  const wrapper = card.closest(".c-card-trigger");
  const isRight = card.classList.contains("c-card-right");

  gsap.from(card, {
    scrollTrigger: {
      trigger: wrapper,
      start: "top 90%",
      end: "35% center+=28",
      scrub: 0.5,
      // markers: true,
    },
    opacity: 0,
    x: isRight ? 75 : -75,
    y: 50,
    rotationX: -90,
    rotationY: isRight ? -6 : 6,
    rotationZ: isRight ? -3 : 3,
    ease: "power2.out",
    willChange: "transform, opacity",
  });
});
