import { PlaceCard } from '../components/PlaceCard';
import { places } from '../data/mockData';
import { Page } from '../main';
import mascot from '../assets/mascot-nicogo.png';

const shortcuts = [
  ['fa-mountain-sun','Destinos','map','green'], ['fa-bed','Hoteles','map','cyan'],
  ['fa-utensils','Gastronomía','map','orange'], ['fa-umbrella-beach','Playas','map','teal']
] as const;

export function Home({ navigate }: { navigate: (page: Page) => void }) {
  return <section className="page figma-home">
    <div className="welcome-card"><img src={mascot} alt="Mascota NicoGo" /><div><strong>¡Hola Viajero!</strong><span>¿Qué haremos hoy?</span></div></div>
    <div className="search-box figma-search"><i className="fa-solid fa-magnifying-glass" /><input placeholder="Buscar destino, hotel o restaurante" /></div>
    <div className="shortcut-grid">{shortcuts.map(([icon,label,target,color]) => <button key={label} className={color} onClick={() => navigate(target as Page)}><span><i className={`fa-solid ${icon}`} /></span><small>{label}</small></button>)}</div>
    <div className="section-title"><h3>Recomendaciones de Nico para ti</h3><button onClick={() => navigate('recommendations')}>Ver todo</button></div>
    <div className="horizontal-list">{places.slice(0, 3).map(place => <PlaceCard key={place.id} place={place} navigate={navigate} />)}</div>
    <div className="section-title"><h3>Explora Nicaragua</h3><button onClick={() => navigate('map')}>Ver mapa</button></div>
    <button className="explore-banner" onClick={() => navigate('map')}><i className="fa-solid fa-map-location-dot" /><span><strong>Descubre por departamento</strong><small>Encuentra experiencias cerca de ti</small></span><i className="fa-solid fa-chevron-right" /></button>
  </section>;
}
