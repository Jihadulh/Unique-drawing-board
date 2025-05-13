/**
 * LineToTool - A drawing tool that creates straight lines from a starting point to the current mouse position
 * This tool allows users to draw straight lines by clicking and dragging
 */
function LineToTool() {
	// Tool properties
	this.icon = "assets/lineTo.jpg";
	this.name = "lineTo";

	// Track start and end points
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	/**
	 * The main drawing function that handles line creation
	 * Uses loadPixels() and updatePixels() to prevent line trails
	 */
	this.draw = function() {
		if (mouseIsPressed) {
			// Start drawing at current mouse position
			if (startMouseX == -1) {
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
			// Update line as mouse moves
			else {
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		// Save line when mouse is released
		else if (drawing) {
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
