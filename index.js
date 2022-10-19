document.body.addEventListener("mousemove", (event) => {
  gsap.to(".shape", {
    x: event.clientX,
    y: event.clientY,
    stagger: -0.1,
    ease: "power1.out",
  });
});
