import { Page } from '../main';
import logo from '../assets/logo-nicogo.png';

export function Splash({ navigate }: { navigate: (page: Page) => void }) {
  return <section className="splash figma-splash" onClick={() => navigate('login')}>
    <img className="splash-logo" src={logo} alt="NicoGo!" />
    <p>Tu copiloto turístico inteligente</p>
    <button className="primary-button" onClick={(e) => { e.stopPropagation(); navigate('login'); }}>Comenzar</button>
  </section>;
}
