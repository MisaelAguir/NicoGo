import { BackHeader } from '../components/BackHeader';
import { Page } from '../main';

export function Itinerary({ navigate }: { navigate: (page: Page) => void }) {
  const rows = ['08:00 Laguna de Apoyo', '12:30 Almuerzo en Catarina', '15:00 Mirador de Catarina', '17:00 Volcan Masaya', '20:00 Cena en Masaya'];
  return (
    <section className="page">
      <BackHeader title="Mi itinerario" navigate={navigate} />
      <div className="itinerary-card"><h3>Escapada de fin de semana</h3><p>16 - 18 Mayo 2035</p><div className="day-tabs"><button>Dia 1</button><button>Dia 2</button><button>Dia 3</button></div>{rows.map((row) => <p className="timeline" key={row}>{row}</p>)}</div>
      <button className="primary-button">Guardar itinerario offline</button>
    </section>
  );
}
