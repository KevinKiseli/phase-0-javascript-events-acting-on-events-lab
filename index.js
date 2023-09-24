// // Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    // Get the current left position of the dodger
    const leftPosition = dodger.style.left.replace("px", "");
    const left = parseInt(leftPosition, 10);
  
    // Move the dodger to the left if it's not already at the left edge
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    // Get the current left position of the dodger
    const leftPosition = dodger.style.left.replace("px", "");
    const left = parseInt(leftPosition, 10);
    
    // Move the dodger to the right if it's not already at the left edge
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
}

// Listen for key presses to move the dodger left or right
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight(); 
    }
});