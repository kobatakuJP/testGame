enchant();
const imgPath = {
  makoto: "./img/makoto.png",
  genkan: "./img/genkan.jpg",
};
window.onload = function () {
  const game = new Game(427, 640);
  game.preload(imgPath.makoto);
  game.preload(imgPath.genkan);
  game.fps = 16;
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

function getMakoto(game) {
  const m = new Sprite(200, 128);
  m.image = game.assets[imgPath.makoto];
  m.x = 150;
  m.y = 400;
  m.on("enterframe", function () {
    this.x += 10;
    this.rotate(2); // 2度ずつ回転
    this.scale(1.01, 1.01); // 縦横1.01倍ずつ拡大
    if (this.x > 320) this.x = 0; // 画面からはみ出したらx座標を0に戻す
  });
  return m;
}