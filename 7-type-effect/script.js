const text = new SplitType("#h1");

const tl = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

tl.from(text.chars, {
  y: 60,
  opacity: 0,
  skewX: 20,
  stagger: 0.01,
  duration: 1,
}).to(text.chars, {
  y: -60,
  opacity: 0,
  stagger: 0.01,
  skewX: 20,
});
