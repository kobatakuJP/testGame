enchant();
/** 画像パス */
const imgPath = {
  makoto: "./img/makoto.png",
  genkan: "./img/genkan.jpg",
};
/** fps */
const fps = 60;
const comments = [
  "ほあ",
  "えい",
  "よっ",
  "よいしょ",
  "もうちょい",
  "セイッ",
  "ふんっ",
  "まだまだ",
];

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
    const comment = new Label();
    comment.x = 180;
    comment.y = 36;
    comment.font = "24px Impact";
    comment.text = "";
    game.rootScene.addChild(comment);
    const makoto = getMakoto(game);
    makoto.addEventListener("touchstart", function (e) {
      comment.text = getComment();
      if (this.x > 400) {
        const clear = new Label();
        clear.x = 160;
        clear.y = 300;
        clear.font = "48px Impact";
        clear.text = "";
        clear.color = "red";
        clear.text = "Clear!!";
        game.rootScene.addChild(clear);
        return;
      }
      this.x++;
    });
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
  m.rotate(270);
  m.scale(1.2, 2);
  return m;
}

function getComment() {
  return comments[Math.floor(Math.random() * comments.length)];
}

/** 楕円ムーブの座標 */
function ellipseMove(baseX, baseY, xlen, ylen, rad) {
  return {
    x: baseX + xlen * Math.cos(rad),
    y: baseY + ylen * Math.sin(rad),
  };
}
