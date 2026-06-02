const cards = document.querySelectorAll(".card");
let cardIndex = 0;

// LOADER TITLE REVEAL
gsap.from(".char", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  stagger: {
    each: 0.08,
    from: "random",
  },
});

// COUNTER
const counter = document.querySelector(".loader-counter");
let count = 0;
const interval = setInterval(() => {
  count++;
  counter.textContent =
    count < 10 ? `00${count}` : count < 100 ? `0${count}` : count;

  if (count % 10 === 0 && cardIndex < cards.length) {
    gsap.to(cards[cardIndex], {
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
    cardIndex++;
  }
  if (count === 100) {
    clearInterval(interval);
    gsap.to(".char, .loader-counter", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power4.in",
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
    gsap.to(".loader-wrapper", {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
      onComplete: () => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        animateHero();
      },
    });
  }
}, 20);
