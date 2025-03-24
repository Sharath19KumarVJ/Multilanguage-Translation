# Multilanguage-Translation
🌍 Multi-Language Translator with Voice Support
This Flask-based language translation project allows users to:
✅ Enter text and translate it into multiple languages.
✅ Use voice input to speak and get translations.
✅ Listen to the translated text using text-to-speech.
✅ Supports 15+ languages, including English, Hindi, Kannada, Japanese, etc.

🏗️ How It Works
1️⃣ User Inputs Text or Voice

Users can type or speak the text they want to translate.

If using voice input, the browser records speech and converts it to text.

2️⃣ Select Target Language

Users choose a language from the dropdown menu.

3️⃣ Translation Process

The input text is sent to the Google Translate API (or other APIs).

The API translates the text into the selected language.

4️⃣ Display & Text-to-Speech

The translated text appears on the screen.

If enabled, the system speaks out the translated text.

🛠️ Installation & Usage
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/Language-Translator.git
cd Language-Translator
2️⃣ Install Dependencies
Make sure you have Python installed, then run:

sh
Copy
Edit
pip install flask googletrans==4.0.0-rc1 SpeechRecognition pyaudio gtts
3️⃣ Run the Flask Server
sh
Copy
Edit
python app.py
The app will start, and you can open http://127.0.0.1:5000 in your browser.

🎥 How to Use the Translator?
🖥️ Web Interface
1️⃣ Open the app in your browser.
2️⃣ Type or speak your text using the microphone button.
3️⃣ Select the target language from the dropdown menu.
4️⃣ Click the "Translate" button to get results.
5️⃣ Click the "Listen" button to hear the translated text.

🎤 Voice Support
Click the "Mic" button to speak.

The system converts voice to text and then translates it.

Click "Speak" to hear the translation.

📝 Additional Notes
Requires internet (for translation & text-to-speech).

Uses Google Translate API for translations.

You can add more languages by modifying the language list in the code.

🔹 Want to contribute? Fork the repo and make improvements! 
