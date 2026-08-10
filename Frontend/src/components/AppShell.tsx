import { Page } from '../main';
import logo from '../assets/logo-nicogo.png';

type Props = { children: React.ReactNode; page: Page; navigate: (page: Page) => void; };
const hiddenNav: Page[] = ['splash', 'login', 'role', 'tourist-register', 'business-register', 'onboarding'];

export function AppShell({ children, page, navigate }: Props) {
  const showNav = !hiddenNav.includes(page);
  return (
    <main className="app-bg">
      <section className="phone-frame">
        {showNav && (
          <header className="topbar figma-topbar">
            <button className="brand-button" onClick={() => navigate('home')} aria-label="Ir al inicio">
              <img src={logo} alt="NicoGo" /><strong>Nico<span>Go!</span></strong>
            </button>
            <div className="topbar-actions">
              <button className="icon-button" aria-label="Notificaciones"><i className="fa-solid fa-bell" /></button>
              <button className="icon-button" onClick={() => navigate('sync')} aria-label="Configuración"><i className="fa-solid fa-gear" /></button>
            </div>
          </header>
        )}
        <div className={showNav ? 'screen with-nav' : 'screen'}>{children}</div>
        {showNav && (
          <nav className="bottom-nav figma-nav" aria-label="Navegación principal">
            <button className={page === 'home' ? 'active home' : 'home'} onClick={() => navigate('home')}><i className="fa-solid fa-house" /><span>Inicio</span></button>
            <button className={page === 'map' ? 'active map' : 'map'} onClick={() => navigate('map')}><i className="fa-solid fa-map" /><span>Mapa</span></button>
            <button className={page === 'recommendations' || page === 'assistant' ? 'active ai' : 'ai'} onClick={() => navigate('recommendations')}><i className="fa-solid fa-wand-magic-sparkles" /><span>IA</span></button>
            <button className={page === 'community' ? 'active favorite' : 'favorite'} onClick={() => navigate('community')}><i className="fa-solid fa-heart" /><span>Favoritos</span></button>
            <button className={page === 'profile' ? 'active profile' : 'profile'} onClick={() => navigate('profile')}><i className="fa-solid fa-user" /><span>Perfil</span></button>
          </nav>
        )}
      </section>
    </main>
  );
}
