import { BackHeader } from '../components/BackHeader';
import { places } from '../data/mockData';
import { Page } from '../main';

export function PlaceDetail({ navigate }: { navigate: (page: Page) => void }) {
  const place = places[0];
  return (
    <section className="page detail-page">
      <BackHeader title="Detalle del lugar" navigate={navigate} back="map" />
      <img className="detail-image" src={place.image} alt={place.name} />
      <h2>{place.name}</h2>
      <p>{place.department} · {place.category}</p>
      <div className="score-panel"><strong>{place.score}%</strong><span>recomendado por NicoGo AI</span></div>
      <div className="tabs"><button>Informacion</button><button>Servicios</button><button>Resenas</button></div>
      <p className="body-text">Hermosa laguna de origen volcanico con miradores, restaurantes, actividades familiares y opciones para relajarse durante el fin de semana.</p>
      <div className="info-list">
        <p><i className="fa-solid fa-clock" /> Abierto 24 horas</p>
        <p><i className="fa-solid fa-money-bill" /> Desde $5.00</p>
        <p><i className="fa-solid fa-shield" /> Seguridad: {place.safety}</p>
      </div>
      <div className="sticky-actions"><button>Guardar</button><button className="primary-button">Como llegar</button></div>
    </section>
  );
}
