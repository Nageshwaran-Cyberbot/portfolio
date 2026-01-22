# 🚀 Developer Portfolio - Nageshwaran Manikumar

A modern, interactive developer portfolio website featuring a unique Matrix-inspired aesthetic, terminal UI elements, and smooth animations. Built from scratch with vanilla HTML, CSS, and JavaScript—no frameworks, no templates.

[![Live Demo](https://img.shields.io/badge/Live-Demo-ff6b6b?style=for-the-badge)](https://your-portfolio-url.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-00ff41.svg?style=for-the-badge)](LICENSE)

---

## ✨ Features

### 🎨 Visual Effects
- **Matrix Rain Background** - Animated falling code effect inspired by The Matrix
- **Custom Cursor** - Interactive cursor with hover effects on clickable elements
- **Parallax Scrolling** - Smooth depth effect on hero section elements
- **Glitch Animation** - Dynamic glitch effect on title hover
- **Fade-in Animations** - Intersection Observer-powered scroll animations

### 💻 Interactive Elements
- **Terminal Window** - Live typing animation cycling through commands
- **Profile Card** - Professional card with availability status and statistics
- **Smooth Navigation** - Auto-hiding navbar with scroll detection
- **Responsive Design** - Optimized for all screen sizes (desktop, tablet, mobile)

### 🚦 Performance Optimizations
- RequestAnimationFrame for smooth animations
- GPU-accelerated transforms using `translate3d`
- Debounced scroll events
- Optimized font rendering
- Reduced motion support for accessibility

### 🎯 Sections
1. **Hero** - Eye-catching introduction with terminal animation and profile card
2. **Projects** - Showcase of selected work with GitHub links
3. **Skills** - Technical capabilities organized by category
4. **Experience** - Professional work history with detailed achievements
5. **Contact** - Multiple ways to get in touch

---

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Fonts** | Google Fonts (Space Grotesk, Source Code Pro) |
| **Animation** | CSS Keyframes, Intersection Observer API |
| **Performance** | RequestAnimationFrame, GPU Acceleration |
| **Icons** | Custom SVG icons |

---

## 📦 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE (VS Code recommended)
- Optional: Live Server extension for local development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nageshwaran-Cyberbot/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your browser, or
   - Use a local server (recommended):
     ```bash
     # If you have Python installed
     python -m http.server 8000
     
     # If you have Node.js installed
     npx serve
     
     # If using VS Code, use Live Server extension
     ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or the appropriate port)
   - The portfolio should load with all animations working

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with semantic markup
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactions and animations
├── 1.jpeg             # Profile image (replace with your own)
├── README.md          # Project documentation (this file)
└── LICENSE            # MIT License (optional)
```

### File Breakdown

**index.html**
- Semantic HTML5 structure
- SEO meta tags
- Accessibility attributes
- Organized sections (Hero, Projects, Skills, Experience, Contact)

**styles.css**
- CSS Custom Properties (variables)
- Mobile-first responsive design
- Smooth animations and transitions
- Dark theme with accent colors
- Print-friendly styles

**script.js**
- Matrix rain canvas animation
- Custom cursor functionality
- Smooth scroll navigation
- Terminal typing animation
- Parallax effects
- Intersection Observer for fade-ins
- Performance optimizations

---

## 🎨 Customization Guide

### 1. Personal Information

**Update your details in `index.html`:**

```html
<!-- Line 7: Update page title -->
<title>Your Name | Software Developer</title>

<!-- Line 55-73: Update hero section -->
<h1 class="hero-title">
    Your custom headline
</h1>
<p class="hero-subtitle">
    Your introduction and background
</p>

<!-- Line 86: Replace profile image -->
<img src="your-image.jpg" alt="Your Name" class="profile-image">
```

### 2. Color Scheme

**Modify colors in `styles.css` (lines 13-30):**

```css
:root {
    --charcoal: #1e1e1e;      /* Dark background */
    --accent: #ff6b6b;         /* Primary accent color */
    --matrix-green: #00ff41;   /* Matrix/terminal green */
    --cream: #f5f5f0;          /* Text color */
    /* ... adjust other colors */
}
```

### 3. Projects Section

**Add/edit projects in `index.html` (lines 134-200):**

```html
<article class="work-item fade-in">
    <div class="work-number">01</div>
    <div class="work-content">
        <h3>Your Project Name</h3>
        <div class="work-tags">
            <span class="tag">Tech Stack</span>
        </div>
        <p class="work-description">
            Project description...
        </p>
        <a href="github-link" class="work-link">
            View on GitHub →
        </a>
    </div>
</article>
```

### 4. Skills & Technologies

**Update skills in `index.html` (lines 205-280):**

```html
<div class="skill-group fade-in">
    <div class="skill-icon">💻</div>
    <h3>Category Name</h3>
    <ul class="skill-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
</div>
```

### 5. Contact Information

**Update contact details (lines 327-358):**

```html
<a href="mailto:your-email@example.com" class="contact-item">
    <span class="contact-label">EMAIL</span>
    <span class="contact-value">Send a message</span>
</a>
```

### 6. Terminal Commands

**Customize terminal animation in `script.js` (lines 124-138):**

```javascript
const commands = [
    'your-command-1',
    'your-command-2',
    'your-command-3'
];

const outputs = {
    'your-command-1': 'Output 1',
    'your-command-2': 'Output 2'
};
```

---

## 🚀 Deployment

### GitHub Pages (Free)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Save and wait for deployment

3. **Access your site**
   - URL: `https://your-username.github.io/portfolio`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect to GitHub
- **Vercel**: Import from GitHub repository
- **Cloudflare Pages**: Connect to Git repository
- **Firebase Hosting**: Use Firebase CLI

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

---

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Reduced motion media query support
- High contrast text ratios
- Focus indicators on interactive elements
- Alt text for images

---

## 🔧 Performance Optimizations

- **Font Loading**: Preconnect to Google Fonts
- **Animations**: GPU-accelerated with `transform` and `opacity`
- **Scroll Performance**: RequestAnimationFrame for smooth scrolling
- **Image Optimization**: Use compressed images
- **Debouncing**: Scroll event optimization
- **CSS Custom Properties**: Efficient theming

### Performance Metrics (Lighthouse)

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🐛 Known Issues & Solutions

### Issue: Matrix rain slowing down page
**Solution**: The canvas animation is optimized, but on very old devices, you can reduce the frame rate in `script.js`:
```javascript
setInterval(drawMatrix, 50); // Change from 35 to 50ms
```

### Issue: Custom cursor not working on mobile
**Solution**: This is intentional. The custom cursor is hidden on touch devices (see media queries).

### Issue: Profile image not loading
**Solution**: Ensure `1.jpeg` exists in the root directory or update the image path in `index.html`.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

You are free to:
- ✅ Use for personal or commercial projects
- ✅ Modify and customize
- ✅ Distribute and share

**Attribution appreciated but not required!**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Nageshwaran Manikumar**

- 📧 Email: nageshwaran.manikumar@gmail.com
- 💼 LinkedIn: [nageshwaranmanikumar](https://linkedin.com/in/nageshwaranmanikumar)
- 🐙 GitHub: [@Nageshwaran-Cyberbot](https://github.com/Nageshwaran-Cyberbot)
- 📱 Phone: (551) 358-1782
- 💻 LeetCode: [nageshwaran_manikumar](https://leetcode.com/u/nageshwaran_manikumar/)

---

## 🙏 Acknowledgments

- Matrix Rain Effect inspired by [The Matrix](https://en.wikipedia.org/wiki/The_Matrix)
- Font families: [Google Fonts](https://fonts.google.com/)
- Design inspiration from various developer portfolios
- Icons and graphics designed specifically for this project

---

## 📊 Project Stats

- **Lines of Code**: ~1,500
- **File Size**: ~100KB (unminified)
- **Load Time**: <1s on average connection
- **Lighthouse Score**: 95+
- **No Dependencies**: Pure vanilla JavaScript!

---

## 🎯 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add project case studies with detailed breakdowns
- [ ] Create animated loading screen
- [ ] Add more interactive elements
- [ ] Implement contact form with backend
- [ ] Add resume download functionality
- [ ] Create multiple color theme options

---

## 🌟 Star This Repo!

If you found this portfolio helpful or inspiring, please consider giving it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ and lots of ☕ by Nageshwaran Manikumar**

[⬆ Back to Top](#-developer-portfolio---nageshwaran-manikumar)

</div>
