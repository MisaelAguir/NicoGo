import { Page } from '../main';

export function Splash({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="splash hero-bg">
      <div className="logo-large"><i className="fa-solid fa-mountain-sun" /></div>
      <h1>NicaGo<span>AI</span></h1>
      <p>Copiloto Turistico Inteligente para Nicaragua</p>
      <button className="primary-button" onClick={() => navigate('login')}>Comenzar</button>
      <button className="ghost-button" onClick={() => navigate('home')}>Entrar como invitado</button>
    </section>
  );
}
