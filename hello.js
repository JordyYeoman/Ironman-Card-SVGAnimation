console.log("Systems are online and ready sir.");

const animationSpeed = 500;
const closeLoopAnimation = false;
const SVGMaster  = document.querySelector('.SVG-master');
const SVGMaster2  = document.querySelector('.SVG-master2');

// On hover animations
// _______ SVG MASTER 1 Pieces _______ 
//
SVGMaster.addEventListener("mouseover", function() {
  console.log("Battle Systems Engaged")  
   
anime({
  targets: ".Bottom-Part-Ironman",
  keyframes: [
    { translateY: -7, translateX: -3 },
     // { translateY: 0, translateX: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Piece Left Arm
anime({
  targets: ".Bottom-Part-Ironman-bottomleft-piece",
  keyframes: [
    { rotate: 48, translateX: -8, translateY: 3 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Center - Center Arms
anime({
  targets: ".Bottom-Part-Ironman-bottomcenter-pieces",
  keyframes: [
    { rotate: 21, translateX: -10, translateY: -8 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Piece Right Arm
anime({
  targets: ".Bottom-Part-Ironman-bottomright-piece",
  keyframes: [
    { rotate: 25, translateX: -18, translateY: -15 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});
});


SVGMaster.addEventListener("mouseout", function() {
  console.log("Battle Systems Disengaged")  
   
  anime({
    targets: ".Bottom-Part-Ironman",
    keyframes: [
      //{ translateY: -25, translateX: -10 },
       { translateY: 0, translateX: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Piece Left Arm
  anime({
    targets: ".Bottom-Part-Ironman-bottomleft-piece",
    keyframes: [
      //{ rotate: 35, translateX: -14, translateY: -15 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Center - Center Arms
  anime({
    targets: ".Bottom-Part-Ironman-bottomcenter-pieces",
    keyframes: [
      //{ rotate: 21, translateX: -29, translateY: -18 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Piece Right Arm
  anime({
    targets: ".Bottom-Part-Ironman-bottomright-piece",
    keyframes: [
      //{ rotate: 35, translateX: -50, translateY: -33 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
});



// _______ SVG MASTER 2 Pieces _______ 
//
SVGMaster2.addEventListener("mouseover", function() {
  console.log("Battle Systems 2 Engaged")  
   
anime({
  targets: ".Bottom-Part-Ironman2",
  keyframes: [
    { translateY: -7, translateX: -3 },
     // { translateY: 0, translateX: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Piece Left Arm
anime({
  targets: ".Bottom-Part-Ironman-bottomleft-piece2",
  keyframes: [
    { rotate: 48, translateX: -8, translateY: 3 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Center - Center Arms
anime({
  targets: ".Bottom-Part-Ironman-bottomcenter-pieces2",
  keyframes: [
    { rotate: 21, translateX: -10, translateY: -8 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});


//Bottom Piece Right Arm
anime({
  targets: ".Bottom-Part-Ironman-bottomright-piece2",
  keyframes: [
    { rotate: 25, translateX: -18, translateY: -15 },
     //{ rotate: 0, translateX: 0, translateY: 0 }
  ],
  duration: animationSpeed,
  easing: "cubicBezier(.5, .05, .1, .3)",
  loop: closeLoopAnimation,
});
});


SVGMaster2.addEventListener("mouseout", function() {
  console.log("Battle Systems 2 Disengaged")  
   
  anime({
    targets: ".Bottom-Part-Ironman2",
    keyframes: [
      //{ translateY: -25, translateX: -10 },
       { translateY: 0, translateX: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Piece Left Arm
  anime({
    targets: ".Bottom-Part-Ironman-bottomleft-piece2",
    keyframes: [
      //{ rotate: 35, translateX: -14, translateY: -15 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Center - Center Arms
  anime({
    targets: ".Bottom-Part-Ironman-bottomcenter-pieces2",
    keyframes: [
      //{ rotate: 21, translateX: -29, translateY: -18 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
  
  
  //Bottom Piece Right Arm
  anime({
    targets: ".Bottom-Part-Ironman-bottomright-piece2",
    keyframes: [
      //{ rotate: 35, translateX: -50, translateY: -33 },
       { rotate: 0, translateX: 0, translateY: 0 }
    ],
    duration: animationSpeed,
    easing: "cubicBezier(.5, .05, .1, .3)",
    loop: closeLoopAnimation,
  });
});