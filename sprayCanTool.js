/**
 * SprayCanTool - A drawing tool that simulates a spray paint can effect
 * Creates a spray of random points around the mouse position when pressed
 */
function SprayCanTool() {
    // Tool properties
    this.icon = "assets/sprayCan.jpg";
    this.name = "sprayCan";
    this.strokeWeight = 1;

    // Create the options panel with stroke weight control
    this.populateOptions = function() {
        select(".options").html("");
        
        // Create and style the stroke weight controls
        var strokeWeightContainer = createDiv();
        strokeWeightContainer.class("option-container");
        
        var strokeWeightLabel = createDiv("Spray Size");
        strokeWeightLabel.class("option-label");
        strokeWeightContainer.child(strokeWeightLabel);
        
        var strokeWeightSlider = createSlider(1, 50, this.strokeWeight, 1);
        strokeWeightSlider.class("stroke-weight-slider");
        strokeWeightContainer.child(strokeWeightSlider);
        
        var strokeWeightValue = createDiv(this.strokeWeight + "px");
        strokeWeightValue.class("stroke-weight-value");
        strokeWeightContainer.child(strokeWeightValue);
        
        select(".options").child(strokeWeightContainer);
        
        // Update spray size when slider changes
        strokeWeightSlider.input(() => {
            this.strokeWeight = strokeWeightSlider.value();
            strokeWeightValue.html(this.strokeWeight + "px");
        });
    };

    /**
     * Draw function that creates the spray paint effect
     * Draws multiple random points around the mouse position when pressed
     */
    this.draw = function() {
        if (mouseIsPressed) {
            // Draw multiple points in a circular pattern
            for (var i = 0; i < this.strokeWeight * 2; i++) {
                var radius = random(this.strokeWeight);
                var angle = random(TWO_PI);
                var x = mouseX + radius * cos(angle);
                var y = mouseY + radius * sin(angle);
                point(x, y);
            }
        }
    };
} 