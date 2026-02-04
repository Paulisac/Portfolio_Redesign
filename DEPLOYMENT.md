# Deployment Guide

## 🚀 Firebase Deployment (Recommended)

### Initial Setup

1. **Install Firebase CLI globally**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```
   This will open a browser window for authentication.

3. **Initialize Firebase** (only needed once)
   ```bash
   firebase init hosting
   ```
   
   When prompted:
   - **Select a project**: Choose your existing project or create new
   - **Public directory**: Enter `dist`
   - **Configure as single-page app**: Enter `y` (yes)
   - **Set up automatic builds**: Enter `n` (no) for now
   - **Don't overwrite** index.html if asked

4. **Build your site**
   ```bash
   npm run build
   ```

5. **Deploy!**
   ```bash
   firebase deploy --only hosting
   ```

### Quick Deploy (After Initial Setup)

```bash
npm run deploy
```

This single command will:
1. Build the production version
2. Deploy to Firebase Hosting

Your site will be live at: `https://your-project-id.web.app`

---

## 🌐 Custom Domain Setup

### Connect paulisac.com to Firebase

1. **Go to Firebase Console**
   - Navigate to Hosting section
   - Click "Add custom domain"
   - Enter: `paulisac.com`

2. **Verify Ownership**
   - Firebase will provide a TXT record
   - Add this to your domain's DNS settings
   - Wait for verification (can take 24-48 hours)

3. **Update DNS Records**
   - Add the A records provided by Firebase
   - Example:
     ```
     Type: A
     Name: @
     Value: 151.101.1.195
     
     Type: A  
     Name: @
     Value: 151.101.65.195
     ```

4. **Enable SSL** (automatic)
   - Firebase provisions SSL certificates automatically
   - This can take up to 24 hours

5. **Add www Subdomain** (optional)
   - In Firebase, add another custom domain: `www.paulisac.com`
   - Set it to redirect to `paulisac.com`

---

## 🔄 Update Process

When you make changes:

```bash
# 1. Make your changes in src/
# 2. Test locally
npm run dev

# 3. Build and deploy
npm run deploy
```

---

## 📊 Check Deployment Status

```bash
# View hosting info
firebase hosting:channel:list

# View deployment history  
firebase hosting:clone

# Check your site
firebase open hosting:site
```

---

## 🐛 Common Issues

### Issue: "Project not found"
**Solution**: Run `firebase use --add` and select your project

### Issue: Build folder not deploying
**Solution**: 
1. Check `firebase.json` has `"public": "dist"`
2. Run `npm run build` before deploying
3. Verify `dist/` folder exists

### Issue: Routes not working (404 errors)
**Solution**: Make sure `firebase.json` includes the rewrite rule:
```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Issue: Old version still showing
**Solution**: 
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check Firebase console to verify deployment succeeded

---

## 📈 Performance Tips

### Optimize Images
If you add project images later:
1. Use WebP format when possible
2. Compress images with TinyPNG or Squoosh
3. Keep images under 200KB each

### Check Performance
```bash
# Build and analyze
npm run build

# Check bundle size
du -sh dist/assets/*
```

### Firebase Analytics (Optional)
To track visitors:
1. Enable Analytics in Firebase Console
2. Add to `index.html`:
```html
<script src="/__/firebase/9.0.0/firebase-app.js"></script>
<script src="/__/firebase/9.0.0/firebase-analytics.js"></script>
<script src="/__/firebase/init.js"></script>
```

---

## 🔐 Security

### Protect Firebase Project
1. Set up authentication rules in Firebase Console
2. Only give deployment access to trusted users
3. Never commit `.firebaserc` with sensitive data

### Environment Variables
For API keys or sensitive data:
1. Create `.env` file (already in .gitignore)
2. Use `import.meta.env.VITE_API_KEY` in code
3. Set env vars in Firebase Console for production

---

## 📱 Testing Checklist

Before each deployment:

- [ ] Test locally with `npm run dev`
- [ ] Build successfully with `npm run build`
- [ ] Check all routes work
- [ ] Test on mobile (Chrome DevTools)
- [ ] Verify resume download works
- [ ] Check all project links
- [ ] Test scroll animations
- [ ] Verify contact links (email, LinkedIn, etc.)

---

## 🎯 Post-Deployment

After deploying:

1. **Visit your site** - Check everything loads
2. **Test mobile** - Open on your phone
3. **Check performance** - Use Google PageSpeed Insights
4. **Update social links** - Add URL to LinkedIn, Twitter, etc.
5. **Submit to search engines** - Google Search Console

---

## 💡 Pro Tips

1. **Deploy previews first**
   ```bash
   firebase hosting:channel:deploy preview
   ```
   Test changes before going live

2. **Rollback if needed**
   ```bash
   firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
   ```

3. **Set up CI/CD** (Advanced)
   - Connect GitHub repository
   - Auto-deploy on push to main branch
   - Set up in Firebase Console → Hosting

---

Need help? Check [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
