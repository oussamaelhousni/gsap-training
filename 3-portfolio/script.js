const links = [...document.querySelectorAll(".active")];

links.forEach((link) => {
  const tl = gsap.timeline();
  const active = link.querySelector(".activeList");
  const hidden = link.querySelector(".hiddenList");
  tl.to([active, hidden], {
    yPercent: -100,
    duration: 0.5,
  });
  tl.pause();
  link.addEventListener("mouseenter", () => {
    tl.play();
    console.log("enter");
  });

  link.addEventListener("mouseleave", () => {
    console.log("leave");
    tl.reverse();
  });
});
