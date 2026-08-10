import { PlaceCard } from '../components/PlaceCard';
import { categories, places } from '../data/mockData';
import { Page } from '../main';

export function Home({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <div className="home-header">
        <div><h2>Hola, Explorador</h2><p>¿A donde vamos hoy?</p></div>
        <button className="round" onClick={() => navigate('profile')}><i className="fa-solid fa-user" /></button>
      </div>
      <div className="search-box"><i className="fa-solid fa-magnifying-glass" /><input placeholder="Buscar destinos, hoteles, restaurantes..." /></div>
      <div className="quick-actions">
        <button onClick={() => navigate('map')}><i className="fa-solid fa-map-location-dot" /> Mapa</button>
        <button onClick={() => navigate('recommendations')}><i className="fa-solid fa-wand-magic-sparkles" /> IA</button>
        <button onClick={() => navigate('itinerary')}><i className="fa-solid fa-route" /> Itinerario</button>
      </div>
      <h3>Recomendados para ti</h3>
      <div className="horizontal-list">
        {places.slice(0, 3).map((place) => <PlaceCard key={place.id} place={place} navigate={navigate} />)}
      </div>
      <h3>Categorias</h3>
      <div className="category-grid">
        {categories.slice(1, 9).map((cat) => <button key={cat}><i className="fa-solid fa-location-dot" />{cat}</button>)}
      </div>
    </section>
  );
}
