# Paul Isac Portfolio

A minimal, refined portfolio website built with React + Vite. Features a continuous looping SVG animation, smooth scroll reveals, and dedicated case study pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## 🔥 Deploy to Firebase

### First-time Firebase Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**
   ```bash
   firebase init hosting
   ```
   
   Select:
   - Use an existing project (or create new)
   - Public directory: `dist`
   - Configure as single-page app: **Yes**
   - Set up automatic builds with GitHub: **No** (or Yes if you want)

### Deploy

```bash
# Build and deploy in one command
npm run deploy

# Or do it manually:
npm run build
firebase deploy --only hosting
```

Your site will be live at your Firebase URL (e.g., `https://your-project.web.app`)

## 📁 Project Structure

```
portfolio-site/
├── public/              # Static assets
│   └── resume.pdf      # Add your resume here
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── HeroAnimation.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── CaseStudy.jsx
│   ├── data/           # Project data
│   │   └── projects.js
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # All styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── firebase.json       # Firebase hosting config
└── package.json        # Dependencies
```

## 🎨 Customization

### Add Your Resume

Place your resume PDF in the `public/` folder:
```
public/
  └── resume.pdf
```

The download button in the About section will automatically work.

### Update Projects

Edit `src/data/projects.js` to add, remove, or modify projects. Each project needs:
- `title`, `client`, `year`, `role`
- `outcome` (one-line impact)
- `context`, `constraints`, `roleDetail`
- `process` (array of step objects)
- `impact`, `reflection`

### Modify Styles

All CSS is in `src/index.css`. Key design tokens are defined at the top:

```css
:root {
  --bg:          #F7F5F0;  /* Background */
  --text:        #1A1A18;  /* Text color */
  --accent:      #8C7B6B;  /* Accent color */
  --serif:       'Playfair Display', ...
  --sans:        'Source Sans 3', ...
}
```

### SVG Animation Timing

The hero animation loops every 18.4 seconds (3.4s animate + 15s hold).

To change timing, edit these values in `index.css`:
- `.anim-animated` → `animation-duration: 18.4s`
- Keyframe percentages scale to new duration

## 🔧 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Build + deploy to Firebase
```

## 📱 Features

- ✅ Fully responsive (mobile → desktop)
- ✅ React Router for navigation
- ✅ Smooth scroll animations
- ✅ Looping SVG hero animation
- ✅ SEO-friendly meta tags
- ✅ Fast build with Vite
- ✅ Firebase hosting ready
- ✅ Download resume button

## 🎯 Design Philosophy

**Minimal but interesting** — the site uses:
- Refined editorial typography (Playfair Display + Source Sans 3)
- Warm, muted color palette
- Subtle scroll reveals
- No shadows on cards (clean, flat aesthetic)
- Continuous looping animation (not distracting)

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animation not looping
Check that `animation-iteration-count: infinite` is set in `.anim-animated` class.

### Resume download not working
Make sure `resume.pdf` exists in `public/` folder and rebuild.

### Firebase deploy fails
1. Check you're logged in: `firebase login`
2. Make sure you've run `npm run build` first
3. Verify `firebase.json` points to `dist/` directory

## 📄 License

This is a personal portfolio. Feel free to reference the structure, but please don't copy the exact content or design wholesale.

## 🤝 Support

For questions or issues, reach out to Paul at luapteg@gmail.com

---

Built with React, Vite, and attention to detail.
