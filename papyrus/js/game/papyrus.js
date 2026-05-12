var boss;

var papyrus_texture;
var speech_bubble_texture;

var BOSS_TARGET_HEIGHT = 160;

function bossScale(texture) {
	return BOSS_TARGET_HEIGHT / texture.height;
}

function Papyrus() {

	this.animation_state = "idle";
	this.animation_time = 0;

	this.sbtext = null;
	this.text_state = "none";
	this.text_queue = [];
	this.text_queue_callback = null;
	this.text_chars = 0;
	this.text_se = se_boss;
	this.cps = 25;

	var s = bossScale(papyrus_texture);
	this.sprite = new PIXI.Sprite(papyrus_texture);
	this.sprite.anchor.set(0.5, 0);
	this.sprite.scale.set(s, s);
	this.sprite.position.set(320, 0);

	this.speech_bubble = new PIXI.Sprite(speech_bubble_texture);
	this.speech_bubble.anchor.set(0, 0.5);
	this.speech_bubble.position.set(400, 60);

	this.speech_bubble_text = new PIXI.extras.BitmapText(
		"",
		{ font: "12px SpeechBubble", align: "left" }
	);
	this.speech_bubble_text.maxWidth = 180;
	this.speech_bubble_text.position.set(442, 24);
	this.speech_bubble_text.tint = 0;

	this.opacity_g = new PIXI.Graphics();
	this.opacity_g.alpha = 0;
	this.opacity_g.beginFill(0x000000);
	this.opacity_g.drawRect(0, 0, 640, 480);
	this.opacity_g.endFill();

	gameplay_stage.addChild(this.sprite);
	gameplay_stage.addChild(this.speech_bubble);
	gameplay_stage.addChild(this.speech_bubble_text);
	gameplay_stage.addChild(this.opacity_g);

}

Papyrus.prototype.queue_text = function(text_queue, callback) {

	this.text_queue = this.text_queue.concat(text_queue);
	this.text_queue_callback = callback;
	this.text_state = "talking";
	this.speech_bubble.visible = true;
	this.speech_bubble_text.visible = true;
	this.selectNextText();

};

Papyrus.prototype.selectNextText = function() {

	if (this.text_queue.length > 0) {
		this.sbtext = this.text_queue.shift();
		this.text_chars = 0;
		this.text_state = "talking";
		this.text_se = se_boss;
	} else {
		this.sbtext = null;
		this.speech_bubble.visible = false;
		this.speech_bubble_text.visible = false;
		this.text_state = "none";
		this.text_queue_callback();
	}

};

Papyrus.prototype.advanceTextChars = function(text_chars) {

	if (!this.sbtext) return;

	var char = this.sbtext.text[Math.floor(text_chars)];
	if (!(char == " " || char == "\n")) {
		this.text_se.play();
	}
	this.speech_bubble_text.text = this.sbtext.text.substr(0, Math.floor(text_chars));

};

Papyrus.prototype.advanceTextA = function() {

	if (this.text_state == "waiting") {
		this.selectNextText();
	}

};

Papyrus.prototype.advanceTextB = function() {

	if (this.text_state == "talking") {
		this.speech_bubble_text.text = this.sbtext.text;
		this.text_state = "waiting";
	}

};

Papyrus.prototype.swing_arm = function() {

	if (this.animation_state == "posing") return;
	this.animation_state = "posing";
	this.animation_time = 0;

};

Papyrus.prototype.update = function(delta_ms) {

	this.animation_time += delta_ms;

	if (this.text_state == "talking") {
		var new_text_chars = this.text_chars + this.cps * delta_ms / 1000;
		if (Math.floor(new_text_chars) > this.text_chars) {
			this.advanceTextChars(new_text_chars);
		}
		if (this.text_chars >= this.sbtext.text.length) {
			this.text_state = "waiting";
		}
		this.text_chars = new_text_chars;
	}

	if (this.animation_state == "idle") {

		this.sprite.position.y = 4 * Math.sin(this.animation_time / 1400 * Math.PI * 2);

	} else if (this.animation_state == "posing") {

		var t = this.animation_time;
		var s = bossScale(this.sprite.texture);
		this.sprite.rotation = interp_clamp(t, 0, 150, 0, 0.15) - interp_clamp(t, 150, 400, 0, 0.15);
		this.sprite.scale.x = s + (s * 0.15) * Math.sin(t / 100);

		if (this.animation_time > 500) {
			this.sprite.rotation = 0;
			this.sprite.scale.set(s, s);
			this.animation_state = "idle";
			this.animation_time = 0;
		}

	}

};
