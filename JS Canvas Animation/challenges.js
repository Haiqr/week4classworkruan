// ================================
// Canvas Animation Challenges
// ================================

const canvas = document.getElementById("myCanvas");
const pencil = canvas.getContext("2d");

// -----------------------------------------------
// Challenge 1: Clear the Canvas
// Draw a red square at (50, 50). 
// After 2 seconds, clear the entire canvas.

// pencil.fillStyle = "red";
// pencil.fillRect(50, 50, 150, 150);

// function eraseSquare(){
//     pencil.clearRect(0, 0, 500, 500);
// }


// setTimeout(eraseSquare, 2000);


// -----------------------------------------------
// Challenge 2: Blinking Shape
// Draw a blue circle on the canvas.
// Use setInterval to make it appear and disappear every half second.

// pencil.arc(100, 100, 50, 0, 2 * Math.PI);
// pencil.strokeStyle = "blue";
// pencil.fillStyle = "blue";
// pencil.stroke();
// pencil.fill();





// function eraseCircle(){
//     pencil.clearRect(0, 0, 500, 500);
// }






// -----------------------------------------------
// Challenge 3: Growing Circle
// Draw a small green circle that gets bigger every 50ms.
// Use setInterval, and clear + redraw each frame.
// Stop when its radius reaches 50.

let size = 5;


function growACircle() {
if(size <= 50){
size++;

pencil.arc(100, 100, size, 0, Math.PI * 2);
pencil.fillStyle = "green";
pencil.fill();
}
}


setInterval(growACircle, 50)




// -----------------------------------------------
// Challenge 4: Moving Ball
// Draw a circle starting at x = 0.
// Use setInterval to move it to the right by 5 pixels every 100ms.
// Clear the canvas each time before redrawing.
// Stop when the ball goes to the right 100 units (pixels)







// -----------------------------------------------
// Challenge 5: Bouncing Balls
// Draw two balls moving at different speeds and directions.
// Each time a ball hits a wall, make it bounce (reverse its direction).
// Use clearRect() each frame to keep the motion smooth.








