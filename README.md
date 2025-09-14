# Charlotte McCoy Wedding Photography Website

A modern, responsive wedding photography website built with Next.js 14 and TypeScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with smooth animations
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Contact Form**: Functional contact form for client inquiries
- **Portfolio Gallery**: Beautiful image gallery showcasing wedding photography
- **Social Media Integration**: Links to social media platforms

## Pages

- **Home**: Hero section with stunning background image and navigation
- **About**: Personal story and photographer information
- **Portfolio**: Gallery of wedding photography work
- **Contact**: Contact form and business information

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── (images will go here)
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Adding Images

Place your images in the `public/` directory:
- `hero-bg.jpg` - Hero section background
- `about-photo.jpg` - About page photographer photo
- `contact-photo.jpg` - Contact page couple photo
- `portfolio1.jpg` through `portfolio6.jpg` - Portfolio gallery images

## Customization

- Update the photographer name in `app/layout.tsx`
- Modify contact information in `app/contact/page.tsx`
- Replace placeholder text in `app/about/page.tsx`
- Add your own images to the `public/` directory
- Customize colors and fonts in `app/globals.css`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with Flexbox and Grid
- **Responsive Design**: Mobile-first approach
