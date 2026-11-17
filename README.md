# 🌟 Tejas Martin - Personal Portfolio & Achievements Website

A modern, responsive, high-performance portfolio website built with clean HTML5, CSS3, and JavaScript.

Features a dedicated **Achievements Showcase**, complete **About Me** section, interactive **Projects**, **Skills**, **Timeline Journey**, and multi-channel **"Text Me"** options (WhatsApp, SMS / iMessage, Email, and quick popup drawer).

---

## 🚀 Quick Start (View Your Site)

### Option 1: Direct in Browser
Simply double-click [`index.html`](file:///Users/tejasmartin/Portfolio/index.html) to open it in Chrome, Safari, or your default browser.

### Option 2: Local HTTP Server (Recommended)
Open Terminal in this directory and run:
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 🛠️ How to Customize Your Information

All your personal data, achievements, skills, projects, and contact numbers are consolidated in **one easy-to-edit file**:

👉 **[`profile-data.js`](file:///Users/tejasmartin/Portfolio/profile-data.js)**

### 1. Update Contact & "Text Me" Settings
Open `profile-data.js` and locate `personal`:
```javascript
personal: {
  fullName: "Tejas Martin",
  headline: "Software Developer & Tech Enthusiast",
  phoneNumber: "+919876543210",    // Your phone number for SMS
  whatsappNumber: "919876543210",  // Digits only with country code
  email: "your-email@example.com",
  defaultTextMessage: "Hi Tejas, I checked out your portfolio and would love to connect!",
  ...
}
```

### 2. Add or Edit Achievements
Under `achievements: [...]` in `profile-data.js`, add as many achievements as you like:
```javascript
{
  id: 7,
  title: "Hackathon Winner 2026",
  issuer: "Tech Summit",
  date: "January 2026",
  category: "Hackathons", // Hackathons, Awards, Certifications, Competitions, Academics
  badge: "1st Place 🏆",
  description: "Built an innovative solution in 24 hours.",
  link: "#"
}
```
The category tabs on the website will automatically filter your achievements!

### 3. Add Your Photo
Place your photo (e.g. `me.jpg` or `photo.png`) inside the `assets/` folder, then set:
```javascript
avatarUrl: "assets/photo.png",
```

### 4. Update Projects, Skills, and Journey
You can edit the `skills`, `projects`, and `timeline` arrays in `profile-data.js` to match your personal career milestones.

---

## 📱 How the "Text Me" Feature Works

Visitors to your site have 4 convenient ways to text you:
1. **WhatsApp Direct Chat**: One click opens WhatsApp (Web or Mobile) with a pre-filled greeting.
2. **Direct SMS / iMessage**: Mobile and Mac visitors can launch their default text messaging app directly.
3. **Floating "Text Me" Widget**: An accessible floating button in the bottom right corner lets visitors type a note and send it instantly.
4. **Interactive Message Box**: Visitors can type a message on the page and send it via WhatsApp, SMS, or Email with a single click.

---

## 🌐 Deploy Online for Free

### Method A: GitHub Pages (Free & Fastest)
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub named `portfolio` (or `<username>.github.io`).
3. Push your code and enable **GitHub Pages** under **Settings > Pages > Branch: main**.
4. Your site will be live at `https://<your-username>.github.io/portfolio`!

### Method B: Vercel or Netlify
Drag and drop your `Portfolio` folder into [Netlify Drop](https://app.netlify.com/drop) or deploy directly via GitHub on [Vercel](https://vercel.com) for instantaneous global hosting.
