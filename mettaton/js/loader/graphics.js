var graphics_loader = new PIXI.loaders.Loader();

graphics_loader

	.add("arrow",            "../undyne/img/arrow.png")
	.add("heart",            "../undyne/img/heart.png")
	.add("shield",           "../undyne/img/shield.png")
	.add("spear",            "../undyne/img/spear.png")
	.add("pike",             "../undyne/img/pike.png")
	.add("speechbubble",     "../undyne/img/speechbubble.png")
	.add("mettaton",         "img/mettaton.gif")
	.add("mettaton_guitar",  "img/mettaton_guitar.gif")
	.add("mettaton_static",  "img/Mettaton_static.png")

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

	mettaton_texture        = resources["mettaton"].texture;
	mettaton_guitar_texture = resources["mettaton_guitar"].texture;
	mettaton_static_texture = resources["mettaton_static"].texture;

	markAssetLoaded("graphics");

}
