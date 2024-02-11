const tl = gsap.timeline({
  duration: 0.5,
  ease: "bound.out",
  scrollTrigger: {
    trigger: ".animated-section",
    start: "top center",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
});

tl.from([".heading", "p"], {
  yPercent: -150,
  stagger: 0.2,
}).from(".heading span", {
  opacity: 0,
  x: 100,
});

const scrubTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".watermark",
    start: "top-=20% 60%",
    end: "bottom 100%",
    toggleActions: "play reverse play reverse",
    scrub: 2,
  },
});

scrubTl
  .to(".watermark", {
    top: 0,
    left: 0,
  })
  .from(".line", { scaleY: 0, transformOrigin: "center center" });
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
