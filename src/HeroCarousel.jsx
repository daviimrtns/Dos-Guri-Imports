import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Preço em reais — usa o helper global do site (data.js) se existir.
const money = (n) =>
  typeof window.money === 'function'
    ? window.money(n)
    : 'R$ ' + Number(n || 0).toLocaleString('pt-BR');

// Catálogo de reserva: usado quando o Supabase está vazio/offline. As fotos
// ficam em images/ e já vêm com fundo claro — por isso object-contain sobre o
// gradiente escuro (preto com dourado) fica ótimo.
const FALLBACK = [
  { name: 'Fone Bluetooth ANC Pro', brand: 'AudioLab', price: 749, image: 'images/fone.jpg', glyph: '🎧' },
  { name: 'Smartphone Ultra 256GB', brand: 'Nexon', price: 3299, image: 'images/celular.jpg', glyph: '📱' },
  { name: 'Bike Elétrica Urban 350W', brand: 'VoltRide', price: 6490, image: 'images/bike.jpg', glyph: '🚲' },
  { name: 'Eau de Parfum Noir', brand: 'Maison Lumière', price: 589, image: 'images/perfume.jpg', glyph: '🧴' },
  { name: 'Vinho Reserva Importado', brand: 'Bodega Sur', price: 259, image: 'images/vinho.jpg', glyph: '🍷' },
];

// Quantos slides o hero tenta manter.
const TARGET = 5;

// Monta os slides: produtos reais COM foto primeiro (destaques na frente) e,
// se faltar, completa com os exemplos do FALLBACK (sem repetir pelo nome).
function buildSlides(list) {
  const reais = list
    .filter((p) => p.image)
    .sort((a, b) => Number(!!b.bestseller) - Number(!!a.bestseller))
    .slice(0, TARGET);

  const usados = new Set(reais.map((p) => (p.name || '').toLowerCase()));
  const slides = [...reais];
  for (const ex of FALLBACK) {
    if (slides.length >= TARGET) break;
    if (!usados.has(ex.name.toLowerCase())) slides.push(ex);
  }
  return slides;
}

export default function HeroCarousel() {
  const [items, setItems] = useState(FALLBACK);

  // Respeita quem prefere menos animação: sem autoplay.
  const reduceMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    []
  );
  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
    [reduceMotion]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  // Carrega produtos reais do Supabase; mantém o fallback se não vier nada.
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const prods = await window.Store?.products?.();
        if (alive && Array.isArray(prods)) {
          setItems(buildSlides(prods));
        }
      } catch {
        /* mantém o FALLBACK */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Sincroniza bolinhas e slide ativo com o Embla.
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, items]);

  return (
    <div className="hc-root">
      <style>{CSS}</style>

      <div className="hc-viewport" ref={emblaRef}>
        <div className="hc-container">
          {items.map((p, i) => (
            <div className="hc-slide" key={p.id ?? p.name + i}>
              <div className="hc-figure">
                {p.image ? (
                  <img className="hc-img" src={p.image} alt={p.name} loading={i === 0 ? 'eager' : 'lazy'} />
                ) : (
                  <span className="hc-emoji" role="img" aria-label={p.name}>
                    {p.glyph || '📦'}
                  </span>
                )}
              </div>
              <div className="hc-meta">
                {p.brand ? <span className="hc-brand">{p.brand}</span> : null}
                <span className="hc-name">{p.name}</span>
                <span className="hc-price">{money(p.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="hc-arrow hc-prev" onClick={scrollPrev} aria-label="Produto anterior" type="button">
        <ChevronLeft size={22} strokeWidth={2.2} />
      </button>
      <button className="hc-arrow hc-next" onClick={scrollNext} aria-label="Próximo produto" type="button">
        <ChevronRight size={22} strokeWidth={2.2} />
      </button>

      <div className="hc-dots">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            className={'hc-dot' + (i === selectedIndex ? ' is-active' : '')}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para o produto ${i + 1}`}
            aria-current={i === selectedIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}

// CSS da ilha, injetado inline (sem arquivo .css separado). Classes prefixadas
// com hc- para não colidir com o resto do site. Usa as variáveis do tema.
const CSS = `
.hc-root { position: absolute; inset: 0; overflow: hidden; border-radius: inherit;
  background: radial-gradient(120% 90% at 70% 15%, color-mix(in srgb, var(--gold, #C6A15B) 26%, transparent), transparent 60%),
              linear-gradient(160deg, var(--ground-2, #1C1815), var(--card, #201B17) 85%); }
.hc-viewport { overflow: hidden; height: 100%; }
.hc-container { display: flex; height: 100%; touch-action: pan-y pinch-zoom; }
.hc-slide { position: relative; flex: 0 0 100%; min-width: 0; height: 100%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 34px 30px 92px; box-sizing: border-box; }
.hc-figure { flex: 1 1 auto; width: 100%; display: grid; place-items: center; min-height: 0; }
.hc-img { max-width: 82%; max-height: 100%; width: auto; height: auto;
  object-fit: contain; filter: drop-shadow(0 20px 42px rgba(0,0,0,.5)); }
.hc-emoji { font-size: clamp(90px, 16vw, 150px); line-height: 1;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,.45)); }
.hc-meta { position: absolute; left: 22px; right: 22px; bottom: 62px; text-align: center;
  display: flex; flex-direction: column; gap: 3px; }
.hc-brand { font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
  color: color-mix(in srgb, var(--gold, #e8c07d) 85%, #fff); }
.hc-name { font-family: var(--serif, Georgia, serif); font-size: clamp(18px, 2.6vw, 24px);
  color: #fff; line-height: 1.15; }
.hc-price { font-family: var(--price, "Segoe UI", system-ui, sans-serif); font-size: 21px;
  font-weight: 700; font-variant-numeric: tabular-nums; letter-spacing: -.02em;
  color: var(--gold, #e8c07d); }

.hc-arrow { position: absolute; top: 46%; transform: translateY(-50%); z-index: 3;
  width: 42px; height: 42px; display: grid; place-items: center; cursor: pointer;
  color: #fff; border-radius: 999px; border: 1px solid rgba(255,255,255,.28);
  background: rgba(0,0,0,.32); backdrop-filter: blur(6px);
  transition: background .2s, border-color .2s, transform .2s; }
.hc-arrow:hover { background: rgba(0,0,0,.5); border-color: var(--gold, #e8c07d);
  color: var(--gold, #e8c07d); }
.hc-arrow:active { transform: translateY(-50%) scale(.94); }
.hc-prev { left: 14px; }
.hc-next { right: 14px; }

.hc-dots { position: absolute; left: 0; right: 0; bottom: 22px; z-index: 3;
  display: flex; justify-content: center; gap: 9px; }
.hc-dot { width: 8px; height: 8px; padding: 0; border-radius: 999px; cursor: pointer;
  border: 0; background: rgba(255,255,255,.4); transition: width .25s, background .25s; }
.hc-dot:hover { background: rgba(255,255,255,.7); }
.hc-dot.is-active { width: 22px; background: var(--gold, #e8c07d); }

@media (max-width: 560px) {
  .hc-arrow { width: 36px; height: 36px; }
  .hc-slide { padding: 26px 22px 84px; }
}
`;
