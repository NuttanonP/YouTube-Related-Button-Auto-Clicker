# 📺 YouTube Related Button Clicker – Chrome Extension

> **Bringing back the YouTube we remember.**

---

## 🧠 Why?
This project helps you rediscover YouTube's best recommendations: content truly related to what you're watching now, not just what's trending or what your most watching.
This lightweight Chrome extension forces YouTube to **automatically switch to the "Related" tab**, showing recommendations based on the **current video** — just like the old days.

---

## ⚙️ What It Does

* ✅ Automatically clicks the "Related" tab when watching a YouTube video
* 🔄 Detects page changes using YouTube’s SPA navigation
* 🧼 Simple, lightweight, no extra permissions required
* 👨‍💻 100% open-source and customizable

---

## 📦 Installation

1. Clone or download this repo.
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **"Load unpacked"** and select the extension folder
![image](https://github.com/user-attachments/assets/1cc09644-785e-46d0-9835-f14f82d4ea93)


---

## 🔍 How It Works

* Uses a `MutationObserver` to detect when the URL changes on YouTube
* Waits for the "Related" tab to load
* Clicks the "Related" button automatically, restoring YouTube's original video-based recommendation logic

---

This project leverages AI to streamline both the development and documentation processes.
