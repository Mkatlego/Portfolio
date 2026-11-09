# Mooketsi Katlego Portfolio

A modern, futuristic portfolio website built with React, TypeScript, and styled-components. Features animated backgrounds, glassmorphism UI, and responsive design.

## 🚀 Features

- **Futuristic Design**: Cyberpunk/neon aesthetic with glassmorphism effects
- **Animated Background**: Canvas-based particle system with glowing orbs
- **Interactive Components**: 3D card effects, glitch animations, smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance Optimized**: 127KB gzipped bundle size
- **Accessibility**: WCAG-compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Open Graph tags, Twitter cards, and proper metadata

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Styled Components with custom theme
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: React Icons
- **Forms**: Formspree (for contact form)
- **Build Tool**: Create React App (with plans to migrate to Vite)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets and HTML template
├── src/
│   ├── assets/         # Images and static resources
│   ├── components/     # React components
│   │   ├── About/
│   │   ├── Background/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── styles/        # Styled-components theme and global styles
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main app component
│   └── index.tsx      # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Email**: Update in `src/components/Home/Home.tsx`, `src/components/Contact/Contact.tsx`, and `src/components/Footer/Footer.tsx`
2. **Social Links**: Update GitHub, LinkedIn URLs in component files
3. **Skills**: Modify `src/components/Skills/Skills.tsx` to match your expertise
4. **Projects**: Add your real projects in `src/components/Projects/Projects.tsx`

### Configure Contact Form

Replace `YOUR_FORMSPREE_ID` in `src/components/Contact/Contact.tsx` with your actual Formspree form ID.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Replace in the code

### Update Theme Colors

Modify color values in `src/styles/theme.ts` to customize the color palette.

## 🚀 Deployment

### GitHub Pages

The project is configured to deploy to GitHub Pages:

```bash
# Build and deploy
npm run deploy
```

This command:
1. Runs `npm run build` to create an optimized production build
2. Deploys the `build/` folder to the `gh-pages` branch
3. Automatically serves at `https://mkatlego.github.io/Portfolio/`

### Manual Deployment

If you need to deploy elsewhere:

```bash
# Build the project
npm run build

# The `build/` folder contains the optimized static files
# Upload these to your hosting provider
```

## 📝 To-Do

- [ ] Optimize profile image (resize to 800×800px, compress to ~50KB)
- [ ] Add actual project screenshots
- [ ] Configure Formspree form ID
- [ ] Add more projects to showcase
- [ ] Migrate from Create React App to Vite
- [ ] Add unit tests with React Testing Library
- [ ] Add blog section
- [ ] Implement dark/light mode toggle

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and use it as a template for your own portfolio!

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 📬 Contact

- **Email**: khupemooketsi@gmail.com
- **GitHub**: [Mkatlego](https://github.com/Mkatlego)
- **LinkedIn**: [Mooketsi Katlego](https://linkedin.com/in/mooketsi-katlego)

---

Built with ❤️ using React, TypeScript, and styled-components.
