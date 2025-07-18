# Professional Portfolio Website

A modern, responsive portfolio website for Rajat Kumar Thakur, built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases Full Stack development skills, experience, and projects with a clean, accessible design.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Type Safety**: Built with TypeScript for robust development
- **Performance**: Optimized for Core Web Vitals

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajat-thakur/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Development

### Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── lib/                  # Utility functions
│   └── utils.ts          # Class name utilities
└── public/               # Static assets
```

### Customization

#### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Rajat Kumar Thakur's name, title, and social links
- `components/About.tsx` - Professional summary and background as Full Stack Developer
- `components/Experience.tsx` - 3+ years of work history and achievements
- `components/Projects.tsx` - Portfolio projects including e-commerce platform, chat app, etc.
- `components/Contact.tsx` - Contact information and social media links

#### Styling
- Colors and themes: `tailwind.config.ts` and `app/globals.css`
- Component styles: Individual component files using Tailwind classes
- Custom animations: `app/globals.css`

#### Content
- SEO meta tags: `app/layout.tsx`
- Skills and technologies: `components/Skills.tsx`
- Project showcase: `components/Projects.tsx`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- **Mobile** (< 768px): Single column layout, touch-friendly interactions
- **Tablet** (768px - 1024px): Optimized grid layouts, hover states
- **Desktop** (> 1024px): Full multi-column layouts, advanced interactions

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - CTAs, links, accents
- **Secondary**: Green (#10B981) - Success states, highlights
- **Accent**: Orange (#F59E0B) - Special elements, warnings
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, hierarchical sizing (text-4xl to text-lg)
- **Body**: Regular weight, optimal line height (1.6)
- **Code**: Monospace font for technical content

### Spacing
- **8px base unit**: Consistent spacing throughout
- **Container**: Max-width with responsive padding
- **Sections**: 80px vertical padding (py-20)

## 🔧 Technical Details

### Built With
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Class Variance Authority**: Type-safe component variants

### Performance Optimizations
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic with Next.js
- **SEO**: Meta tags, structured data, sitemap
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Custom Server
1. Build the project: `npm run build`
2. Start the server: `npm start`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please reach out:
- Email: rajatkumarthakur@gmail.com
- LinkedIn: [linkedin.com/in/rajat-kumar-thakur](https://linkedin.com/in/rajat-kumar-thakur)
- GitHub: [github.com/rajat-thakur](https://github.com/rajat-thakur)

---

**Note**: This portfolio showcases Rajat Kumar Thakur's professional experience and projects as a Full Stack Developer.