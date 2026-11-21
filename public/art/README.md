# Nirmala Devi Patel — Original Artwork Assets

Place your original pencil and charcoal drawing scans or photos in this directory:

- `portrait-01.jpg` (or `.png` / `.webp`)
- `portrait-02.jpg` (or `.png` / `.webp`)
- `portrait-03.jpg` (or `.png` / `.webp`)

### How to link them:
Open `src/config/portfolioData.ts` and set:
```typescript
artworks: [
  {
    id: 'art-1',
    title: 'Your Artwork Title', // (optional)
    imageUrl: '/art/portrait-01.jpg',
    medium: 'Graphite & Charcoal on Paper',
    year: '2025', // (optional)
    aspectRatio: 'portrait', // 'portrait' | 'landscape' | 'square'
    description: 'Brief note on medium, technique, or inspiration.', // (optional)
  },
  // ...
]
```

The portfolio automatically preserves image proportions, applies lazy loading, and provides full-resolution lightbox viewing.
