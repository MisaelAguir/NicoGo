import { categories } from '../data/mockData';
import { Page } from '../main';

export function SmartMap({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page map-page">
      <div className="filter-top">
        {categories.slice(0, 6).map((cat) => <button key={cat}>{cat}</button>)}
      </div>
      <div className="map-toolbar">
        <div className="search-box compact"><i className="fa-solid fa-magnifying-glass" /><input placeholder="Buscar direccion o lugar" /></div>
        <button className="filter-button" onClick={() => navigate('filters')}><i className="fa-solid fa-sliders" /></button>
      </div>
      <div className="fake-map">
        <img src="https://tile.openstreetmap.org/7/30/57.png" alt="Mapa" />
        <span className="marker m1">98</span>
        <span className="marker m2">91</span>
        <span className="marker m3">89</span>
        <span className="marker m4">86</span>
        <button className="map-control zoom-in">+</button>
        <button className="map-control zoom-out">−</button>
        <button className="locate"><i className="fa-solid fa-location-crosshairs" /></button>
      </div>
      <div className="map-card" onClick={() => navigate('detail')}>
        <strong>Laguna de Apoyo</strong>
        <p>98% recomendado · Naturaleza · 32 km</p>
        <button>Como llegar</button>
      </div>
    </section>
  );
}
