# SVCEMUN'26 Website - Quick Start Guide

## 🚀 Getting Started

### For Developers

#### Opening the Website Locally:

1. **Navigate to the project folder**:
   ```bash
   cd "/Users/sanjeev/projects/svce copy"
   ```

2. **Open in browser**:
   - Double-click `svcemun26.html`, OR
   - Right-click → Open With → Your browser

3. **For best results, use a local server**:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server
   ```
   Then visit: `http://localhost:8000/svcemun26.html`

---

## ⚡ Immediate Actions Required

### 1. **Set Up Google Form** (URGENT - Do This First!)
📍 **File**: `REGISTRATION_FORM_SETUP.md`

1. Follow the instructions in `REGISTRATION_FORM_SETUP.md`
2. Create your Google Form
3. Copy the form URL
4. Open `svcemun26.html`
5. Find line ~1610 (search for "google.com")
6. Replace:
   ```html
   <a href="google.com">
   ```
   With:
   ```html
   <a href="https://forms.gle/YOUR_ACTUAL_FORM_LINK">
   ```

### 2. **Add Team Member Photos**
📍 **Folder**: `images/team/`

Add actual photos for:
- `pavan.jpg` - President
- `avila.jpg` - Vice President

**Recommended specs**:
- Format: JPG or PNG
- Size: 600×700 pixels
- File size: < 200KB each
- Professional headshot/portrait

### 3. **Add Study Guide PDFs**
📍 **Folder**: Create `downloads/` folder

1. Create folder: `mkdir downloads`
2. Add PDFs:
   - `UNSC_Study_Guide.pdf`
   - `UNHRC_Study_Guide.pdf`
   - `DISEC_Study_Guide.pdf`
   - `UNODC_Study_Guide.pdf`

3. Update links in `svcemun26.html` (line ~1717-1739):
   ```html
   <a href="downloads/UNSC_Study_Guide.pdf" download>
   ```

### 4. **Add Gallery Photos** (Optional)
📍 **Folder**: `images/gallery/`

- Add photos from past MUN events
- Recommended: 6-9 photos
- Format: JPG, optimized for web
- Size: 800×600 pixels

Update section in HTML (line ~1702):
```html
<img src="images/gallery/photo1.jpg" alt="Opening Ceremony SVCEMUN 2025" loading="lazy">
```

---

## 🎯 Final Checks Before Going Live

### Content Review:
- [ ] Secretary General message updated (remove Lorem Ipsum - line ~1533)
- [ ] Registration form link working
- [ ] All team photos visible
- [ ] Study guides downloadable
- [ ] Contact email correct (sf@svce.ac.in)
- [ ] Instagram handle correct (@sf_svce)
- [ ] Event date correct (January 2, 2026)

### Technical Checks:
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test countdown timer
- [ ] Test all navigation links
- [ ] Test dropdown menu on mobile
- [ ] Test FAQ accordion
- [ ] Test card flip on mobile
- [ ] All images loading

### Accessibility:
- [ ] Tab through entire page (keyboard nav)
- [ ] Test with screen reader (if possible)
- [ ] Check color contrast
- [ ] Verify all alt text

---

## 🌐 Deploying to Web Hosting

### Option 1: GitHub Pages (Free)
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - SVCEMUN'26 website"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/svcemun26.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repo settings → Pages → Source: main branch
```

Your site will be live at: `https://yourusername.github.io/svcemun26/svcemun26.html`

### Option 2: Netlify (Free, easier)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Site live instantly!

### Option 3: Your College Server
Contact your IT department to:
1. Upload files to college web server
2. Get URL (e.g., `www.svce.ac.in/mun2026`)
3. Ensure PHP/server supports static HTML

---

## 📝 Updating Content

### Quick Edits (No Coding Required):

#### Change Event Date:
**File**: `js/clock.js` (line ~2)
```javascript
var eventDate = new Date("Jan 2, 2026 10:00:00").getTime();
```

