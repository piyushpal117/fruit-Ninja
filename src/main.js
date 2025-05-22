// import {
//   Application,
//   Graphics,
//   Text,
//   TextStyle,
//   Sprite,
//   Assets,
//   Container,
//   Spritesheet,
//   AnimatedSprite,
//   TilingSprite,
//   BlurFilter,
// } from "pixi.js";
// import { Howl } from "howler";
// // (Optional) Enable PIXI Devtools
// // import { initDevtools } from "@pixi/devtools";
// // initDevtools();

// (async () => {
//   const app = new Application();
//   await app.init({
//     resizeTo: window,
//   });

//   globalThis.__PIXI_APP__ = app;
//   document.body.appendChild(app.canvas);

//   app.canvas.style.position = "absolute";

//   // Rectangle Graphic
//   const rectangle = new Graphics()
//     .rect(100, 100, 200, 150)
//     .fill({
//       color: 0xff0000,
//       alpha: 1,
//     })
//     .stroke({
//       width: 10,
//       color: 0x123456,
//       alpha: 1,
//     });

//   // Star Graphic with interaction
//   const star = new Graphics().star(400, 300, 4, 50, 20).fill({
//     color: 0x0000ff,
//     alpha: 1,
//   });

//   star.eventMode = "static";
//   star.on("mousedown", () => {
//     star.x -= 5;
//     star.y -= 5;
//   });
//   star.cursor = "pointer";

//   // Text with custom style
//   const style = new TextStyle({
//     fontFamily: "Dancing Script",
//     fontSize: 56,
//     fill: "grey",
//     stroke: "white",
//     strokeThickness: 2,
//     dropShadow: true,
//     dropShadowColor: "#0000ff",
//     dropShadowBlur: 4,
//     dropShadowAngle: Math.PI / 6,
//     dropShadowDistance: 6,
//   });

//   const text = new Text({
//     text: "Hello pixi",
//     style,
//   });
//   text.position.set(1000, 20);

//   // Rotating Sprite
//   const texture = await Assets.load("images/base.png");
//   const sprite = Sprite.from(texture);
//   sprite.position.set(600, 200);
//   sprite.anchor.set(0.5, 0.5);
//   sprite.scale.set(0.2, 0.2);

//   app.ticker.add(() => {
//     sprite.rotation += 0.02;
//   });

//   // Random green circles every frame
//   // const circle = new Graphics();
//   // app.ticker.add(() => {

//   //   circle
//   //     .circle(
//   //       Math.random() *  app.screen.width,
//   //       // Math.random() * app.screen.height,
//   //       // app.screen.height,
//   //       15,
//   //       15
//   //     )
//   //     .fill({
//   //       color: 0xff0000,
//   //       alpha: 0.9,
//   //     });
//   // });

// const circles = [];

// app.ticker.add((delta) => {
//   // Spawn new circle at random intervals
//   if (Math.random() < 0.1) {
//     const gfx = new Graphics();
//     gfx.circle(Math.random() * app.screen.width, 0, 15)
//        .fill({ color: 0xff0000, alpha: 0.9 });
//     app.stage.addChild(gfx);

//     circles.push({
//       graphic: gfx,
//       vy: 1 // initial fall speed
//     });
//   }

//   // Animate all circles
//   for (const obj of circles) {
//     obj.vy += 0.1; // gravity
//     obj.graphic.y += obj.vy * delta;
//   }
// });

// // app.stage.addChild(circle);
//   // Load background image for TilingSprite
//   const texture2 = await Assets.load("/images/abstract.jpg");
//   const bgSprite = new TilingSprite({
//     texture: texture2,
//     width: app.screen.width,
//     height: app.screen.height,
//   });
// //   bgSprite.tileScale.set(0.85, 0.85);
//   // app.stage.addChild(bgSprite);
//   bgSprite.filters = new BlurFilter({
//     strength: 10,
//   });

//   app.ticker.add(() => {
//     bgSprite.tilePosition.x += 1;
//   });

//   // Load animated sprite from spritesheet
//   const atlasData = {
//     frames: {
//       frame1: {
//         frame: { x: 0, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame2: {
//         frame: { x: 190, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame3: {
//         frame: { x: 380, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame4: {
//         frame: { x: 570, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame5: {
//         frame: { x: 780, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame6: {
//         frame: { x: 990, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame7: {
//         frame: { x: 1180, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame8: {
//         frame: { x: 1370, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//       frame9: {
//         frame: { x: 1560, y: 0, w: 190, h: 190 },
//         spriteSourceSize: { x: 0, y: 0, w: 190, h: 190 },
//         sourceSize: { w: 190, h: 190 },
//       },
//     },
//     meta: {
//       image: "/images/dragon.png",
//       size: { w: 1900, h: 190 },
//     },
//     animations: {
//       frame: [
//         "frame1",
//         "frame2",
//         "frame3",
//         "frame4",
//         "frame5",
//         "frame6",
//         "frame7",
//         "frame8",
//         "frame9",
//       ],
//     },
//   };

