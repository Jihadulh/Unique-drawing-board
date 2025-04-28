/**
 * SprayCanTool - A drawing tool that simulates a spray paint can effect
 * Creates a spray of random points around the mouse position when pressed
 */
function SprayCanTool() {
    // Tool properties
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    this.points = 13;  // Number of points to draw per frame
    this.spread = 10;  // Maximum distance from mouse position

    /**
     * Draw function that creates the spray paint effect
     * Draws multiple random points around the mouse position when pressed
     */
    this.draw = function() {
        // If the mouse is pressed, create the spray effect
        if (mouseIsPressed) {
            // Create multiple random points around the mouse position
            for (var i = 0; i < this.points; i++) {
                // Calculate random x and y coordinates within the spread radius
                point(random(mouseX - this.spread, mouseX + this.spread), 
                      random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    };
} 