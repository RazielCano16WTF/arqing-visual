import type { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Residencia Moderna',
    category: 'Arquitectura Residencial',
    images: [
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200', alt: 'Residencia Moderna — fachada principal', caption: 'Fachada con iluminación natural' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200', alt: 'Residencia Moderna — interior', caption: 'Sala y comedor integrados' },
      { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200', alt: 'Residencia Moderna — terraza', caption: 'Terraza y vista exterior' }
    ]
  },
  {
    title: 'Centro Comercial Plaza Norte',
    category: 'Arquitectura Comercial',
    images: [
      { src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200', alt: 'Centro Comercial Plaza Norte — exterior', caption: 'Fachada principal y acceso' },
      { src: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1200', alt: 'Centro Comercial Plaza Norte — patio central', caption: 'Espacio público central' },
      { src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200', alt: 'Centro Comercial Plaza Norte — locales', caption: 'Locales y circulaciones' }
    ]
  },
  {
    title: 'Torre de Oficinas',
    category: 'Edificios Corporativos',
    images: [
      { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200', alt: 'Torre de Oficinas — fachada', caption: 'Perspectiva exterior de la torre' },
      { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200', alt: 'Torre de Oficinas — lobby', caption: 'Lobby y acceso principal' },
      { src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200', alt: 'Torre de Oficinas — espacio de trabajo', caption: 'Planta de oficinas abiertas' }
    ]
  },
  {
    title: 'Diseño de Interiores',
    category: 'Espacios Interiores',
    images: [
      { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200', alt: 'Diseño de Interiores — sala', caption: 'Sala con mobiliario contemporáneo' },
      { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200', alt: 'Diseño de Interiores — cocina', caption: 'Cocina integrada con materiales nobles' },
      { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200', alt: 'Diseño de Interiores — dormitorio', caption: 'Dormitorio principal con iluminación natural' }
    ]
  },
  {
    title: 'Desarrollo Urbano',
    category: 'Urbanismo',
    images: [
      { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200', alt: 'Desarrollo Urbano — plano general', caption: 'Vista aérea del proyecto' },
      { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200', alt: 'Desarrollo Urbano — espacio público', caption: 'Diseño de plazas y conexiones' },
      { src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200', alt: 'Desarrollo Urbano — recorrido', caption: 'Ciclovías y andadores' }
    ]
  },
  {
    title: 'Casa de Campo',
    category: 'Arquitectura de Paisaje',
    images: [
      { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200', alt: 'Casa de Campo — fachada', caption: 'Casa rodeada de paisaje' },
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200', alt: 'Casa de Campo — interior', caption: 'Interiores con materiales naturales' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200', alt: 'Casa de Campo — jardín', caption: 'Jardines y privacidad' }
    ]
  }
];
