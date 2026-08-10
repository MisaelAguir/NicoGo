import { Page } from '../main';

type Props = {
  children: React.ReactNode;
  page: Page;
  navigate: (page: Page) => void;
};

const hiddenNav: Page[] = ['splash', 'login', 'role', 'tourist-register', 'business-register', 'onboarding'];

export function AppShell({ children, page, navigate }: Props) {
  const showNav = !hiddenNav.includes(page);

  return (
    <main className="app-bg">
      <section className="phone-frame">
        {showNav && (
          <header className="topbar">
            <button className="icon-button" onClick={() => navigate('home')} aria-label="Menu">
              <i className="fa-solid fa-bars" />
            </button>
            <div className="brand-mini">
              <span className="logo-pin"><i className="fa-solid fa-mountain-sun" /></span>
              <strong>NicaGo<span>AI</span></strong>
            </div>
            <button className="icon-button" onClick={() => navigate('sync')} aria-label="Sincronizacion">
              <i className="fa-solid fa-gear" />
            </button>
          </header>
        )}

        <div className={showNav ? 'screen with-nav' : 'screen'}>{children}</div>

        {showNav && (
          <nav className="bottom-nav">
            <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>
              <i className="fa-solid fa-house" />
              Inicio
            </button>
            <button className={page === 'map' ? 'active' : ''} onClick={() => navigate('map')}>
              <i className="fa-solid fa-map-location-dot" />
              Mapa
            </button>
            <button className={page === 'recommendations' ? 'active' : ''} onClick={() => navigate('recommendations')}>
              <i className="fa-solid fa-wand-magic-sparkles" />
              IA
            </button>
            <button className={page === 'safety' ? 'active' : ''} onClick={() => navigate('safety')}>
              <i className="fa-solid fa-shield-halved" />
              Seguridad
            </button>
            <button className={page === 'profile' ? 'active' : ''} onClick={() => navigate('profile')}>
              <i className="fa-solid fa-user" />
              Perfil
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
