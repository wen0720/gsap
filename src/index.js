import gsap from 'gsap';
// gsap.registerPlugin('AttrPlugin');

const svgOrigin = document.getElementById('svgOrigin');
const transformOrigin = document.getElementById('transformOrigin');
const boxes = document.querySelectorAll('.box');
let tween = gsap.to({}, {duration: 1});

const rotateSvgOrigin = () => {
  tween.seek(0).kill(); // reset
  tween = gsap.to(boxes, {duration: 1, rotation:360, svgOrigin:"150 100"});
  // 設定 svg origin 可以讓所有 svg 裡的元素，以此為 transform-origin（only support px base）
};

const rotateSvgRectSelf = () => {
  tween.seek(0).kill(); // reset
  tween = gsap.to(boxes, {duration: 1, rotation: 360, transformOrigin: '50% 50%'})
  // 以自己(<rect>)的 transition-origin 為基準
}

svgOrigin.addEventListener('click', () => {
  rotateSvgOrigin();
});

transformOrigin.addEventListener('click', () => {
  rotateSvgRectSelf();
});

//===========//
// 透過 attrplugin 操作 attr
const tl = gsap.timeline({
  defaults: { duration: 1 }
})
tl.to('#cssCircle', { x: 100, scale: 2, stroke: '#fff' })
  .to('#cssCircle', { strokeWidth: '20px' })
  .to('#attrCircle', { attr: { cx: 500 } })
  .to('#attrRectangle', { attr: { rx: 20 } })

//===========//
// 透過 % 數操作 transform
const tl2 = gsap.timeline();
tl2.to('.rect', {
  duration: 1.2, // 動畫移動的時間
  xPercent: 100,
  stagger: 1, // 每個觸發的間距
})
// 動畫總時間為：3間距*1s + 1.2s(duration) = 4.2
console.log(tl2);
