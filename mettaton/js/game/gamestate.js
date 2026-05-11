var time_text;
var love_text;

function GameState() {

	this.state = "menu";
	this.level = 1;

	hp_text = new PIXI.extras.BitmapText("04 / 04", {font: "15px Numbers", align: "right"});
	hp_text.position.x = 300;
	hp_text.position.y = 450;

	time_text = new PIXI.extras.BitmapText("00:00.00", {font: "15px Numbers", align: "left"});
	time_text.position.x = 500;
	time_text.position.y = 450;

	love_text = new PIXI.extras.BitmapText("LV " + this.level, {font: "15px Numbers", align: "left"});
	love_text.position.x = 150;
	love_text.position.y = 450;

}

GameState.prototype.handleInput = function(key) {

	if (boss.text_state != "none") {
		switch(key) {
			case "A":
				boss.advanceTextA();
				break;
			case "B":
				boss.advanceTextB();
				break;
			default:
				break;
		}
	} else if (this.state == "menu") {
		switch(key) {
			case "up":
				menu.moveUp();
				break;
			case "down":
				menu.moveDown();
				break;
			case "A":
				menu.select();
			default:
				break;
		}
	} else if (this.state == "playing") {
		switch(key) {
			case "left":
				heart.setShieldDir(2);
				break;
			case "right":
				heart.setShieldDir(4);
				break;
			case "up":
				heart.setShieldDir(3);
				break;
			case "down":
				heart.setShieldDir(1);
				break;
			default:
				break;
		}
	}

};

GameState.prototype.restartGame = function(difficulty) {

	this.difficulty = difficulty;
	this.elapsed_time = 0;
	this.score = 0;
	this.state = "playing";

	arrows = [];
	spears = [];
	next_attack = null;

	heart.hp = heart.maxhp;
	hp_text.text = _.padStart(heart.hp, 2, "0") + " / " + _.padStart(heart.maxhp, 2, "0");

	switch (difficulty) {
		case "easy":
			heart.invincibility_increment = 1500; break;
		case "medium":
			heart.invincibility_increment = 1000; break;
		case "hard":
			heart.invincibility_increment = 500; break;
	}

	switch (difficulty) {
		case "easy":
			attack_queue_time = BEAT * 5;
			attack_queue = [ { type: "null", time: BEAT * 5 } ];
			addNextAttack(e_ag1);
			break;
		case "medium":
			attack_queue_time = BEAT * 5;
			attack_queue = [ { type: "null", time: BEAT * 5 } ];
			addNextAttack(m_ag1);
			break;
		case "hard":
			attack_queue_time = BEAT * 5;
			attack_queue = [ { type: "null", time: BEAT * 5 } ];
			addNextAttack(h_ag1);
			break;
	}

	box.dest_left = 320 - SHIELD_DISTANCE;
	box.dest_right = 320 + SHIELD_DISTANCE;
	box.dest_top = 240 - SHIELD_DISTANCE;
	box.dest_bottom = 240 + SHIELD_DISTANCE;
	heart.sprite.visible = true;
	heart.shield_sprite.visible = true;

	bgm_mettaton.play();

	switchAttackMode();

};

GameState.prototype.endGame = function() {

	for (var a = 0; a < arrows.length; ++a)
		gameplay_stage.removeChild(arrows[a].sprite);
	for (var a = 0; a < spears.length; ++a)
		gameplay_stage.removeChild(spears[a].sprite);
	for (var a = 0; a < pikes.length; ++a)
		gameplay_stage.removeChild(pikes[a].sprite);
	for (var a = 0; a < circle_spears.length; ++a)
		gameplay_stage.removeChild(circle_spears[a].sprite);
	for (var a = 0; a < swarm_spears.length; ++a)
		gameplay_stage.removeChild(swarm_spears[a].sprite);

	if (box.top < 240 - SHIELD_DISTANCE) box.top = 240 - SHIELD_DISTANCE;

	heart.shield_sprite.visible = false;
	boss.opacity_g.alpha = 0;
	this.state = "gameover";

	menu.easy_text_text   = "I want to have FUN";
	menu.normal_text_text = "I want to be FABULOUS";
	menu.hard_text_text   = "I want to feel the HEAT";

	bgm_mettaton.stop();

	boss.queue_text(endGameText(this.difficulty, this.elapsed_time), menu.show.bind(menu));

};

var annoyance = 0;
var rumble = { x: 0, y: 0 };

