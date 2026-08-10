import { Place } from '../data/mockData';
import { Page } from '../main';

export function PlaceCard({ place, navigate }: { place: Place; navigate: (page: Page) => void }) {
  return (
    <article className="place-card" onClick={() => navigate('detail')}>
      <img src={place.image} alt={place.name} />
      <div>
        <h3>{place.name}</h3>
        <p>{place.category} · {place.department}</p>
        <div className="place-meta">
          <span><i className="fa-solid fa-star" /> {place.rating}</span>
          <span>{place.distance}</span>
          <span>{place.score}% IA</span>
        </div>
      </div>
    </article>
  );
}
