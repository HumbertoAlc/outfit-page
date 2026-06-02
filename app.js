// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis({
//   duration: 1.2,
//   smoothWheel: true,
//   smoothTouch: false,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
// // mantien conectado lenis con gsap
// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

// // HERO REVEAL

// gsap.from(".hero-title", {
//   y: 200,
//   opacity: 0,
//   duration: 1.5,
//   ease: "power4.out",
//   delay: 2.5,
// });

// gsap.from(".hero-bottom", {
//   y: 80,
//   opacity: 0,
//   duration: 1.2,
//   delay: 2.8,
// });

// // PARALLAX IMAGE

// gsap.to(".image-wrap img", {
//   yPercent: 15,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".image-wrap",
//     scrub: true,
//   },
// });

// // PRODUCT ANIMATIONS

// gsap.utils.toArray(".product").forEach((product) => {
//   gsap.from(product, {
//     y: 120,
//     opacity: 0,
//     duration: 1.5,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: product,
//       start: "top 85%",
//     },
//   });

//   gsap.to(product.querySelector("img"), {
//     scale: 1,
//     ease: "none",
//     scrollTrigger: {
//       trigger: product,
//       scrub: true,
//     },
//   });
// });

// // CUSTOM CURSOR

// const cursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, {
//     x: e.clientX - 9,
//     y: e.clientY - 9,
//     duration: 0.15,
//   });
// });

// // MAGNETIC EFFECT

// document.querySelectorAll(".magnetic").forEach((el) => {
//   el.addEventListener("mousemove", (e) => {
//     const rect = el.getBoundingClientRect();

//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     gsap.to(el, {
//       x: x * 0.3,
//       y: y * 0.3,
//       duration: 0.3,
//     });
//   });

//   el.addEventListener("mouseleave", () => {
//     gsap.to(el, {
//       x: 0,
//       y: 0,
//       duration: 0.5,
//       ease: "elastic.out(1,0.3)",
//     });
//   });
// });

// // FULLSCREEN MENU

// const menuBtn = document.querySelector(".menu-btn");

// let menuOpen = false;

// const menuTl = gsap.timeline({
//   paused: true,
// });

// menuTl.to(".menu", {
//   clipPath: "circle(150% at top right)",
//   duration: 1.2,
//   ease: "power4.inOut",
// });

// menuBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   menuOpen = !menuOpen;

//   if (menuOpen) {
//     menuTl.play();
//   } else {
//     menuTl.reverse();
//   }
// });
