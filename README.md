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

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

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

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist/` directory.

## 🌐 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy `dist/` folder to gh-pages branch

## 🔧 Performance Optimizations

- ✅ Code splitting and lazy loading
- ✅ Optimized images and assets
- ✅ Minified CSS and JavaScript
- ✅ Tree shaking for unused code
- ✅ Efficient chunk splitting
- ✅ Fast refresh during development

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Screen reader friendly

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Your Name**
- Website: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)

