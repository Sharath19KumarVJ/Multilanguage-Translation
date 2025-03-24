// Translate Text
function translateText() {
    let text = document.getElementById("inputText").value;
    let srcLang = document.getElementById("srcLang").value;
    let destLang = document.getElementById("destLang").value;

    if (!text) {
        alert("Please enter text to translate!");
        return;
    }

    fetch("/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, srcLang, destLang })
    })
    .then(response => response.json())
    .then(data => {
        if (data.translated_text) {
            document.getElementById("translatedText").value = data.translated_text;
        } else {
            alert("Translation error: " + data.error);
        }
    });
}

// Text-to-Speech
function speakTranslation() {
    let text = document.getElementById("translatedText").value;
    let destLang = document.getElementById("destLang").value;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = getSpeechLangCode(destLang);
    speechSynthesis.speak(speech);
}

// Get Language Code for Speech
function getSpeechLangCode(langCode) {
    const langMap = {
        "en": "en-US", "hi": "hi-IN", "kn": "kn-IN", "ja": "ja-JP", "es": "es-ES",
        "fr": "fr-FR", "de": "de-DE", "it": "it-IT", "ru": "ru-RU", "zh-CN": "zh-CN",
        "ko": "ko-KR", "ar": "ar-SA", "pt": "pt-PT", "tr": "tr-TR", "bn": "bn-BD"
    };
    return langMap[langCode] || "en-US";
}

// Speech-to-Text (Voice Input)
function startSpeechRecognition() {
    let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = document.getElementById("srcLang").value;
    recognition.start();

    recognition.onresult = function(event) {
        document.getElementById("inputText").value = event.results[0][0].transcript;
    };

    recognition.onerror = function(event) {
        alert("Speech recognition error: " + event.error);
    };
}
