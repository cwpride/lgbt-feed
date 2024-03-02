// Define the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the image
const imgSrc = 'logo.png'; // Update this path to your image's path
const img = new Image();
img.src = imgSrc;

img.onload = function() {
  // Image properties
  let imgX = 0; // Initial image X position
  let imgY = 0; // Initial image Y position
  const speed = 2; // Speed of the movement

  // Function to update the image's position
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw the image at new position
    ctx.drawImage(img, imgX, imgY, img.width, img.height);

    // Update image position
    imgX += speed;
    if (imgX > canvas.width) imgX = -img.width; // Reset position after crossing the canvas

    requestAnimationFrame(update); // Recursively call update
  }

  update(); // Start the animation
};

// Resize canvas on window resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
