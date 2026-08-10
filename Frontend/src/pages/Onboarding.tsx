import { Page } from '../main';

const items = ['Tipo de turismo favorito', 'Presupuesto aproximado', 'Con quien viajas', 'Idioma', 'Distancia maxima', 'Tiempo disponible'];

export function Onboarding({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <h2>Configuracion inicial</h2>
      <p>Estas respuestas alimentan tu perfil inteligente.</p>
      <div className="progress"><span /></div>
      {items.map((item) => (
        <button key={item} className="setting-row">
          <i className="fa-solid fa-circle-check" />
          {item}
          <i className="fa-solid fa-chevron-right" />
        </button>
      ))}
      <button className="primary-button" onClick={() => navigate('home')}>Guardar y continuar</button>
    </section>
  );
}