//   const atlasTexture = await Assets.load(atlasData.meta.image);
//   const spritesheet = new Spritesheet(atlasTexture, atlasData);
//   await spritesheet.parse();

//   const animSprite = new AnimatedSprite(spritesheet.animations.frame);
//   animSprite.position.set(600, 400);
//   animSprite.animationSpeed = 0.1;
//   animSprite.play();
//   animSprite.scale.set(1.2, 1.2);
//   // app.stage.addChild(animSprite);

//   const sound = new Howl({
//     src: ["/audio/inner-peace.mp3"],
//     volume: 0.5,
//   });
//   let music = false;

// window.addEventListener("click", () => {
//   if (music) {
//     sound.pause();
//   } else {
//     sound.play();
//   }
//   music = !music;
// //   console.log("music", music);
// });

// const base = await Assets.load("/images/backdrop.png");
// const bg = new TilingSprite({
//   texture: base,
//   width: app.screen.width,
//   height: app.screen.height,
// });
// bg.tileScale.set(1.9, 1.5);
// bg.tilePosition.set(0, 1000);

// app.stage.addChild(bg);
//   // Add remaining graphics to stage
//   // app.stage.addChild(circles);
//   // app.stage.addChild(text);
//   // app.stage.addChild(rectangle);
//   // app.stage.addChild(star);
//   // app.stage.addChild(sprite);
// })();

// import {
//   Application,
//   Graphics,
//   Text,
//   TextStyle,
//   Sprite,
//   Assets,
//   TilingSprite,
//   BlurFilter,
//   Container,
// } from "pixi.js";
// import { Howl } from "howler";

// (async () => {
//   const app = new Application();
//   await app.init({ resizeTo: window });

//   globalThis.__PIXI_APP__ = app;
//   document.body.appendChild(app.canvas);
//   app.canvas.style.position = "absolute";

//   // Load and add background
//   const base = await Assets.load("/images/backdrop.png");
//   const bg = new TilingSprite({
//     texture: base,
//     width: app.screen.width,
//     height: app.screen.height,
//   });
//   bg.tileScale.set(1.9, 1.5);
//   bg.tilePosition.set(0, 1000);
//   app.stage.addChild(bg);

//   // Container for circles to ensure they're drawn above background
//   const circleContainer = new Container();
//   circleContainer.width = 1200;
//   circleContainer.height = 1200;
//   app.stage.addChild(circleContainer);

//   // Falling circles array
//   const circles = [];

//   function spawnCircle() {
//     const gfx = new Graphics();
//     gfx.circle(0, 0, 20)
//       .fill({ color: 0xff0000, alpha: 1 });
//     gfx.x = Math.random() * app.screen.width;
//     gfx.y = Math.random() * app.screen.height;

//     circleContainer.addChild(gfx);

//     circles.push({
//       gfx,
//       vy: 2 + Math.random() * 2,
//     });
//     console.log("Adding circle at", gfx.x, gfx.y);

//   }

//   app.ticker.add((delta) => {
//     // Randomly spawn new circles
//     if (Math.random() < 0.1) {
//       spawnCircle();
//     }

//     // Update all circles
//     for (const obj of circles) {
//       obj.vy += 0.05; // gravity
//       obj.gfx.y += obj.vy * delta;
//     }
//   });

//   // Optional text overlay
//   const text = new Text({
//     text: "grab all the falling Objects as fast as you can-",
//     style: new TextStyle({
//       fontFamily: "Arial",
//       fontSize: 20,
//       fill: "white",
//       stroke: "black",
//       strokeThickness: 3,
//     }),
//   });
//   text.position.set(20, 20);
//   app.stage.addChild(text);

//   // Optional music
//   const sound = new Howl({
//     src: ["/audio/inner-peace.mp3"],
//     volume: 0.5,
//   });

//   let music = false;
//   window.addEventListener("click", () => {
//     if (music) {
//       sound.pause();
//     } else {
//       sound.play();
//     }
//     music = !music;
//   });
// })();
import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
  TilingSprite,
  Container,
  Ticker,
} from "pixi.js";
import { Howl } from "howler";

