const toggleButton = document.getElementById("toggleAccessibility");
const audioButtons = document.querySelectorAll("button[data-text]");

// 🔊 говор
function speakText(text) {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "bg-BG";
    speech.rate = 1.1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

// аудио бутони
audioButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-text");
        speakText(text);
    });
});

// toggle режим
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("accessible");

    if (document.body.classList.contains("accessible")) {
        toggleButton.textContent = "👁️ Достъпен режим: ВКЛ";
    } else {
        toggleButton.textContent = "👁️ Достъпен режим: ИЗКЛ";
    }
});