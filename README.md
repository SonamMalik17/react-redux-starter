# Ajay's Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a dark/light theme toggle and responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Theme Support**: Dark/light mode toggle with next-themes
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Component Library**: Reusable UI components with consistent styling
- **Performance Optimized**: Fast loading with Next.js optimizations
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── icons/             # Favicons and icons
│   └── images/            # Images and media files
├── src/
│   ├── app/               # Next.js app directory (pages)
│   ├── components/        # React components
│   │   ├── home/         # Home page components
│   │   ├── projects/     # Project-related components
│   │   ├── shared/       # Shared/common components
│   │   └── ui/           # UI component library
│   └── hooks/            # Custom React hooks
├── docs/                  # Documentation
└── ...
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack on port 9002
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting
- `npm run typecheck` - Run TypeScript type checking

## 🎨 Customization

Refer to [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions on customizing the portfolio.

## 📦 Dependencies

### Core
- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework

### UI & Animation
- **Framer Motion** - Animation library
- **next-themes** - Theme management
- **React Icons** - Icon library

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js applications:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS**
- **DigitalOcean**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
