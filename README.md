# Polymath Portfolio — Polyinnovae AI Application

An S-tier interactive web portfolio engineered specifically to satisfy all requirements for the **Polyinnovae AI** application form.

---

## 📋 Included Requirements Checklist

- [x] **1. Clear Photo of You**: Custom image upload & live avatar preview card.
- [x] **2. 1-Minute Intro Video**: Interactive video player supporting custom MP4 uploads, YouTube/Loom links, and a structured 60-second introduction script.
- [x] **3. Resume**: Section with interactive skills, education at *Nagarjuna College of Engineering and Technology*, and PDF download/upload capability.
- [x] **4. 100-Word Answer ("What makes you want to build like a polymath?")**: Built-in 98-word essay with real-time word counter, edit mode, and copy button.

---

## 🚀 How to Deploy to Vercel

### Method 1: Deploy with Vercel CLI (Fastest)

1. Open your terminal in this project directory (`C:\Users\sahuk\.gemini\antigravity\scratch\polymath_portfolio`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the quick prompts in your terminal.
4. Vercel will output your live URL (`https://polymath-portfolio-xxx.vercel.app`).
5. Paste this URL into **"Your Vercel link *"** field on the Polyinnovae form!

---

### Method 2: Deploy via GitHub & Vercel Dashboard

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Polymath Portfolio commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository and click **Deploy**.
4. Copy your live `*.vercel.app` domain link and paste it into the application form.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (Dark mode aesthetic)
- **Icons**: Lucide React
- **Deployment**: Vercel ready
