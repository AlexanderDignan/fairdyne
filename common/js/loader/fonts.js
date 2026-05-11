// graphics

var fonts_loader = new PIXI.loaders.Loader();

fonts_loader
	.add("undertale", "../common/fonts/undertale.fnt")
	.add("numbers", "../common/fonts/numbers.fnt")
	.add("speechbubble", "../common/fonts/speechbubble.fnt")
	.on("complete", function(loader, resources) {
		process_fonts(resources);
	})
;

function process_fonts(resources) {

	resources["undertale_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	resources["numbers_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	resources["speechbubble_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

	markAssetLoaded("fonts");

}
