import { BackHeader } from '../components/BackHeader';
import { categories } from '../data/mockData';
import { Page } from '../main';

export function Filters({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <BackHeader title="Filtrar lugares" navigate={navigate} back="map" />
      <h3>Categorias</h3>
      <div className="category-grid large">
        {categories.slice(1).map((cat) => <button key={cat}><i className="fa-solid fa-map-pin" />{cat}</button>)}
      </div>
      <h3>Rango de distancia</h3>
      <input type="range" min="0" max="200" defaultValue="80" />
      <h3>Precio</h3>
      <div className="price-row"><button>$</button><button>$$</button><button>$$$</button><button>$$$$</button></div>
      <h3>Seguridad</h3>
      <div className="price-row"><button>Alta</button><button>Media</button><button>Todos</button></div>
      <button className="primary-button" onClick={() => navigate('map')}>Aplicar filtros</button>
      <button className="link-button center">Limpiar</button>
    </section>
  );
}
