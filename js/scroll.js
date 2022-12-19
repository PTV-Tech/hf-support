gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
let sections = gsap.utils.toArray(".small-sc");

gsap.to(sections, {
xPercent: -100 * (sections.length - 1),
ease: "none",
scrollTrigger: {
      trigger: ".screens-small",
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (sections.length - 1)
      },
      end: "+=3500"
    }
});


const tls0 = gsap.timeline({
    scrollTrigger: {
        trigger: "#frame-1",
        start: "top center",
        end: "top center"
    }
});
const tls1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#frame-2",
        start: "top center",
        end: "top center"
    }
});
const tls2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#frame-3",
        start: "top center",
        end: "top center"
    }
});