# Isaiah Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcase your projects, skills, experience, and professional achievements with a beautiful, animated interface.

## Features

- ✨ **Smooth Animations** - Powered by Framer Motion for engaging transitions and effects
- 🎨 **Dark Theme Toggle** - Built-in theme provider for dark/light mode support
- 📱 **Fully Responsive** - Mobile-first design that works on all screen sizes
- ⚡ **High Performance** - Built with Next.js 14 for optimal speed and SEO
- 🎯 **Component-Based Architecture** - Modular, reusable React components
- 📦 **Type-Safe** - Full TypeScript support for better development experience
- 🎭 **Dynamic Sections** - Customizable Hero, About, Projects, Skills, Experience, and Contact sections

## Project Structure

```
Isaiah-Portfolio/
├── app/
│   ├── layout.tsx          # Root layout wrapper
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Hero/welcome section
│   ├── About.tsx           # About me section
│   ├── Projects.tsx        # Portfolio projects showcase
│   ├── Skills.tsx          # Technical skills section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Contact.tsx         # Contact/CTA section
│   ├── Background.tsx      # Background effects
│   └── ThemeProvider.tsx   # Theme context provider
├── public/                 # Static assets (images, icons)
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Technologies Used

- **Framework**: Next.js 14.2.0
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.0
- **Animation**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Language**: TypeScript 5.3.0
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Isaiah-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create an optimized production build
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Customization

### Adding Projects

Edit the `Projects.tsx` component to add your own projects. Update the project data structure with:
- Project title
- Description
- Technologies used
- Project links (GitHub, live demo)
- Images/thumbnails

### Updating Skills

Modify the `Skills.tsx` component to showcase your technical expertise in categories like:
- Programming languages
- Frameworks and libraries
- Tools and platforms
- Soft skills

### Work Experience

Customize the `Experience.tsx` component to display your professional timeline with:
- Company name
- Job title
- Duration
- Key responsibilities and achievements

### Contact Information

Update the `Contact.tsx` component with your:
- Email address
- Social media links
- Phone number
- Location
- Contact form endpoint

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **GitHub Pages**: Configure with GitHub Actions
- **Docker**: Create a Dockerfile for containerized deployment

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS minification with Tailwind
- ✅ Font optimization
- ✅ SEO meta tags in layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Blog section with MDX support
- [ ] Animation preferences (respects prefers-reduced-motion)
- [ ] CMS integration for easier content management
- [ ] Email newsletter signup
- [ ] Social media feed integration

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the repository or contact directly.

---

**Built with ❤️ by Isaiah**
