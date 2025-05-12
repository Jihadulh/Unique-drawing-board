function RectangleTool() {
    //set an icon and a name for the object
    this.icon = "assets/rectangle.jpg";
    this.name = "rectangle";

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
            //if we already have values for previousX and Y we can draw a rectangle
            else {
                noFill();
                stroke(colourP.selectedColour);
                strokeWeight(1);
                var width = 30; // Fixed width for continuous drawing
                var height = 20; // Fixed height for continuous drawing
                rect(mouseX - width/2, mouseY - height/2, width, height);
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