// Entry da "ilha" React do hero. Monta o carrossel de produtos dentro do
// #heroCarousel do index.html. O resto do site continua HTML/JS vanilla.
import { createRoot } from 'react-dom/client';
import HeroCarousel from './HeroCarousel.jsx';

const el = document.getElementById('heroCarousel');
if (el) {
  createRoot(el).render(<HeroCarousel />);
}
