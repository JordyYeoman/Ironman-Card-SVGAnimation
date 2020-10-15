console.log("Systems are online and ready sir.");

const animationSpeed = 1500;
const loopAnimation = true;


anime({
  targets: ".Top-Part-Ironman",
  keyframes: [
    { translateY: 25, translateX: -11 },
     { translateY: 0, translateX: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: loopAnimation,
});

anime({
  targets: ".Bottom-Part-Ironman",
  keyframes: [
    { translateY: -25, translateX: -10 },
      { translateY: 0, translateX: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: loopAnimation,
});




anime({
  targets: ".Bottom-Part-Ironman-bottomleft-piece",
  keyframes: [
    { rotate: 35, translateX: -14, translateY: -15 },
     { rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: loopAnimation,
});



//Bottom Center - Center Arms
anime({
  targets: ".Bottom-Part-Ironman-bottomcenter-pieces",
  keyframes: [
    { rotate: 21, translateX: -29, translateY: -18 },
     { rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: loopAnimation,
});


//Bottom Piece Right Arm
anime({
  targets: ".Bottom-Part-Ironman-bottomright-piece",
  keyframes: [
    { rotate: 35, translateX: -50, translateY: -33 },
     { rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: loopAnimation,
});

