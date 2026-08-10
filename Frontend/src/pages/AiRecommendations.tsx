import { BackHeader } from '../components/BackHeader';
import { PlaceCard } from '../components/PlaceCard';
import { places } from '../data/mockData';
import { Page } from '../main';

export function AiRecommendations({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page">
      <BackHeader title="Recomendaciones IA" navigate={navigate} />
      <div className="ai-banner"><i className="fa-solid fa-robot" /><div><strong>Tu Copiloto AI</strong><p>El motor recomienda; la IA explica.</p></div></div>
      {places.map((place) => <PlaceCard key={place.id} place={place} navigate={navigate} />)}
      <button className="primary-button" onClick={() => navigate('assistant')}>Ver explicacion IA</button>
    </section>
  );
}
