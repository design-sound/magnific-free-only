# Magnific Search

A Next.js application that allows users to search for free assets from Magnific.

## Features

- Real-time search with debouncing
- Responsive masonry grid layout
- Filter by asset type, orientation, and sort options
- Detailed asset view with prompt copying
- Dark/light mode toggle
- Keyboard shortcuts (Ctrl+/ to focus search)
- Local search history with Zustand
- PWA-ready

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **State Management**: Zustand
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd magnific-search
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
magnific-search/
├── README.md
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── not-found.tsx
    │   ├── about/
    │   ├── how-it-works/
    │   ├── api/search/
    │   └── components/
    ├── components/
    ├── hooks/
    ├── lib/
    └── types/
```

## API Endpoints

- `GET /api/search?q={query}&page={page}` - Search for assets

## Mock Data

The application currently uses mock data from Picsum Photos for demonstration purposes. In a real implementation, this would be replaced with actual API calls to Magnific.

## Deployment

This application is ready to be deployed on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy
4. Your application will be live at a unique URL provided by Vercel

For custom domains, follow Vercel's domain setup instructions in their dashboard.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
