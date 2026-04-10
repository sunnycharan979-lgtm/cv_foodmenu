let isTalking = false;

function startLipSync() {
  isTalking = true;
}

function stopLipSync() {
  isTalking = false;
}

// Simple animation loop
function animateAvatar(text) {
  if (text.includes("happy")) {
    console.log("😊 Happy expression");
  } else if (text.includes("angry")) {
    console.log("😡 Angry expression");
  } else {
    console.log("😐 Neutral");
  }
}
