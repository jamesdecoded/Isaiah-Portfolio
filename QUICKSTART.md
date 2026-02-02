# 🚀 Quick Start Guide

## Installation & Running

1. Navigate to the project folder:
   ```bash
   cd isaiah-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## 📝 What to Update

### 1. Projects (PRIORITY)
File: `components/Projects.tsx`
- Replace placeholder projects with your actual projects
- Update titles, descriptions, tech stacks, and links

### 2. Experience (PRIORITY)
File: `components/Experience.tsx`
- Add your work experience, internships, or freelance work
- Update job titles, companies, dates, and achievements

### 3. Skills (Optional)
File: `components/Skills.tsx`
- Add any additional skills or technologies you've learned

### 4. Avatar Image (Optional)
File: `components/Hero.tsx`
- Replace the "IJ" placeholder with your actual photo
- Or keep the minimalist initials design

## 🎨 Customization Tips

- All colors are in `tailwind.config.js` and `app/globals.css`
- Animations can be adjusted in component files
- The glassmorphism effect is controlled by the `.glass` utility class

## 🌐 Deployment

### Vercel (Easiest):
1. Push to GitHub
2. Import on vercel.com
3. Deploy automatically

### Manual Build:
```bash
npm run build
npm start
```

## 💡 Pro Tips

- Test dark/light mode toggle (top right)
- Check mobile responsiveness
- Update meta tags in `app/layout.tsx` for SEO
- Add your resume PDF to `/public` folder

---

Need help? Check README.md for detailed documentation!
