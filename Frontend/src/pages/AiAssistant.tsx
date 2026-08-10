import { BackHeader } from '../components/BackHeader';
import { Page } from '../main';

export function AiAssistant({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page chat-page">
      <BackHeader title="Asistente NicaGo AI" navigate={navigate} back="recommendations" />
      <div className="bubble user">Quiero un viaje con mi familia este fin de semana.</div>
      <div className="bubble bot">Encontré lugares seguros, familiares y con buena distancia desde tu ubicación: Laguna de Apoyo, Granada y Volcán Masaya.</div>
      <div className="chat-card"><strong>Laguna de Apoyo</strong><p>Ideal por tu preferencia de naturaleza, bajo riesgo y presupuesto medio.</p></div>
      <div className="bubble user">Suena bien. ¿Qué más puedo hacer cerca?</div>
      <div className="bubble bot">Puedes visitar Catarina, probar gastronomía local y cerrar el día en Masaya.</div>
      <div className="chat-input"><input placeholder="Escribe tu mensaje..." /><button><i className="fa-solid fa-microphone" /></button></div>
    </section>
  );
}
