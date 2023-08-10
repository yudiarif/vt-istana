gsap.from(".about_section .heading_container h2", { x: -200, duration: 1.5 });
gsap.from(".about_section .detail-box p", { x: -200, duration: 1.5 });
gsap.from(".about_section .detail-box a", { x: -200, duration: 1.5 });
gsap.from(".about_section .img-box iframe", { x: 200, duration: 2 });

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.from(".hot_section .heading_container h2", {
  scrollTrigger: {
    trigger: ".hot_section .heading_container h2",
  },
  x: -200,
  duration: 1.2,
});
gsap.from(".hot_section .p-koleksi", {
  scrollTrigger: {
    trigger: ".hot_section p",
  },
  x: 50,
  duration: 2.5,
});

document.querySelectorAll("#myNav .overlay-content a").forEach((a, index) => {
  a.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: { y: ".hot_section", offsetY: 70 } });
  });
});
