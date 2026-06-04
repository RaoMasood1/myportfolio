# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects, skills, and getting in touch with potential clients or employers.

## Features

✨ **Modern Design**
- Clean, professional UI with smooth animations
- Fully responsive (works on all devices)
- Beautiful gradient effects and hover interactions

📱 **Responsive Layout**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized for desktop, tablet, and mobile screens

🎨 **Sections Included**
- **Hero Section**: Eye-catching introduction with CTA buttons
- **About Section**: Your story with statistics
- **Projects Section**: Showcase your best work (6 project cards)
- **Skills Section**: Display your technical expertise with progress bars
- **Contact Section**: Get in touch form and contact information
- **Navigation**: Fixed navbar with smooth scrolling

⚡ **Interactive Features**
- Smooth scroll navigation
- Animated progress bars for skills
- Hover effects on project cards
- Scroll-to-top button
- Form validation
- Active navigation link highlighting
- Fade-in animations on scroll

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
└── README.md           # This file
```

## How to Use

1. **Open the website**: Open `index.html` in your web browser
2. **Customize**: Edit the files to add your information
3. **Deploy**: Upload to your hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Customization Guide

### 1. **Update Personal Information**

Edit `index.html`:

```html
<!-- Change the name in navigation -->
<div class="logo">Your Name</div>

<!-- Update hero section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title/Role</p>
<p class="hero-description">Your tagline</p>

<!-- Update social media links -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

### 2. **Update About Section**

Replace the about text with your story:
```html
<p>Your background and experience...</p>
```

Update statistics:
```html
<div class="stat">
    <h3>50+</h3>
    <p>Your stat here</p>
</div>
```

### 3. **Add Your Projects**

Edit project cards in the Projects section:
```html
<div class="project-card">
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
    </div>
</div>
```

### 4. **Update Skills**

Modify the skills section with your expertise:
```html
<div class="skill-item">
    <span>Your Skill</span>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### 5. **Update Contact Information**

Replace with your actual details:
```html
<p><a href="mailto:your@email.com">your@email.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

### 6. **Customize Colors**

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Dark blue */
    --accent-color: #3b82f6;       /* Light blue */
    --text-dark: #1f2937;          /* Text color */
    --bg-light: #f9fafb;           /* Light background */
}
```

## Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" and select "Deploy manually"
3. Drag and drop your project folder
4. Your site is live!

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy
4. Your site is live!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. Optimize images before adding them
2. Use modern image formats (WebP)
3. Minimize CSS and JavaScript for production
4. Use a CDN for Font Awesome icons (already included)

## Troubleshooting

### Navigation not working?
- Make sure section IDs match the href attributes
- Check that JavaScript is enabled

### Form not submitting?
- The form shows a success message (JavaScript only)
- To send emails, integrate with a service like:
  - Formspree (formspree.io)
  - Netlify Forms
  - EmailJS

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Check if CSS file is properly linked
- Verify no CSS is conflicting

## Making the Form Actually Send Emails

To enable email functionality, integrate with **Formspree**:

1. Go to [formspree.io](https://formspree.io)
2. Create an account and add your email
3. Replace the form in `index.html` with their code

Or use **Netlify Forms**:
1. Add `netlify` attribute to the form
2. Deploy to Netlify
3. Emails will be sent automatically

## SEO Optimization

Add these meta tags to `index.html` head:
```html
<meta name="description" content="Your professional portfolio">
<meta name="keywords" content="developer, designer, portfolio">
<meta name="author" content="Your Name">
```

## License

Feel free to use this template for your personal portfolio. Modify and customize as needed!

## Support

For questions or issues, refer to the code comments or modify the CSS/JavaScript as needed.

---

**Happy building! 🚀**
