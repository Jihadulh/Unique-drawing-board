function FreehandTool() {
	// Tool properties
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
	this.strokeWeight = 1;

	// Track mouse position for continuous drawing
	var previousMouseX = -1;
	var previousMouseY = -1;

	// Create the options panel with stroke weight control
	this.populateOptions = function() {
		select(".options").html("");
		
		// Create and style the stroke weight controls
		var strokeWeightContainer = createDiv();
		strokeWeightContainer.class("option-container");
		
		var strokeWeightLabel = createDiv("Stroke Weight");
		strokeWeightLabel.class("option-label");
		strokeWeightContainer.child(strokeWeightLabel);
		
		var strokeWeightSlider = createSlider(1, 50, this.strokeWeight, 1);
		strokeWeightSlider.class("stroke-weight-slider");
		strokeWeightContainer.child(strokeWeightSlider);
		
		var strokeWeightValue = createDiv(this.strokeWeight + "px");
		strokeWeightValue.class("stroke-weight-value");
		strokeWeightContainer.child(strokeWeightValue);
		
		select(".options").child(strokeWeightContainer);
		
		// Update stroke weight when slider changes
		strokeWeightSlider.input(() => {
			this.strokeWeight = strokeWeightSlider.value();
			strokeWeightValue.html(this.strokeWeight + "px");
		});
	};

	// Draw lines as the mouse moves
	this.draw = function() {
		if (mouseIsPressed) {
			// Start drawing at current mouse position
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			// Draw a line from previous to current position
			else {
				strokeWeight(this.strokeWeight);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
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
}