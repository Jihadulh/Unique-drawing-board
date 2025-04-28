/**
 * LineToTool - A drawing tool that creates straight lines from a starting point to the current mouse position
 * This tool allows users to draw straight lines by clicking and dragging
 */
function LineToTool(){
	// Set the tool's icon and name for the UI
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// Initialize variables to track the starting point of the line
	// -1 indicates no starting point has been set yet
	var startMouseX = -1;
	var startMouseY = -1;
	// Flag to track if we're currently drawing
	var drawing = false;

	/**
	 * The main drawing function that handles line creation
	 * Uses loadPixels() and updatePixels() to prevent line trails
	 */
	this.draw = function(){
		// Check if the mouse is being pressed
		if(mouseIsPressed){
			// If this is the first click (no starting point set)
			if(startMouseX == -1){
				// Set the starting point to current mouse position
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// loadPixels() captures the current state of the canvas
				// This is used to prevent drawing trails by restoring the canvas
				// to its previous state before drawing the new line
				loadPixels();
			}
			else{
				// updatePixels() restores the canvas to its previous state
				// This prevents the line from leaving a trail as the mouse moves
				updatePixels();
				// Draw a line from the starting point to current mouse position
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		// When mouse is released and we were drawing
		else if(drawing){
			// Reset the drawing state
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
