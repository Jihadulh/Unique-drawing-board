function MirrorDrawTool() {
	// Tool properties
	this.icon = "assets/mirror.jpg";
	this.name = "mirrorDraw";
	this.strokeWeight = 1;

	// Track mouse position for continuous drawing
	var previousMouseX = -1;
	var previousMouseY = -1;

	// Draw mirrored lines as the mouse moves
	this.draw = function() {
		// Draw the line of symmetry
		stroke(0, 0, 255, 100); // Semi-transparent blue
		strokeWeight(2);
		if (this.axis === "x") {
			line(this.lineOfSymmetry, 0, this.lineOfSymmetry, height);
		} else {
			line(0, this.lineOfSymmetry, width, this.lineOfSymmetry);
		}

		// Reset stroke for drawing
		stroke(colourP.selectedColour);
		strokeWeight(this.strokeWeight);

		if (mouseIsPressed) {
			// Start drawing at current mouse position
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			// Draw lines on both sides of the symmetry line
			else {
				// Draw on the original side
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				
				// Calculate and draw on the mirrored side
				var oppositeX = this.calculateOpposite(mouseX, "x");
				var oppositeY = this.calculateOpposite(mouseY, "y");
				var previousOppositeX = this.calculateOpposite(previousMouseX, "x");
				var previousOppositeY = this.calculateOpposite(previousMouseY, "y");
				
				line(previousOppositeX, previousOppositeY, oppositeX, oppositeY);
				
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		// Reset when mouse is released
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	//which axis is being mirrored (x or y) x is default
	this.axis = "x";
	//line of symmetry is halfway across the screen
	this.lineOfSymmetry = width / 2;

	var self = this;

	/*calculate an opposite coordinate the other side of the
	 *symmetry line.
	 *@param n number: location for either x or y coordinate
	 *@param a [x,y]: the axis of the coordinate (y or y)
	 *@return number: the opposite coordinate
	 */
	this.calculateOpposite = function(n, a) {
		//if the axis isn't the one being mirrored return the same
		//value
		if (a != this.axis) {
			return n;
		}

		//if n is less than the line of symmetry return a coordinate
		//that is far greater than the line of symmetry by the distance from
		//n to that line.
		if (n < this.lineOfSymmetry) {
			return this.lineOfSymmetry + (this.lineOfSymmetry - n);
		}

		//otherwise a coordinate that is smaller than the line of symmetry
		//by the distance between it and n.
		else {
			return this.lineOfSymmetry - (n - this.lineOfSymmetry);
		}
	};

	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	//adds a button and click handler to the options area. When clicked
	//toggle the line of symmetry between horizontal to vertical
	this.populateOptions = function() {
		select(".options").html(
			"<button id='directionButton'>Make Horizontal</button>");
		//click handler
		select("#directionButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (self.axis == "x") {
				self.axis = "y";
				self.lineOfSymmetry = height / 2;
				button.html('Make Vertical');
			} else {
				self.axis = "x";
				self.lineOfSymmetry = width / 2;
				button.html('Make Horizontal');
			}
		});
	};
}
