# Portfolio Quick Start Guide

## 🚀 Getting Started

This repository now contains a modern, aesthetic portfolio built with React JS.

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

1. **Navigate to the portfolio directory:**
   ```bash
   cd portfolio-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:5173 in your browser

4. **Build for production:**
   ```bash
   npm run build
   ```

### 🎨 Customization Guide

#### Update Your Personal Information

1. **Name & Title** - Edit `src/components/Hero.jsx`:
   ```jsx
   <h1 className="hero-title">
     Hi, I'm <span className="gradient-text">Your Name</span>
   </h1>
   ```

2. **Contact Details** - Edit `src/components/Contact.jsx`:
   - Update email, phone, and location
   - Modify social media links

3. **Add Your Projects** - Edit `src/components/Projects.jsx`:
   ```jsx
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       technologies: ['React', 'Node.js'],
       github: 'your-github-link',
       live: 'your-live-demo-link'
     }
   ];
   ```

4. **Update Skills** - Edit `src/components/Skills.jsx`:
   - Add/remove skills in the `skillCategories` array

5. **Change Colors** - Edit `src/App.css`:
   ```css
   :root {
     --primary-color: #667eea;
     --secondary-color: #764ba2;
     /* Add your custom colors */
   }
   ```

### 📱 Features

- ✅ Fully responsive design
- ✅ Modern dark theme with gradients
- ✅ Smooth animations
- ✅ Glass morphism effects
- ✅ Mobile-friendly navigation
- ✅ Contact form
- ✅ Social media integration

### 🎯 Sections

1. **Hero** - Landing section with call-to-action
2. **About** - Brief introduction with role cards
3. **Skills** - Technical skills showcase
4. **Projects** - Portfolio of work
5. **Contact** - Get in touch form
6. **Footer** - Links and information

### 📦 Deployment

The portfolio can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

### 🆘 Support

For detailed documentation, see `portfolio-app/README.md`

---

**Made with React + Vite** 🚀
