let _config = {
  modelSize: {
    x: 1200,
    y: 1855
  },

  spotColor: 0xffd1a4,
  defaultAlpha: 0.2,
  lightStrength: 2
};


let $width = _config.modelSize.x;
let $height = _config.modelSize.y;

let startPosX = $width / 2;
let startPosY = 150;

const app = new PIXI.Application($width, $height, {
  view: document.getElementById("renderer"),
  antialias: true,
  transparent: true
});


const stage = app.stage = new PIXI.display.Stage();
const light = new PIXI.lights.PointLight(
  _config.spotColor,
  _config.lightStrength);

const loadera = new PIXI.loaders.Loader();

// put all layers for deferred rendering of normals
stage.addChild(new PIXI.display.Layer(PIXI.lights.diffuseGroup));
stage.addChild(new PIXI.display.Layer(PIXI.lights.normalGroup));
stage.addChild(new PIXI.display.Layer(PIXI.lights.lightGroup));

function createPair(diffuseTex, normalTex) {
  const container = new PIXI.Container();
  const diffuseSprite = new PIXI.Sprite(diffuseTex);
  diffuseSprite.parentGroup = PIXI.lights.diffuseGroup;
  const normalSprite = new PIXI.Sprite(normalTex);
  normalSprite.parentGroup = PIXI.lights.normalGroup;
  container.addChild(diffuseSprite);
  container.addChild(normalSprite);
  return container;
}

function onAssetsLoaded(loadera, res) {
  const bg = createPair(res.model_diffuse.texture, res.model_normal.texture);

  light.position.set(startPosX, startPosY);
  stage.addChild(bg);

  stage.addChild(new PIXI.lights.AmbientLight(null, _config.defaultAlpha));
  // stage.addChild(new PIXI.lights.DirectionalLight(null, 1, bg));
  stage.addChild(light);

  bg.interactive = true;

  // if mobile or tablet, try rotate your device.
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let deviceOrientationData;
    function deviceOrientationHandler(e) {
      deviceOrientationData = e;
      light.position.x = startPosX + e.gamma * 10;
      light.position.y = startPosY + e.beta * 10;
      // console.log(e.gamma, e.beta);
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    }

  } else {
    bg.on('mousemove', function (e) {
      light.position.copy(e.data.global);
      // console.log('e.data.global:', e.data.global);
    });
  }
}

loadera.
  add("model_diffuse", "../img/captain.png", {
    crossOrigin: true
  }).

  add("model_normal", "../img/captain.png", {
    crossOrigin: true
  }).

  load(onAssetsLoaded);