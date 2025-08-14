let clickedTotal = 0;

audioButton = new Audio("Pop1.mp3");
audioButton.load();

function sendMessage() {
    displayMessage = document.getElementById("theMessage");
    message = ["I know it can be hard sometimes, but it ALWAYS gets better, man.", 
    "Your friends miss you more than your phone.",
    "Never. Give. Up.",
    "Despite everything, it's still you.",
    "Haha, you are gonna blink now.",
    "By reading this message, you are breathing manually.",
    "You are worth it.",
    "Maybe it wasn't your day today, but you still keep going.",
    "You can learn anything. I am a living example of this.",
    "Did you take a shower today?",
    "0.999999999999999... = 1"
    ]
    messageTotal = message.length;
    random = Math.floor(Math.random() * messageTotal);
    displayMessage.innerHTML = message[random];
    audioButton.play();

    clickedTotal++;
}

