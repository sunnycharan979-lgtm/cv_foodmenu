const btn = document.getElementById("startBtn");
const userText = document.getElementById("userText");
const aiText = document.getElementById("aiText");

// Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

btn.onclick = () => {
  recognition.start();
};

recognition.onresult = async (event) => {
  const text = event.results[0][0].transcript;
  userText.innerText = "You: " + text;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: text })
  });

  const data = await response.json();
  aiText.innerText = "AI: " + data.reply;

  speak(data.reply);
  animateAvatar(data.reply);
};

// Text-to-Speech
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;

  speech.onstart = () => startLipSync();
  speech.onend = () => stopLipSync();

  window.speechSynthesis.speak(speech);
}
