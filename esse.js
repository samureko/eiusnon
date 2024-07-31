// Create an event
const event = new Event('click');

// Get the target element
const targetElement = document.getElementById('target');

// Dispatch the event on the target element
targetElement.dispatchEvent(event);
