import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.css';
import { AppShell } from './components/AppShell';
import { Splash } from './pages/Splash';
import { Login } from './pages/Login';
import { RoleSelection } from './pages/RoleSelection';
import { TouristRegister } from './pages/TouristRegister';
import { BusinessRegister } from './pages/BusinessRegister';
import { Onboarding } from './pages/Onboarding';
import { Home } from './pages/Home';
import { SmartMap } from './pages/SmartMap';
import { Filters } from './pages/Filters';
import { PlaceDetail } from './pages/PlaceDetail';
import { AiRecommendations } from './pages/AiRecommendations';
import { AiAssistant } from './pages/AiAssistant';
import { Itinerary } from './pages/Itinerary';
import { Safety } from './pages/Safety';
import { Community } from './pages/Community';
import { SmartProfile } from './pages/SmartProfile';
import { OfflineSync } from './pages/OfflineSync';

export type Page =
  | 'splash'
  | 'login'
  | 'role'
  | 'tourist-register'
  | 'business-register'
  | 'onboarding'
  | 'home'
  | 'map'
  | 'filters'
  | 'detail'
  | 'recommendations'
  | 'assistant'
  | 'itinerary'
  | 'safety'
  | 'community'
  | 'profile'
  | 'sync';

function App() {
  const [page, setPage] = useState<Page>('splash');

  const navigate = (next: Page) => setPage(next);

  const renderPage = () => {
    switch (page) {
      case 'splash':
        return <Splash navigate={navigate} />;
      case 'login':
        return <Login navigate={navigate} />;
      case 'role':
        return <RoleSelection navigate={navigate} />;
      case 'tourist-register':
        return <TouristRegister navigate={navigate} />;
      case 'business-register':
        return <BusinessRegister navigate={navigate} />;
      case 'onboarding':
        return <Onboarding navigate={navigate} />;
      case 'map':
        return <SmartMap navigate={navigate} />;
      case 'filters':
        return <Filters navigate={navigate} />;
      case 'detail':
        return <PlaceDetail navigate={navigate} />;
      case 'recommendations':
        return <AiRecommendations navigate={navigate} />;
      case 'assistant':
        return <AiAssistant navigate={navigate} />;
      case 'itinerary':
        return <Itinerary navigate={navigate} />;
      case 'safety':
        return <Safety navigate={navigate} />;
      case 'community':
        return <Community navigate={navigate} />;
      case 'profile':
        return <SmartProfile navigate={navigate} />;
      case 'sync':
        return <OfflineSync navigate={navigate} />;
      case 'home':
      default:
        return <Home navigate={navigate} />;
    }
  };

  return <AppShell page={page} navigate={navigate}>{renderPage()}</AppShell>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
