# Portfolio 2025

A modern, minimal, and fully responsive portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Fully Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and minimal design with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and semantic HTML
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Accessible**: ARIA labels, keyboard navigation, and screen reader friendly
- **Modular Components**: Reusable UI components for easy maintenance
- **Type-Safe**: Built with best practices and proper prop validation

## 📁 Project Structure

```
portfolio-2025/
├── public/
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Textarea.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── Container.jsx
│   │   ├── Footer.jsx
│   │   └── SEO.jsx
│   ├── constants/
│   │   └── index.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.js` to update:
- Site configuration (name, title, description, etc.)
- Navigation links
- Social media links
- Skills list
- Projects data
- Services data

### Update SEO Meta Tags

Edit the following files:
- `index.html` - Static meta tags
- `src/components/SEO.jsx` - Dynamic SEO component

### Styling

The project uses Tailwind CSS for styling. Key configuration:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and Tailwind directives

## 🔧 Performance Optimizations

- ✅ Code splitting and lazy loading
- ✅ Optimized images and assets
- ✅ Minified CSS and JavaScript
- ✅ Tree shaking for unused code
- ✅ Efficient chunk splitting
- ✅ Fast refresh during development

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 👤 Author

**Marion Ely Bailey**
- Website: [mar.com](https://mar.com)
- GitHub: [@mar1154](https://github.com/mar1154)
- LinkedIn: [@marion-bailey](https://linkedin.com/in/marion-bailey)

## 🙏 Acknowledgments

- Built with [React] and [React Three Fiber](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations built with [FramerMotion] 
- Powered by [Vite](https://vitejs.dev/)

