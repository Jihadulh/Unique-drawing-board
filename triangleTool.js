function TriangleTool() {
    // Tool properties
    this.icon = "assets/triangle.jpg";
    this.name = "triangle";
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

    // Draw triangles as the mouse moves
    this.draw = function() {
        if (mouseIsPressed) {
            // Start drawing at current mouse position
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // Draw a triangle at current mouse position
            else {
                noFill();
                stroke(colourP.selectedColour);
                strokeWeight(this.strokeWeight);
                var size = 20; // Size of each triangle
                triangle(
                    mouseX, mouseY + size/2,
                    mouseX - size/2, mouseY - size/2,
                    mouseX + size/2, mouseY - size/2
                );
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