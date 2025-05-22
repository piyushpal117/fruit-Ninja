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

  //  text overlay
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