#### Update Secretary General Message:
**File**: `svcemun26.html` (line ~1533)
Replace Lorem ipsum with actual message.

#### Add FAQ:
**File**: `svcemun26.html` (line ~1943 in `faqData` array)
```javascript
{
  question: "Your question here?",
  answer: "Your answer here."
}
```

#### Change Committee Info:
**File**: `svcemun26.html` (line ~1978 in `committees` array)

#### Update Itinerary:
**File**: `svcemun26.html` (line ~2044 in `itineraries` object)
```javascript
day1: [
  { time: "9:00 AM", event: "EVENT NAME" },
  ...
]
```

---

## 🐛 Troubleshooting

### Images Not Loading?
- Check file paths are correct
- Ensure images are in correct folders
- Check browser console (F12) for errors

### Countdown Not Working?
- Check date format in `js/clock.js`
- Ensure jQuery and GSAP are loading
- Check browser console for JavaScript errors

### Form Not Submitting?
- Verify Google Form URL is correct
- Test form URL in new tab first
- Check for HTTPS (not HTTP)

### Mobile Not Responsive?
- Clear browser cache
- Test in incognito/private mode
- Try different mobile browsers

### Sections Not Appearing?
- Open browser console (F12)
- Look for JavaScript errors
- Verify data arrays have content

---

## 📊 Performance Optimization (Optional)

### Optimize Background Image:
```bash
# Using ImageMagick
convert images/backgrounds/mun-background.jpg -quality 75 -resize 1920x1080 images/backgrounds/mun-background-optimized.jpg

# Or use online tools: TinyPNG, Squoosh.app
```

### Enable Compression (if using server):
Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

---

## 📱 Testing on Real Devices

### Quick Mobile Test:
1. Deploy to Netlify (instant, free)
2. Get URL (e.g., `randomname.netlify.app`)
3. Open on phone
4. Test all interactions

### Local Network Testing:
1. Find your IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
2. Start local server: `python3 -m http.server 8000`
3. On phone, visit: `http://YOUR_IP:8000/svcemun26.html`

---

## 🔐 Security Notes

- ✅ No sensitive data in code
- ✅ External links use `rel="noopener noreferrer"`
- ✅ Email uses `mailto:` (no direct exposure)
- ✅ Form data handled by Google Forms (secure)

---

## 📞 Need Help?

### Common Questions:

**Q: Where do I update the registration fee?**
A: In the FAQ section, update the "registration fee" question answer (line ~1950)

**Q: How do I add more committee members?**
A: Edit the `committees` array (line ~1978), add to `members` array of specific committee

**Q: Can I change the color scheme?**
A: Yes! Update CSS variables (line ~203-218), but test contrast after changes

**Q: How do I add a new section?**
A: Copy an existing section structure, update ID, add to dropdown menu

---

## ✅ Launch Checklist

Print this and check off before launch:

- [ ] Google Form created and linked
- [ ] Registration button works
- [ ] Team photos uploaded
- [ ] Secretary General message updated
- [ ] All committee info verified
- [ ] Itinerary finalized
- [ ] FAQ answers reviewed
- [ ] Study guides uploaded
- [ ] Gallery photos added
- [ ] Contact info correct
- [ ] Social media links work
- [ ] Tested on iPhone
- [ ] Tested on Android
- [ ] Tested on laptop
- [ ] Tested on iPad/tablet
- [ ] Countdown timer accurate
- [ ] All navigation works
- [ ] Deployed to hosting
- [ ] DNS/URL configured
- [ ] SSL certificate active (HTTPS)
- [ ] Shared with organizing committee

---

## 🎉 You're Ready to Launch!

Once all checkboxes are complete:
1. Share URL with your team
2. Post on social media
3. Send announcement emails
4. Monitor registration responses

**Good luck with SVCEMUN'26!** 🎊

---

**Questions?** Email: sf@svce.ac.in
