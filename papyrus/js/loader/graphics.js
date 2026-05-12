var graphics_loader = new PIXI.loaders.Loader();

graphics_loader

	.add("arrow",       "../undyne/img/arrow.png")
	.add("heart",       "../undyne/img/heart.png")
	.add("shield",      "../undyne/img/shield.png")
	.add("spear",       "../undyne/img/spear.png")
	.add("pike",        "../undyne/img/pike.png")
	.add("speechbubble","../undyne/img/speechbubble.png")
	.add("papyrus",     "img/papyrus.png")

	.on("complete", function(loader, resources) {
		process_graphics(resources);
	})

;

function process_graphics(resources) {

	arrow_texture = resources["arrow"].texture;
	spear_texture = resources["spear"].texture;
	pike_texture  = resources["pike"].texture;

	heart_texture = resources["heart"].texture;
	heart_texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

	shield_texture = resources["shield"].texture;

	speech_bubble_texture = resources["speechbubble"].texture;
	speech_bubble_texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

	papyrus_texture = resources["papyrus"].texture;

	markAssetLoaded("graphics");

}
