# 🚀 Quick Start Guide

## Extract and Run (5 minutes)

1. **Extract the archive**
   ```bash
   tar -xzf portfolio-complete.tar.gz
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   (Takes 1-2 minutes)

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit: http://localhost:3000
   - The SVG animation should be looping
   - All project cards should be clickable
   - Resume button is in About section

## 📝 Before Deploying

### Must Do:
1. **Add your resume**: Place `resume.pdf` in `public/` folder
2. **Update email**: Change `luapteg@gmail.com` to yours in:
   - `src/components/Footer.jsx`
   - `src/pages/Home.jsx` (What You Can Expect section)

### Should Do:
3. **Update social links** in `src/components/Footer.jsx`:
   - LinkedIn URL
   - Dribbble URL
   - Or add your own (Behance, Twitter, etc.)

4. **Customize meta tags** in `index.html`:
   - og:image (your social share image)
   - og:url (your domain)

## 🔥 Deploy to Firebase

```bash
# One-time setup
npm install -g firebase-tools
firebase login
firebase init hosting
# Select 'dist' as public directory
# Configure as SPA: Yes

# Deploy
npm run deploy
```

Your site goes live at: `https://your-project.web.app`

## 📁 File Structure

```
portfolio-site/
├── src/
│   ├── components/      ← Reusable UI components
│   ├── pages/           ← Home & CaseStudy pages
│   ├── data/            ← Project content
│   ├── index.css        ← All styles
│   ├── App.jsx          ← Router setup
│   └── main.jsx         ← Entry point
├── public/
│   └── resume.pdf       ← Add your resume here
├── index.html           ← HTML template
├── package.json         ← Dependencies
├── vite.config.js       ← Build config
├── firebase.json        ← Firebase config
├── README.md            ← Full documentation
└── DEPLOYMENT.md        ← Deployment guide
```

## 🎨 Common Customizations

### Change Colors
Edit `src/index.css`, lines 10-20:
```css
:root {
  --accent: #8C7B6B;  ← Change this for different accent
}
```

### Add Projects
Edit `src/data/projects.js`:
1. Copy an existing project object
2. Change the key (e.g., `newproject: {...}`)
3. Update all fields
4. Add a card in `src/pages/Home.jsx`

### Animation Speed
In `src/index.css`, find `.anim-animated`:
```css
animation-duration: 18.4s;  ← Change this (3.4s animate + 15s hold)
```

## 🐛 Troubleshooting

**"Module not found"** → `rm -rf node_modules && npm install`

**Port 3000 in use** → `npm run dev -- --port 3001`

**Animation not looping** → Check browser console for errors

**Resume not downloading** → Ensure `resume.pdf` exists in `public/`

## 📚 Full Documentation

- **README.md** - Complete setup guide
- **DEPLOYMENT.md** - Detailed Firebase deployment steps
- **public/RESUME-INSTRUCTIONS.txt** - Resume setup help

## ✅ Launch Checklist

Before going live:
- [ ] Resume PDF added to `public/`
- [ ] Email updated everywhere
- [ ] Social links updated
- [ ] Tested on mobile (Chrome DevTools)
- [ ] All project links work
- [ ] Scroll animations working
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to Firebase
- [ ] Custom domain connected (if applicable)

## 🎯 Next Steps

1. Extract and test locally (today)
2. Customize content and links (today)
3. Add resume file (today)
4. Deploy to Firebase (today)
5. Connect custom domain (optional, takes 24-48h)
6. Share on LinkedIn (after deploy)

---

**Need help?** Check README.md or DEPLOYMENT.md for detailed guides.

**Everything working?** You're ready to deploy! 🚀
