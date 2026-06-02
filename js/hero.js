gsap.set(".hero-char", { y: 100, opacity: 0 });
gsap.set(".hero-line", { scaleX: 0 });
gsap.set(".product-card", { y: 150, opacity: 0 });
gsap.set(".featured-card", { clipPath: "inset(0 100% 0 0)", opacity: 1 });
gsap.set(".featured-card-2", { clipPath: "inset(0 100% 0 0)", opacity: 1 });
gsap.set(".featured-card-3", { clipPath: "inset(0 100% 0 0)", opacity: 1 });

function animateHero() {
  gsap.to(".hero-char", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power4.out",
    stagger: {
      each: 0.08,
      from: "random",
    },
  });
  gsap.to(".hero-line", {
    scaleX: 1,
    duration: 1.2,
    ease: "power4.out",
    transformOrigin: "left",
  });
  gsap.to(".product-card", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5,
    stagger: {
      each: 0.1,
      from: "left",
    },
  });
  gsap.to(".featured-card", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: "power4.inOut",
    delay: 0.7,
    stagger: {
      each: 0.15,
      from: "left",
    },
  });
  gsap.to(".featured-card-2", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: "power4.inOut",
    delay: 0.9,
    stagger: {
      each: 0.15,
      from: "left",
    },
  });
  gsap.to(".featured-card-3", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: "power4.inOut",
    delay: 1.1,
    stagger: {
      each: 0.15,
      from: "left",
    },
  });
}
