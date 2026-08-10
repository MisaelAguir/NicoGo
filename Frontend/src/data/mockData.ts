export type Place = {
  id: number;
  name: string;
  category: string;
  department: string;
  municipality: string;
  rating: number;
  score: number;
  price: string;
  distance: string;
  safety: string;
  lat: number;
  lng: number;
  image: string;
};

export const places: Place[] = [
  {
    id: 1,
    name: 'Laguna de Apoyo',
    category: 'Naturaleza',
    department: 'Masaya',
    municipality: 'Catarina',
    rating: 4.8,
    score: 98,
    price: '$$',
    distance: '32 km',
    safety: 'Alta',
    lat: 11.929,
    lng: -86.031,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Volcan Masaya',
    category: 'Aventura',
    department: 'Masaya',
    municipality: 'Nindiri',
    rating: 4.7,
    score: 91,
    price: '$$',
    distance: '25 km',
    safety: 'Media',
    lat: 11.984,
    lng: -86.161,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Granada Colonial',
    category: 'Cultura',
    department: 'Granada',
    municipality: 'Granada',
    rating: 4.6,
    score: 89,
    price: '$$',
    distance: '43 km',
    safety: 'Alta',
    lat: 11.933,
    lng: -85.956,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'San Juan del Sur',
    category: 'Playa',
    department: 'Rivas',
    municipality: 'San Juan del Sur',
    rating: 4.5,
    score: 86,
    price: '$$$',
    distance: '134 km',
    safety: 'Alta',
    lat: 11.253,
    lng: -85.870,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80'
  }
];

export const categories = [
  'Todos',
  'Playas',
  'Volcanes',
  'Hoteles',
  'Restaurantes',
  'Miradores',
  'Museos',
  'Aventura',
  'Salud',
  'Seguridad'
];