(async () => {
  const app = new Application();
  await app.init({ resizeTo: window });

  globalThis.__PIXI_APP__ = app;
  document.body.appendChild(app.canvas);
  app.canvas.style.position = "absolute";

  // Load and add background
  const base = await Assets.load("/images/background.jpg");
  const bg = new TilingSprite({
    texture: base,
    width: app.screen.width,
    height: app.screen.height,
  });
  // bg.tileScale.set(1.9, 1.5);
  bg.tilePosition.set(0, 1000);
  app.stage.addChild(bg);

  const appleTexture = await Assets.load("/images/apple.png");
  const appleCutTexture = await Assets.load("images/fruitCut.png");

  // Container for sprites
  const fruitContainer = new Container();
  fruitContainer.width = app.screen.width;
  fruitContainer.height = app.screen.height;
  app.stage.addChild(fruitContainer);

  const fruits = [];
  let score = 0;
  const scoreText = new Text({
    text: `Score: ${score}`,
    style: new TextStyle({
      fontFamily: "Arial",
      fontSize: 40,
      fill: "yellow",
      stroke: "black",
      backgroundColor: "green",
      padding: 10,

      // strokeThickness: 3,
    }),
  });
  scoreText.position.set(20, 80);
  const scoreBackground = new Graphics();
  scoreBackground.beginFill(0x008000); // Green color
  scoreBackground.drawRoundedRect(
    0,
    0,
    scoreText.width + 50,
    scoreText.height + 10,
    10
  );
  scoreBackground.endFill();

  // Position the text and background
  scoreBackground.position.set(20, 80);
  scoreText.position.set(scoreBackground.x + 10, scoreBackground.y + 5);

  // Add background first, then text (so text is on top)
  app.stage.addChild(scoreBackground);
  app.stage.addChild(scoreText);

  function updateScoreDisplay() {
    scoreText.text = `Score: ${score}`;
  }
  const fruitCut = new Sprite(appleTexture);
  fruitCut.anchor.set(0.5);

  function spawnFruit() {
    const fruit = new Sprite(appleTexture);
    fruit.anchor.set(0.5);
    fruit.position.x = Math.random() * app.screen.width;
    fruit.position.y = -10; // start above the screen
    fruit.scale.set(0.09);
    fruit.interactive = true;
    fruit.cursor = "pointer";
    // random size for variety
    // fruit.scale.set(0.2 + Math.random() * 0.3); // random size for variety
    const crunch = new Howl({
      src: ["/audio/crunchy.mp3"],
      volume: 0.5,
    });

    const star = new Graphics().star(0, 0, 4, 8, 50).fill({
          color: 0xffffff,
          alpha: 1,
        });
        
    fruit.on("pointerdown", () => {
      fruitContainer.removeChild(fruit);
      fruits.splice(
        fruits.findIndex((f) => f.sprite === fruit),
        1
      );
      score += 1;
      updateScoreDisplay();
      crunch.play();
       // Set star initial state
  star.alpha = 1;
  star.position.set(fruit.x, fruit.y);
  fruitContainer.addChild(star);

  // Start a fade-out over 1 second
  const fadeDuration = 1000; // milliseconds
  let elapsed = 0;

  const ticker = new Ticker();
  ticker.add((deltaTime) => {
    const deltaMS = ticker.deltaMS;
    elapsed += deltaMS;

    const progress = Math.min(elapsed / fadeDuration, 1);
    star.alpha = 1 - progress;

    if (progress >= 1) {
      ticker.stop();
      ticker.destroy();
      fruitContainer.removeChild(star); // Optional: clean up
    }
  });

  ticker.start();
});

fruitContainer.addChild(fruit);

    // console.log(fruit,'fruittttttt');

    fruits.push({
      sprite: fruit,
      vy: 2 + Math.random() * 2,
    });
    // console.log("Adding fruit at", fruit.x, fruit.y);
  }

  app.ticker.add((delta) => {
    // Randomly spawn new fruits
    if (Math.random() < 0.01) {
      spawnFruit();
      // console.log("Adding fruit at");
    }

    // Update all fruits
    for (const obj of fruits) {
      obj.vy += 0.05; // gravity
      obj.sprite.position.y += obj.vy;

      // Remove fruit if it goes off screen
      if (obj.sprite.y > app.screen.height + 10) {
        fruitContainer.removeChild(obj.sprite);
        fruits.splice(fruits.indexOf(obj), 1);
      }
    }
  });

  // Optional text overlay
  const text = new Text({
    text: "grab all the falling Objects as fast as you can-",
    style: new TextStyle({
      fontFamily: "Arial",
      fontSize: 20,
      fill: "white",
      stroke: "black",
      strokeThickness: 3,
    }),
  });
  text.position.set(20, 10);
  app.stage.addChild(text);

  // Optional music
  const sound = new Howl({
    src: ["/audio/inner-peace.mp3"],
    volume: 0.5,
  });

  // let music = false;
  // window.addEventListener("click", () => {
    // if (music) {
    // sound.pause();
    // } else {
    sound.play();
    // }
    // music = !music;
  // });
})();
