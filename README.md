# TaskFlow - Modern SaaS Landing Page

A portfolio-quality, production-ready SaaS landing page built for a Project Management platform.

## 🚀 Features

- ⚡ **React + Vite** - Lightning-fast development and builds
- 🎨 **Tailwind CSS** - Modern, utility-first styling
- 🌓 **Dark Mode** - Class-based dark mode with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ✅ **Form Validation** - React Hook Form with inline error messages
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🎭 **Clean Component Architecture** - Reusable, maintainable components
- 🔥 **No Flash Dark Mode** - Smooth theme transitions without flash

## 📦 Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- react-hook-form (form validation)
- clsx + tailwind-merge (className utilities)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer, MobileMenu
│   ├── sections/       # Hero, Features, Pricing, etc.
│   ├── ui/            # Button, Card, Input, ThemeToggle
│   └── forms/         # ContactForm, NewsletterForm
├── context/           # ThemeContext
├── hooks/             # useTheme
├── utils/             # cn() helper
└── data/              # Static content (features, pricing, etc.)
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Sections

1. **Hero** - Eye-catching headline with CTAs
2. **Features** - 6 project management features in grid layout
3. **Pricing** - 3-tier pricing (Free, Pro, Enterprise)
4. **Testimonials** - Customer reviews with avatars
5. **FAQ** - Accordion-style questions
6. **Contact** - Form with validation
7. **Footer** - Newsletter signup + links

## 🎨 Customization

### Colors

Edit brand colors in `tailwind.config.js`:

```js
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content

Update static content in the `src/data/` directory:
- `features.js` - Feature cards
- `pricing.js` - Pricing tiers
- `testimonials.js` - Customer reviews
- `faqs.js` - FAQ questions

### Branding

Replace "TaskFlow" in:
- `src/components/layout/Header.jsx`
- `src/components/layout/Footer.jsx`
- `index.html` title and meta tags

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy (auto-detected as Vite project)

### Other Platforms

Build command: `npm run build`  
Output directory: `dist`

## 📝 Notes

- Forms simulate submissions (no backend needed for portfolio demo)
- Replace hero illustration placeholder with actual image/SVG
- Add your own favicon in `/public`
- Testimonial avatars use DiceBear API (consider hosting your own)

## 🎯 Portfolio Highlights

- Clean, professional code structure
- Modern React patterns (hooks, context)
- Responsive design (mobile-first)
- Accessibility considerations
- Performance optimized
- Production-ready

---

## 📸 Portfolio Description (For Upwork)

**Title:**  
Modern SaaS Landing Page – React + Tailwind CSS

**Description:**

**Problem:**  
A startup needed a modern landing page to present their project management platform and attract early users with a professional, conversion-focused design.

**Solution:**  
Designed and developed a fully responsive SaaS landing page using React and Tailwind CSS with dark mode support, pricing sections, testimonials, and validated contact forms. Focused on clean UI, performance optimization, and mobile-first approach.

**Key Features:**
• Mobile-first responsive design across all breakpoints  
• Dark mode with localStorage persistence (no flash on load)  
• Reusable component architecture for easy maintenance  
• Professional typography and intentional spacing  
• Optimized performance build (~241KB gzipped)  
• Form validation with professional user feedback  

**Tech Stack:**  
React, Vite, Tailwind CSS, React Hook Form, Lucide Icons

**Live Demo:**  
[Your Vercel Link Here]

---

## 📄 License

MIT License - Feel free to use this for your portfolio or projects.
