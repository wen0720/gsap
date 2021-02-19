import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    pin: true,
    pinSpacing: false,
    start: 'top top',
  });
});

ScrollTrigger.create({
  snap: 1 / 3 // snap whole page to the closest section!
});
