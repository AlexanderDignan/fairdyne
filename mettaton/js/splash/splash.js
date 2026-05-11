var mettaton_texture;

function SplashScene() {

	this.mettaton_sprite = new PIXI.Sprite(mettaton_texture);
	this.mettaton_sprite.anchor.set(0.5, 0.5);
	this.mettaton_sprite.position.set(320, 200);
	this.mettaton_sprite.scale.set(1, 1);
	this.mettaton_sprite.alpha = 0;

	this.title_text = new PIXI.extras.BitmapText("DEATH BY GLAMOUR", { font: "20px Numbers", align: "center" });
	this.title_text.position.set(152, 360);
	this.title_text.alpha = 0;

	this.press_start_text = new PIXI.extras.BitmapText("press z to start", { font: "15px Numbers", align: "center" });
	this.press_start_text.position.set(210, 420);
	this.press_start_text.alpha = 0;

	this.flash_g = new PIXI.Graphics();
	this.flash_g.beginFill(0xffffff);
	this.flash_g.drawRect(0, 0, 640, 480);
	this.flash_g.alpha = 1;

	splash_stage.addChild(this.mettaton_sprite);
	splash_stage.addChild(this.title_text);
	splash_stage.addChild(this.press_start_text);
	splash_stage.addChild(this.flash_g);

	this.outro = false;
	this.outro_time = 0;

}

SplashScene.prototype.update = function(delta_ms) {

	if (this.outro) {
		this.outro_time += delta_ms;
		splash_stage.alpha = interp_clamp(this.outro_time, 0, 800, 1, 0);
		if (this.outro_time >= 800) {
			scene.selectScene("gameplay");
		}
		return;
	}

	// white flash fades out, Mettaton fades in
	this.flash_g.alpha = interp_clamp(scene.scene_time, 0, 600, 1, 0);
	this.mettaton_sprite.alpha = interp_clamp(scene.scene_time, 300, 1200, 0, 1);
	this.title_text.alpha = interp_clamp(scene.scene_time, 1400, 2000, 0, 1);

	if (scene.scene_time > 2500) {
		this.press_start_text.alpha = Math.round(Math.sin(2 * Math.PI * scene.scene_time / 800) + 0.2);
	}

};

var splash_animation;
