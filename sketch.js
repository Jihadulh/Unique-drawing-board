// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox;
var colourP;
var helpers;
var canvasContainer;

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new MirrorDrawTool());
	toolbox.addTool(new SquareTool());
	toolbox.addTool(new CircleTool());
	toolbox.addTool(new TriangleTool());
	toolbox.addTool(new RectangleTool());
	background(255);
}

function windowResized() {
    // Resize canvas to fill the content area
    resizeCanvas(canvasContainer.size().width, canvasContainer.size().height);
    background(255);
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}
