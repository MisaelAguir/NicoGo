import { Page } from '../main';

export function RoleSelection({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <h2>Tipo de usuario</h2>
      <p>Selecciona como deseas registrarte en NicoGo AI.</p>
      <article className="role-card tourist" onClick={() => navigate('tourist-register')}>
        <div>
          <h3>Soy turista</h3>
          <p>Quiero descubrir lugares, crear itinerarios y recibir recomendaciones inteligentes.</p>
        </div>
        <i className="fa-solid fa-person-hiking" />
      </article>
      <article className="role-card business" onClick={() => navigate('business-register')}>
        <div>
          <h3>Soy negocio / lugar turistico</h3>
          <p>Quiero registrar mi hotel, restaurante, tour, transporte o destino turistico.</p>
        </div>
        <i className="fa-solid fa-store" />
      </article>
    </section>
  );
}
