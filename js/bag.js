const bagBtn = document.querySelector(".bag-link");
const bagOverlay = document.querySelector(".bag-overlay");
const bagPage = document.querySelector(".bag-page");
let bagOpen = false;

gsap.set(".bag-char", { y: 100, opacity: 0 });
gsap.set(bagOverlay, { y: "100%" });

bagBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (bagOpen) return;
  bagOpen = true;

  // Sube la ventana roja
  gsap.to(bagOverlay, {
    y: 0,
    duration: 0.9,
    ease: "power4.inOut",
    onComplete: () => {
      // Aparece el texto BAG
      gsap.to(".bag-char", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: { each: 0.08, from: "random" },
        onComplete: () => {
          // Texto y ventana desaparecen juntos hacia arriba
          gsap.to(".bag-char", {
            y: -100,
            opacity: 0,
            duration: 0.6,
            ease: "power4.in",
          });
          gsap.to(bagOverlay, {
            y: "-100%",
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
              bagPage.style.display = "block";
              gsap.set(bagOverlay, { y: "100%" });
              gsap.set(".bag-char", { y: 100, opacity: 0 });
            },
          });
        },
      });
    },
  });
});