function endGameText(diff, surv_time) {
	switch (diff) {
		case "easy":
			if (surv_time < 10000)
				return [
					{ text: "Oh, sweetie." },
					{ text: "You need to use\nthat shield." },
				];
			else if (surv_time < 60000)
				return [
					{ text: "Not bad, darling!" },
					{ text: "Think you can\nkeep up with me?" },
				];
			else
				return [
					{ text: "You've got talent!" },
					{ text: "Why not try\nsomething harder?" },
				];
		case "medium":
			if (surv_time < 10000) {
				++annoyance;
				switch (annoyance) {
					case 1:
						return [
							{ text: "Oh, sweetie." },
							{ text: "You need to use\nthat shield." },
						];
					case 2:
						return [
							{ text: "DARLING." },
							{ text: "The shield.\nUSE IT." },
						];
					default:
						menu.normal_text.alpha = 0.2;
						menu.options = ["easy", "hard"];
						menu.current_option = 0;
						return [
							{ text: "If you won't take\nthis seriously..." },
							{ text: "I'll make you\nTRY HARDER!" },
						];
				}
			} else if (surv_time < 60000)
				return [
					{ text: "Not bad, darling." },
					{ text: "But I've barely\nwarmed up!" },
				];
			else
				return [
					{ text: "Ooh, you're good!" },
					{ text: "Ready to try\nthe real show?" },
				];
		case "hard":
			if (surv_time < 60000)
				return [
					{ text: "Is THAT the best\nyou can do?" },
					{ text: "How disappointing." },
				];
			else
				return [
					{ text: "Now THAT'S a\nperformance!" },
					{ text: "But can you\nkeep it up?" },
				];
		default:
			return [
				{ text: "Shall we go\nagain, darling?" },
			];
	}
}

GameState.prototype.update = function(delta_ms) {

	box.update(delta_ms);
	heart.update(delta_ms);
	boss.update(delta_ms);
	menu.update(delta_ms);

	if (this.state == "playing") {
		this.elapsed_time += delta_ms;
		time_text.text = format_time_long(this.elapsed_time);

		for (var a = 0; a < arrows.length; ) {
			arrows[a].update(delta_ms / 1000);
			if (arrows[a].removed) {
				gameplay_stage.removeChild(arrows[a].sprite);
				arrows.splice(a, 1);
			} else { ++a; }
		}

		for (var a = 0; a < spears.length; ) {
			spears[a].update(delta_ms);
			if (spears[a].removed) {
				gameplay_stage.removeChild(spears[a].sprite);
				spears.splice(a, 1);
			} else { ++a; }
		}

		for (var a = 0; a < pikes.length; ) {
			pikes[a].update(delta_ms);
			if (pikes[a].removed) {
				gameplay_stage.removeChild(pikes[a].sprite);
				pikes.splice(a, 1);
			} else { ++a; }
		}

		for (var a = 0; a < circle_spears.length; ) {
			circle_spears[a].update(delta_ms);
			if (circle_spears[a].removed) {
				gameplay_stage.removeChild(circle_spears[a].sprite);
				circle_spears.splice(a, 1);
			} else { ++a; }
		}

		for (var a = 0; a < swarm_spears.length; ) {
			swarm_spears[a].update(delta_ms);
			if (swarm_spears[a].removed) {
				gameplay_stage.removeChild(swarm_spears[a].sprite);
				swarm_spears.splice(a, 1);
			} else { ++a; }
		}

		var current_attack = attack_queue[0];
		current_attack.time -= delta_ms / 1000;

		if (current_attack.type == "spear") {
			spear_time -= delta_ms;
			if (spear_time <= 0) {
				spear_time += spear_interval;
				addNewSpear();
			}
		} else if (current_attack.type == "pike") {
			pike_time -= delta_ms;
			if (pike_time <= 0) {
				pike_time += pike_interval;
				addNewPike();
			}
		} else if (current_attack.type == "circlespear") {
			circle_time -= delta_ms;
			if (circle_time <= 0) {
				circle_time += circle_interval;
				addNewCircleSpear(circle_count);
			}
		} else if (current_attack.type == "swarmspear") {
			swarm_time -= delta_ms;
			if (swarm_time <= 0) {
				swarm_time += swarm_interval;
				swarm_initial_angle += Math.random() * 0.8 - 0.5;
				addNewSwarmSpear(6, swarm_interval, swarm_initial_angle);
			}
		}

		if (current_attack.time <= 0.4 + (current_attack.buffer_time || 0) &&
			current_attack.type != attack_queue[1].type)
				boss.swing_arm();

		if (current_attack.time <= (current_attack.buffer_time || 0))
				switchAttackMode();

	} else if (this.state == "gameover") {
		rumble = { x: 0, y: 0 };
	}

	gameplay_stage.position.set(rumble.x, rumble.y);

};

// Wrap the shared switchAttackMode to swap Mettaton's sprite on each phase change
var _baseSwitchAttackMode = switchAttackMode;
switchAttackMode = function() {
	_baseSwitchAttackMode();
	var type = attack_queue[0] ? attack_queue[0].type : "arrow";
	boss.setSprite(type === "arrow" ? "guitar" : "static");
};

var gamestate;
