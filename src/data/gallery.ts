export type GalleryCategory =
  | 'Tümü'
  | 'Düğün'
  | 'Kına'
  | 'Sünnet'
  | 'Nişan'
  | 'Doğum Günü'

export type GalleryItem = {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'Tümü'>
  location: string
  image: string
  tall?: boolean
}

export const categories: GalleryCategory[] = [
  'Tümü',
  'Düğün',
  'Kına',
  'Sünnet',
  'Nişan',
  'Doğum Günü',
]

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Bahçe Işıltısı',
    category: 'Düğün',
    location: 'İstanbul',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    tall: true,
  },
  {
    id: '2',
    title: 'Altın Saatler',
    category: 'Düğün',
    location: 'Bodrum',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    title: 'Kırmızı Gelin',
    category: 'Kına',
    location: 'Ankara',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '4',
    title: 'Gece Zarafeti',
    category: 'Nişan',
    location: 'İzmir',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    tall: true,
  },
  {
    id: '5',
    title: 'Çiçek Koridoru',
    category: 'Düğün',
    location: 'Antalya',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '6',
    title: 'Aile Kutlaması',
    category: 'Sünnet',
    location: 'Bursa',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '7',
    title: 'Soft Pastel',
    category: 'Doğum Günü',
    location: 'İstanbul',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '8',
    title: 'Mum Işığı',
    category: 'Kına',
    location: 'Gaziantep',
    image:
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
    tall: true,
  },
  {
    id: '9',
    title: 'Salon Saksı',
    category: 'Düğün',
    location: 'İstanbul',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '10',
    title: 'Yüzük Anı',
    category: 'Nişan',
    location: 'Çeşme',
    image:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '11',
    title: 'Neşe Sofrası',
    category: 'Sünnet',
    location: 'Konya',
    image:
      'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '12',
    title: 'Balon Bahçesi',
    category: 'Doğum Günü',
    location: 'Ankara',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    tall: true,
  },
]
