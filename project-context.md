# Portfolio Project Context

## Project Overview
This is a personal portfolio website built with React, TypeScript, and Vite. The project showcases the developer's skills, experience, projects, and education in a modern, interactive single-page application.

## Technology Stack

### Core Technologies
- **React 18.2.0** - Frontend framework
- **TypeScript 5.2.2** - Type safety and development experience
- **Vite 5.1.4** - Build tool and development server
- **Sass 1.71.1** - CSS preprocessing

### Key Dependencies
- **Framer Motion 11.2.4** - Animation library for smooth transitions
- **Lottie React 2.4.0** - Lottie animations integration
- **React Router DOM 6.22.1** - Client-side routing
- **FontAwesome 6.5.1** - Icon library
- **React Intersection Observer 9.10.2** - Scroll-based animations
- **use-local-storage 3.0.0** - Local storage hook

## Project Structure

### Architecture Pattern
The project follows **Atomic Design principles** with a clear component hierarchy:

```
src/
├── atoms/           # Basic UI components (Button, Text, Image, Input)
├── molecules/       # Simple component combinations
├── organisms/       # Complex UI sections (Banner, Experience, Skills, etc.)
├── pages/           # Page-level components
├── data/            # JSON data files for content
├── hooks/           # Custom React hooks
├── styles/          # Global styles and mixins
└── util/            # Utility functions
```

### Key Components

#### Atoms
- **Button** (`atoms/button/`) - Reusable button component with TypeScript props
- **Text** (`atoms/text/`) - Text component for consistent typography
- **Image** (`atoms/image/`) - Image wrapper component
- **Input** (`atoms/input/`) - Form input component

#### Organisms
- **Banner** (`organisms/banner/`) - Header with navigation and theme toggle
- **BannerImage** (`organisms/bannerImage/`) - Hero section with profile image
- **Experience** (`organisms/experience/`) - Work experience section with Lottie animation
- **Skill** (`organisms/skill/`) - Skills showcase with hover animations
- **Project** (`organisms/project/`) - Portfolio projects display
- **Education** (`organisms/education/`) - Educational background
- **Contact** (`organisms/contact/`) - Contact form and information

### Data Structure

#### Projects Data (`data/project.json`)
```json
[
  {
    "title": "LearnWave-E-learning-platform",
    "content": "A simple e-learning project with both admin and user side.",
    "technology": ["React JS", "Node JS", "MongoDB", "Tailwind CSS"],
    "link": "https://github.com/Rabita1767/LearnWave-E-learning-platform-"
  }
]
```

#### Skills Data (`data/skill.json`)
```json
[
  {
    "link": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "text": "HTML"
  }
]
```

## Key Features

### 1. Dark/Light Theme Toggle
- Custom CSS variables for theme switching
- Smooth transitions between themes
- Persistent theme state

### 2. Interactive Animations
- **Framer Motion** for scroll-triggered animations
- **Lottie** animations for visual appeal
- Custom cursor effects with mouse tracking
- Hover animations on skill cards

### 3. Responsive Design
- Mobile-first approach with custom breakpoints
- Sass mixins for consistent responsive behavior
- Flexible grid layouts

### 4. Smooth Scrolling Navigation
- Custom `useScrollToElement` hook
- Smooth scroll behavior to sections
- Mobile-friendly hamburger menu

### 5. Modern UI/UX
- Custom cursor with outline and dot
- Gradient effects and shadows
- Professional color scheme (purple/pink theme)
- Clean typography with custom fonts

## Styling Architecture

### CSS Variables
The project uses CSS custom properties for theming:
```css
:root {
  --primaryFont: eurostile, sans-serif;
  --textColor: #b97ebb;
  --Bluecolor: #130F49;
  --cursorcolor: #130F49;
  /* ... more variables */
}

[dark-theme="dark"] {
  --background-color: rgb(15, 12, 65);
  --textBlack: #fff;
  /* ... dark theme overrides */
}
```

### Sass Mixins
Custom breakpoint mixins for responsive design:
```scss
$breakpoints: (
  "sm": "(min-width:360px) and (max-width:645px)",
  "md": "(min-width:645px) and (max-width:768px)",
  "lg": "(min-width:768px) and (max-width:1280px)"
);
```

## Development Setup

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Build Configuration
- TypeScript compilation with strict settings
- Vite for fast development and optimized builds
- ESLint for code quality

## Content Management

### Dynamic Content
- Skills and projects are loaded from JSON files
- Easy to update without code changes
- Structured data format for consistency

### Navigation
- Single-page application with smooth scrolling
- Mobile-responsive hamburger menu
- Direct links to sections

## Performance Considerations

### Optimizations
- Lazy loading with React Intersection Observer
- Optimized animations with Framer Motion
- Efficient re-renders with proper React patterns
- Vite's fast build system

### Assets
- Custom fonts loaded locally
- Lottie animations for lightweight graphics
- Optimized images and SVGs

## Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- CSS Custom Properties support

## Future Enhancement Opportunities
- Add more interactive elements
- Implement contact form functionality
- Add blog section
- Include testimonials or recommendations
- Add more animation effects
- Implement PWA features

## Development Notes
- Follows React best practices with TypeScript
- Component-based architecture for maintainability
- Consistent naming conventions (BEM for CSS)
- Mobile-first responsive design approach
- Clean separation of concerns between components and styles
