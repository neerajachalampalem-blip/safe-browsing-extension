🛡 Safe Browsing Chrome Extension
---

A lightweight Chrome extension that uses the Google Safe Browsing API to check whether a website is safe.
It automatically alerts or blocks users when visiting malicious or phishing websites — helping keep your browsing experience secure.

---

🚀 Features

🔍 Uses Google Safe Browsing API v4 for real-time threat detection

🚫 Automatically blocks unsafe or phishing websites

🧭 Simple popup UI to check the safety of the current tab

⚙ Built using Manifest V3 for enhanced performance and privacy

---

🧰 How to Use

1. Clone this repository:

git clone https://github.com/neerajachalampalem-blip/safe-browsing-extension.git


2. Open the project folder and replace
"YOUR_API_KEY_HERE" with your actual Google Safe Browsing API key in background.js.

## To Get a Google Safe Browsing API key

->. Open Google Cloud Console → https://console.cloud.google.com/


->. Create or select a Project.


->. Go to APIs & Services → Library and enable Google Safe Browsing API (or “Safe Browsing API v4”) for that project.


->. Go to APIs & Services → Credentials → Create credentials → API key.

Google will generate a key string (e.g. AIza...). This is your API key.


3. Open Chrome and go to chrome://extensions.


4. Enable Developer Mode (toggle in the top-right corner).


5. Click Load unpacked → select this extension folder.


6. Once loaded, you’ll see the extension named Safe Browsing Extension 1.0.


7. Go to Details → Pin to Toolbar → ON to keep it visible in the browser.


8. Visit any website of your choice.


9. Click the 🛡 Security icon[black colour box] → choose Check Current Site.


10. The extension will tell you whether the website is safe or malicious.

---

🧩 Tech Stack

Technology	Description

🟨 JavaScript	Core scripting logic
🧱 Chrome Extensions API	Extension and background management
🌐 Google Safe Browsing API	Threat and phishing detection
🎨 HTML, CSS	UI and popup design

---

💡 Future Enhancements

🧾 Add custom blocklist and whitelist options

📊 Display safety history and analytics

🌗 Dark & Light mode for popup UI

---

🤝 Contributing

Contributions are welcome! 

To contribute:

1. Fork the repository


2. Create a new branch (git checkout -b feature-name)


3. Commit your changes (git commit -m 'Add new feature')


4. Push to your fork (git push origin feature-name)


5. Open a Pull Request

---

📄 License

This project is licensed under the MIT License — see the LICENSE file for more details.

---

📬 Contact

For questions, feedback, or suggestions:
📧 MAIL:neerajaneeru292@gmail.com
🌐 GitHub Repository