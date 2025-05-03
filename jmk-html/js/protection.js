// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Detect PrintScreen key and overlay full white screen with pop-up message
document.addEventListener('keyup', function(e) {
  if (e.key === "PrintScreen" || e.keyCode === 44) {
    // Create overlay
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Full white background
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none';
    document.body.appendChild(overlay);

    // Show pop-up message
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#ff0000';
    popup.style.color = '#ffffff';
    popup.style.fontSize = '20px';
    popup.style.fontWeight = 'bold';
    popup.style.borderRadius = '0px';
    popup.style.zIndex = '10000';
    popup.textContent = 'Screenshot is not allowed on this site!';
    document.body.appendChild(popup);

    // Remove overlay and pop-up after 3 seconds
    setTimeout(() => {
      overlay.remove();
      popup.remove();
    }, 3000); // Removes the overlay and pop-up after 3 seconds
  }
});
