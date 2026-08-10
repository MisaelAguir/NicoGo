import { Page } from '../main';

export function Safety({ navigate }: { navigate: (page: Page) => void }) {
  const items = ['Hospitales cercanos', 'Policia', 'Bomberos', 'Farmacias', 'Gasolineras', 'Rutas de evacuacion'];
  return (
    <section className="page">
      <h2>Seguridad del viajero</h2>
      <button className="sos">SOS</button>
      <p className="body-text">Accesos rapidos para emergencias, incluso desde datos descargados en SQLite.</p>
      <div className="category-grid large">{items.map((item) => <button key={item} onClick={() => navigate('map')}><i className="fa-solid fa-shield-halved" />{item}</button>)}</div>
    </section>
  );
}
