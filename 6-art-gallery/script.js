const scrollTl = gsap.timeline({
  defaults: {
    ease: "power4.inOut",
    duration: 1,
    stagger: 0.3,
  },
});

gsap.set("img", {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
});

scrollTl
  .from(".card", {
    y: -100,
    stagger: 0.3,
  })
  .to(
    "img",
    {
      clipPath: "polygon(0 87%, 100% 61%, 100% 100%, 0% 100%)",
      stagger: 0.3,
    },
    "<"
  )
  .to(
    "img",
    {
      clipPath: "", // Set the same clipPath as the end value of the previous tween
    },
    "<80%"
  )
  .from(
    ".line",
    {
      scaleX: 0,
    },
    "<"
  );
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
