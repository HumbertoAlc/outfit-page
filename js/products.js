const productCards = document.querySelectorAll(
  ".product-card, .featured-card, .featured-card-2, .featured-card-3",
);

productCards.forEach((card) => {
  const imgHover = card.querySelector(".img-hover");

  card.addEventListener("mouseenter", () => {
    gsap.to(imgHover, {
      clipPath: "inset(0 0% 0 0)",
      duration: 0.6,
      ease: "power4.inOut",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(imgHover, {
      clipPath: "inset(0 100% 0 0)",
      duration: 0.6,
      ease: "power4.inOut",
    });
  });
});
