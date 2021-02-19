import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sectiones = document.querySelectorAll('section');
const halfHeight = window.innerHeight / 2;
const tl = gsap.timeline({});

gsap.utils.toArray(sectiones).forEach((section, idx) => {
  const wrapper = section.querySelector('.wrapper');
  const offsetWidth = wrapper.offsetWidth;
  gsap.fromTo(wrapper, {
    opacity: 0,
    x: idx % 2 ? wrapper.offsetWidth : wrapper.offsetWidth * -1,
  }, {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: wrapper,
      // scrub: 1,
      // markers: true,
      toggleActions: 'restart none resume none',
      start: 'top bottom',
      end: `top top+=${halfHeight}px`
    }
  })
});

gsap.to(document.getElementsByTagName('body')[0], {
  backgroundColor: '#000',
  scrollTrigger: {
    trigger: '#bodyStartBlack',
    // scrub: 1,
    toggleActions: 'restart none reverse reverse',
    markers: true,
    start: 'top center'
  }
})
