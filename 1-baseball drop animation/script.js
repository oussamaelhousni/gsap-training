const tl = gsap.timeline();

// start animating
tl.fromTo(
  ".ball",
  {
    yPercent: -600,
    rotate: 290,
  },
  {
    yPercent: -50,
    rotate: 0,
    duration: 2,
    ease: "bounce.out",
  }
)
  .fromTo(
    ".line",
    {
      scaleX: 0,
    },
    {
      scaleX: 1,
      duration: 2,
      ease: "power4.out",
    }
  )
  .fromTo(
    ".welcome",
    {
      x: -300,
    },
    { x: 0, duration: 0.5 },
    "<50%"
  );
