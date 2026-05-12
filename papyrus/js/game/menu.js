var menu;

function Menu() {

	this.shown = false;
	this.shown_done = false;

	this.text_counter = 0;

	this.current_option = 0;
	this.options = ["easy", "medium", "hard"];

	this.select_text = new PIXI.extras.BitmapText("Select a difficulty level.", {font: "18px Undertale"});
	this.select_text.position.set(80, 260);
	this.select_text.visible = false;

	this.easy_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.easy_text.position.set(80, 300);
	this.easy_text_chars = 0;
	this.normal_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.normal_text.position.set(80, 332);
	this.normal_text_chars = 0;
	this.hard_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.hard_text.position.set(80, 364);
	this.hard_text_chars = 0;

	this.easy_text_text   = "Spare me, PLEASE!";
	this.normal_text_text = "I WANT TO BATTLE!";
	this.hard_text_text   = "NYEH HEH HEH!!";

	gameplay_stage.addChild(this.select_text);
	gameplay_stage.addChild(this.easy_text);
	gameplay_stage.addChild(this.normal_text);
	gameplay_stage.addChild(this.hard_text);

}

Menu.prototype.update = function(delta_ms) {

	if (!this.shown || this.shown_done) return;

	this.easy_text_chars   += Math.random() * 0.05 * delta_ms;
	this.normal_text_chars += Math.random() * 0.05 * delta_ms;
	this.hard_text_chars   += Math.random() * 0.05 * delta_ms;

	this.text_counter += delta_ms;
	while (this.text_counter >= 40) {
		this.text_counter -= 40;
		se_text_advance.play();
	}

	if (this.easy_text_chars   >= this.easy_text_text.length &&
		this.normal_text_chars >= this.normal_text_text.length &&
		this.hard_text_chars   >= this.hard_text_text.length) {
		this.shown_done = true;
	}

	this.easy_text.text   = this.easy_text_text.substr(0, Math.floor(this.easy_text_chars));
	this.normal_text.text = this.normal_text_text.substr(0, Math.floor(this.normal_text_chars));
	this.hard_text.text   = this.hard_text_text.substr(0, Math.floor(this.hard_text_chars));

};

Menu.prototype.show = function() {

	gamestate.state = "menu";

	this.select_text.visible = true;

	this.easy_text_chars   = 0;
	this.normal_text_chars = 0;
	this.hard_text_chars   = 0;

	this.shown = true;
	heart.sprite.visible = true;
	this.updateHeartPosition();

	box.dest_left = 16;
	box.dest_right = 624;
	box.dest_top = 240;
	box.dest_bottom = 420;

	this.easy_text.visible   = true;
	this.normal_text.visible = true;
	this.hard_text.visible   = true;

};

Menu.prototype.hide = function() {

	gamestate.state = "none";

	this.shown = false;

	this.select_text.visible = false;
	this.easy_text.visible   = false;
	this.normal_text.visible = false;
	this.hard_text.visible   = false;

};

Menu.prototype.updateLove = function() {
	switch (this.current_option) {
		case 0:
			love_text.text = "LV 1";
			heart.setMaxHP(4);
			break;
		case 1:
			love_text.text = "LV 10";
			heart.setMaxHP(4);
			break;
		case 2:
			love_text.text = "LV 99";
			heart.setMaxHP(4);
			break;
	}
};

Menu.prototype.moveUp = function() {

	se_menu_move.play();
	this.current_option -= 1;
	if (this.current_option < 0) this.current_option += this.options.length;
	this.updateHeartPosition();
	this.updateLove();

};

Menu.prototype.moveDown = function() {

	se_menu_move.play();
	this.current_option += 1;
	if (this.current_option >= this.options.length) this.current_option -= this.options.length;
	this.updateHeartPosition();
	this.updateLove();

};

Menu.prototype.select = function() {
	this.hide();
	se_menu_select.play();
	gamestate.restartGame(this.options[this.current_option]);
};

Menu.prototype.updateHeartPosition = function() {
	heart.sprite.position.set(60, 316 + this.current_option * 32);
};
