export interface Photo {
  src: string
  caption: string
  alt: string
}

export const photos: Photo[] = [
  {
    src: '/photos/photo-1.jpg',
    caption: 'Visiting Calgary',
    alt: 'Calgary at sunset',
  },
  {
    src: '/photos/photo-2.jpg',
    caption: 'Visiting Mexico',
    alt: 'Love Traveling',
  },
  {
    src: '/photos/photo-3.jpeg',
    caption: 'UBC at its finest',
    alt: 'UBC Garden',
  },
  {
    src: '/photos/photo-4.JPG',
    caption: 'Such a wonderful class',
    alt: 'Comm 294',
  },
  {
    src: '/photos/photo-5.jpg',
    caption: 'PMC Club dinner',
    alt: 'My fav club',
  },
  {
    src: '/photos/photo-6.jpg',
    caption: 'Grouse Hike',
    alt: 'BUCS Friends',
  },
]
