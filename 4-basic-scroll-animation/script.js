const tl = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".middle",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
  },
});
tl.from(".head", { opacity: 0, y: -300 });
tl.from(".title", {
  xPercent: -100,
  stagger: 0.1,
})
  .from(
    ".desc",
    {
      stagger: 0.1,
      xPercent: 100,
      opacity: 0,
    },
    "<"
  )
  .from(
    ".box",
    {
      duration: 1.5,
      ease: "power4.out",
      scaleY: 0,
      y: 50,
    },
    "<80%"
  );
