import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause" // 剛進入視區時/ scroll end 超過時 start 時 / 再次back回視區時 / scroll start 超過 end 時
});

gsap.to(".orange p", {
  scrollTrigger: {
    trigger: ".orange",
    onEnter() {
      console.log('onEnter-restart', 'toggleAction 的第 1 個參數')
    },
    onEnterBack() {
      console.log('onEnterBack-resume', 'toggleAction 的第 3 個參數')
    },
    onLeave() {
      console.log('onLeave-pause', 'toggleAction 的第 2 個參數')
    },
    onLeaveBack() {
      console.log('onLeaveBack-pause', 'toggleAction 的第 4 個參數')
    }
  },
  duration: 2,
  rotation: 360
});

gsap.to(".red", {
  scrollTrigger: {
    trigger: ".red",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
    pin: true,
    markers: true,
  },
  duration: 1,
  backgroundColor: "#FFA500",
  ease: "none",
});

gsap.to(".yoyo p", {
  scrollTrigger: ".yoyo",
  scale: 2,
  repeat: 5, // repeat 的意思，並不會算一次，所以其實是6次
  yoyo: true,
  ease: "power2"
});
