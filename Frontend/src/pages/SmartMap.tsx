import { useState } from 'react';
import { categories } from '../data/mockData';
import { Page } from '../main';

export function SmartMap({ navigate }: { navigate: (page: Page) => void }) {
  const [active, setActive] = useState('Todo');
  const [locating, setLocating] = useState(false);
  const locate = () => {
    setLocating(true);
    navigator.geolocation?.getCurrentPosition(() => setLocating(false), () => setLocating(false), { enableHighAccuracy: true });
  };
  return <section className="page map-page figma-map-page">
    <div className="map-toolbar"><div className="search-box compact"><i className="fa-solid fa-magnifying-glass" /><input placeholder="Buscar dirección o lugar" /></div><button className="filter-button" onClick={() => navigate('filters')}><i className="fa-solid fa-sliders" /></button></div>
    <div className="filter-top"><button className={active === 'Todo' ? 'selected' : ''} onClick={() => setActive('Todo')}>Todo</button>{categories.slice(1,6).map(cat => <button key={cat} className={active === cat ? 'selected' : ''} onClick={() => setActive(cat)}>{cat}</button>)}</div>
    <div className="real-map">
      <iframe title="Mapa interactivo de Nicaragua" src="https://www.openstreetmap.org/export/embed.html?bbox=-87.8%2C10.6%2C-82.5%2C15.2&layer=mapnik&marker=12.1364%2C-86.2514" loading="lazy" />
      <button className="locate" onClick={locate} aria-label="Mi ubicación"><i className={`fa-solid ${locating ? 'fa-spinner fa-spin' : 'fa-location-crosshairs'}`} /></button>
    </div>
    <div className="map-card" onClick={() => navigate('detail')}><div className="map-card-icon"><i className="fa-solid fa-location-dot" /></div><div><strong>Laguna de Apoyo</strong><p>Masaya · Naturaleza · 32 km</p><span><i className="fa-solid fa-star" /> 4.8 · 98% recomendado</span></div><button aria-label="Ver detalle"><i className="fa-solid fa-chevron-right" /></button></div>
  </section>;
}
