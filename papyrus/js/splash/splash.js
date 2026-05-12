var papyrus_texture;

function SplashScene() {

	this.papyrus_sprite = new PIXI.Sprite(papyrus_texture);
	this.papyrus_sprite.anchor.set(0.5, 0.5);
	this.papyrus_sprite.position.set(320, 200);
	this.papyrus_sprite.scale.set(1, 1);
	this.papyrus_sprite.alpha = 0;

	this.title_text = new PIXI.extras.BitmapText("BONETROUSLE", { font: "20px Numbers", align: "center" });
	this.title_text.position.set(200, 360);
	this.title_text.alpha = 0;

	this.press_start_text = new PIXI.extras.BitmapText("press z to start", { font: "15px Numbers", align: "center" });
	this.press_start_text.position.set(210, 420);
	this.press_start_text.alpha = 0;

	this.flash_g = new PIXI.Graphics();
	this.flash_g.beginFill(0xffffff);
	this.flash_g.drawRect(0, 0, 640, 480);
	this.flash_g.alpha = 1;

	splash_stage.addChild(this.papyrus_sprite);
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

	this.flash_g.alpha = interp_clamp(scene.scene_time, 0, 600, 1, 0);
	this.papyrus_sprite.alpha = interp_clamp(scene.scene_time, 300, 1200, 0, 1);
	this.title_text.alpha = interp_clamp(scene.scene_time, 1400, 2000, 0, 1);

	if (scene.scene_time > 2500) {
		this.press_start_text.alpha = Math.round(Math.sin(2 * Math.PI * scene.scene_time / 800) + 0.2);
	}

};

var splash_animation;
