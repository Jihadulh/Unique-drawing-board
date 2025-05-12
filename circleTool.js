function CircleTool() {
    //set an icon and a name for the object
    this.icon = "assets/circle.jpg";
    this.name = "circle";

    var previousMouseX = -1;
    var previousMouseY = -1;

    this.draw = function() {
        //if the mouse is pressed
        if (mouseIsPressed) {
            //check if they previousX and Y are -1. set them to the current
            //mouse X and Y if they are.
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            //if we already have values for previousX and Y we can draw a circle
            else {
                noFill();
                stroke(colourP.selectedColour);
                strokeWeight(1);
                var diameter = 20; // Fixed size for continuous drawing
                ellipse(mouseX, mouseY, diameter, diameter);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        //if the user has released the mouse we want to set the previousMouse values 
        //back to -1.
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
} 