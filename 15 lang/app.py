from flask import Flask, render_template, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

# Language codes for dropdown
LANGUAGES = {
    "English": "en", "Hindi": "hi", "Kannada": "kn", "Japanese": "ja", "Spanish": "es",
    "French": "fr", "German": "de", "Italian": "it", "Russian": "ru", "Chinese": "zh-CN",
    "Korean": "ko", "Arabic": "ar", "Portuguese": "pt", "Turkish": "tr", "Bengali": "bn"
}

@app.route("/")
def index():
    return render_template("index.html", languages=LANGUAGES)

@app.route("/translate", methods=["POST"])
def translate_text():
    data = request.get_json()
    text = data.get("text")
    src_lang = data.get("srcLang")
    dest_lang = data.get("destLang")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
        translated = translator.translate(text, src=src_lang, dest=dest_lang)
        return jsonify({"translated_text": translated.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
