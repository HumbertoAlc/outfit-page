const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.8,
    ease: "power2.out",
  });
});

const cursorCards = document.querySelectorAll(
  ".product-card, .featured-card, .featured-card-2, .featured-card-3",
);
cursorCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      width: 80,
      height: 80,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        cursor.innerHTML =
          "<span style='font-size:9px;line-height:1.2;text-align:center;color:white;display:block'>View<br>More</span>";
      },
    });
  });

  card.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      width: 18,
      height: 18,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
