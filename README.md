# Ashish's Portfolio Website

A minimalistic and modern portfolio website built with Next.js, TypeScript, and Radix UI.

## Features

- 🎨 Clean, minimalistic design
- 📱 Fully responsive and mobile-friendly
- 🌓 Dark/Light theme support
- 📄 Built-in PDF resume viewer
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- ♿ Accessible with Radix UI components

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **PDF Viewer**: react-pdf

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── header.tsx       # Navigation header
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── projects.tsx     # Projects showcase
│   ├── skills.tsx       # Skills section
│   ├── resume-viewer.tsx # PDF resume viewer
│   ├── contact.tsx      # Contact section
│   └── footer.tsx       # Footer
└── public/
    └── resume.pdf       # Your resume PDF
```

## Customization

### Update Your Information

Edit the following files to add your own information:

1. **Hero Section**: `src/components/hero.tsx`

   - Update name, headline, and social links

2. **About Section**: `src/components/about.tsx`

   - Add your bio and stats

3. **Projects**: `src/components/projects.tsx`

   - Update project details, links, and technologies

4. **Skills**: `src/components/skills.tsx`

   - Add your technologies and skills

5. **Contact**: `src/components/contact.tsx`
   - Update contact information and links

### Add Your Resume

1. Place your resume PDF in the `public/` folder and name it `resume.pdf`
2. The resume viewer will automatically display it

### Customize Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to change the theme colors.

## Build & Deploy

### Build for production:

```bash
npm run build
npm run start
```

### Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

Open source and available for personal use.
