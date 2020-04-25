enchant();
/** 画像パス */
const imgPath = {
  makoto: "./img/makoto.png",
  genkan: "./img/genkan.jpg",
};
/** fps */
const fps = 60;

window.onload = function () {
  const game = new Game(427, 640);
  game.preload(imgPath.makoto);
  game.preload(imgPath.genkan);
  game.fps = fps;
  game.onload = function () {
    const genkan = new Sprite(427, 640);
    genkan.image = game.assets[imgPath.genkan];
    genkan.x = 0;
    genkan.y = 0;
    game.rootScene.addChild(genkan);
    const makoto = getMakoto(game);
    game.rootScene.addChild(makoto);
  };
  game.start();
};

/** 誠を取得 */
function getMakoto(game) {
  const m = new Sprite(128, 128);
  const base = { x: 150, y: 400 };
  /** 1フレーム当たりの移動角度(度) */
  const speed = 5;
  m.image = game.assets[imgPath.makoto];
  m.x = base.x;
  m.y = base.y;
  m.on("enterframe", function () {
    const xy = ellipseMove(
      base.x,
      base.y,
      50,
      10,
      (this.age * speed * Math.PI) / 180
    );
    this.x = xy.x;
    this.y = xy.y;
    // this.rotate(2); // 2度ずつ回転
    // this.scale(1.01, 1.01); // 縦横1.01倍ずつ拡大
    // if (this.x > 320) this.x = 0; // 画面からはみ出したらx座標を0に戻す
  });
  return m;
}

/** 楕円ムーブの座標 */
function ellipseMove(baseX, baseY, xlen, ylen, rad) {
  return {
    x: baseX + xlen * Math.cos(rad),
    y: baseY + ylen * Math.sin(rad),
  };
}
