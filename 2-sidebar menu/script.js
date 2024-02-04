const slideBtn = document.querySelector(".slide-btn");
const tl = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

tl.pause();

/* tl.to(".sidebar", {
  x: 0,
}).to(".main", { x: 0 }, "<"); */

tl.to([".main", ".sidebar"], { x: 0, stagger: 0.1 });
slideBtn.addEventListener("click", () => {
  if (slideBtn.dataset.side === "hidden") {
    slideBtn.dataset.side = "visible";
    tl.play();
  } else {
    slideBtn.dataset.side = "hidden";
    tl.reverse();
  }
});
