# 🚀 SliceAI - Setup Guide

Welcome to **SliceAI** – a simple yet powerful AI tool to summarize your thoughts in seconds using the **Gemini API**. Follow these steps to set it up locally and explore its magic.

---

## 📁 1. Clone the Repository

```bash
git clone https://github.com/your-username/SliceAI.git
cd SliceAI
```

---

## 📦 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

```bash
npm install
```

---

## 🔐 3. Configure Environment Variables

Create a `.env` file in the **root directory** and add your **Gemini API key** like this:

```ini
GEMINI_API_KEY=your_api_key_here
```

> ⚠️ **Important:** Never share your `.env` file or commit it to GitHub.
> It’s already included in `.gitignore` to keep your key safe.

---

## 🧠 4. Start the Server

Run the following command:

```bash
node server.js
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## 🗪 Features

* ✨ Clean, Minimal UI
* 🔍 Gemini-powered summarization
* ⚡ Instant response
* 🔐 Secure API key handling via .env

---

## 🙌 Contributions & Thanks

Thanks to all contributors, libraries, and AI services used to make this possible.

Made with ❤️ by **Prajwal**

If you like it, give it a star ⭐
