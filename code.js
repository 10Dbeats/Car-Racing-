var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2190e9c3-4103-4e1f-990b-1f115041e213","865854f5-7eb0-4865-83d2-30f612e1ccea","e6b52b11-a010-414b-b4c6-f0308fe88808","b415e9ae-1d1f-47ba-a1d2-896951bf32f5","cf0cfbae-4dd8-4cb1-86cb-61dbea85985d","01aff8be-47ec-468d-9785-1cdd13e88557","beb853db-5018-4755-9c8f-e324224a557d","6fe87bb0-821c-48ec-8f75-62939007cc51","1d334eb1-f09d-4a3c-91cf-33bda7b217ca","ff1b1f58-57a4-4699-aef0-93e227e19940"],"propsByKey":{"2190e9c3-4103-4e1f-990b-1f115041e213":{"name":"car3","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"9HURyacoxIzMmQ5CZ9O_MvvfTKUVXNdX","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/2190e9c3-4103-4e1f-990b-1f115041e213.png"},"865854f5-7eb0-4865-83d2-30f612e1ccea":{"name":"car4","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"PEOD1m3HX7zWUZFHJBJv7NSYLFo5NKfP","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/865854f5-7eb0-4865-83d2-30f612e1ccea.png"},"e6b52b11-a010-414b-b4c6-f0308fe88808":{"name":"car5","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"XzB8nHfGEeB_tlsnA_t5eo6o4fAShcoP","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/e6b52b11-a010-414b-b4c6-f0308fe88808.png"},"b415e9ae-1d1f-47ba-a1d2-896951bf32f5":{"name":"car","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"8V06f0v4bWQxa0UlT6iwNaq118OyO5yo","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/b415e9ae-1d1f-47ba-a1d2-896951bf32f5.png"},"cf0cfbae-4dd8-4cb1-86cb-61dbea85985d":{"name":"car2","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":".y6vL6PV95_HKbHuUymq96vkeWl2hhF3","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/cf0cfbae-4dd8-4cb1-86cb-61dbea85985d.png"},"01aff8be-47ec-468d-9785-1cdd13e88557":{"name":"car6","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"L9LYcLSOOtf3w4HeiqqqJZmUxse5EM5a","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/01aff8be-47ec-468d-9785-1cdd13e88557.png"},"beb853db-5018-4755-9c8f-e324224a557d":{"name":"road","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"s2QTeb.wM434pEUvf2WLLMa1wzYRz.kn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/beb853db-5018-4755-9c8f-e324224a557d.png"},"6fe87bb0-821c-48ec-8f75-62939007cc51":{"sourceSize":{"x":400,"y":400},"frameSize":{"x":400,"y":400},"frameCount":1,"frameDelay":4,"name":"presskey","sourceUrl":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/6fe87bb0-821c-48ec-8f75-62939007cc51.png","size":27534,"version":"oSORKYPQazkP7o4z9iQovA4hcpiZdUv.","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/6fe87bb0-821c-48ec-8f75-62939007cc51.png"},"1d334eb1-f09d-4a3c-91cf-33bda7b217ca":{"sourceSize":{"x":400,"y":400},"frameSize":{"x":400,"y":400},"frameCount":1,"frameDelay":4,"name":"endline","sourceUrl":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/1d334eb1-f09d-4a3c-91cf-33bda7b217ca.png","size":20307,"version":"tbl11Nda2L10jiC0pBsxFbxzbpCGfyRN","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/1d334eb1-f09d-4a3c-91cf-33bda7b217ca.png"},"ff1b1f58-57a4-4699-aef0-93e227e19940":{"sourceSize":{"x":400,"y":400},"frameSize":{"x":400,"y":400},"frameCount":1,"frameDelay":4,"name":"winro","sourceUrl":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/ff1b1f58-57a4-4699-aef0-93e227e19940.png","size":36792,"version":"feC1yY4xi0qWd1IxFS.n1aVT84q5id47","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/YqFiW9Co10hnU64V_yXfKqvwpuC-kwpwhy4s8XP1XVY/ff1b1f58-57a4-4699-aef0-93e227e19940.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Variables
var time = 0;
var start = 1;
var timer = 0;
var timer2 = 0;
//Sprites
var road = createSprite(205, 200);
road.setAnimation("road");
road.width = 1000;
road.height = 1000;
road.scale = 0.5;
var car = createSprite(200, 300);
car.setAnimation("car");
car.scale = 0.5;
var car2 = createSprite(100, 200);
car2.setAnimation("car2");
car2.scale = 0.5;
var car3 = createSprite(325, 350);
car3.setAnimation("car3");
car3.scale = 0.5;
var car4 = createSprite(50, 30);
car4.setAnimation("car4");
car4.scale = 0.5;
var car5 = createSprite(350, 85);
car5.setAnimation("car5");
car5.scale = 0.5;
var car6 = createSprite(100, 10);
car6.setAnimation("car6");
car6.scale = 0.5;
var sprite = createSprite(200, 200);
sprite.setAnimation("presskey");
sprite.scale = 1;
//Functions
function draw() {
 // make control 
  if (keyDown("right")) {
    car.x = car.x + 12;
  }
  if (keyDown("left")) {
    car.x = car.x + -12;
  }
  // Dying
  if (car.isTouching(car2)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("endline");
  }
  if (car.isTouching(car3)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("endline");
  }
  if (car.isTouching(car4)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("endline");
  }
  if (car.isTouching(car5)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("endline");
  }
  if (car.isTouching(car6)) {
    var screen = createSprite(200, 200);
    screen.setAnimation("endline");
  }
  //So No cars spawn on top of each other
  if (car2.isTouching(car3)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car4)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car5)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car2.isTouching(car6)) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car4)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car5)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car3.isTouching(car6)) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car4.isTouching(car5)) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car4.isTouching(car6)) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car5.isTouching(car6)) {
    car5.y = randomNumber(0, 0);
    car5.x = randomNumber(400, 0);
  }
  //Car Loops
  if (car2.y > 405) {
    car2.y = randomNumber(0, 0);
    car2.x = randomNumber(400, 0);
  }
  if (car3.y > 405) {
    car3.y = randomNumber(0, 0);
    car3.x = randomNumber(400, 0);
  }
  if (car4.y > 405) {
    car4.y = randomNumber(0, 0);
    car4.x = randomNumber(400, 0);
  }
  if (car5.y > 405) {
    car5.y = randomNumber(0, 0);
    car5.x = randomNumber(400, 0);
  }
  if (car6.y > 405) {
    car6.y = randomNumber(0, 0);
    car6.x = randomNumber(400, 0);
  }
  //So you can go off screen and appear on the other side
  if (car.x > 405) {
    car.x = 0;
  }
  if (car.x < -5) {
    car.x = 400;
  }
  //Winning
  if (timer > 44) {
    var screen3 = createSprite(200, 200);
    screen3.setAnimation("winro");
    screen3.scale = 1;
  }
  drawSprites();
  //This is the timer
  if (keyDown("space")) {
    timer2 = World.seconds;
    start = 2;
  }
  if (start == 2) {
    timer = World.seconds - timer2;
    car2.velocityY = 10;
    car3.velocityY = 10;
    car4.velocityY = 10;
    car5.velocityY = 10;
    car6.velocityY = 10;
    sprite.visible = false;
    //Text
    fill("white");
    textSize(20);
    text("Time:",10, 10, 80, 20);
    text(timer, 75, 30);
    textFont("Courier New");
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
