import { BackHeader } from '../components/BackHeader';
import { Page } from '../main';

export function TouristRegister({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page form-page">
      <BackHeader title="Registro turista" navigate={navigate} back="role" />
      <div className="avatar"><i className="fa-solid fa-user" /></div>
      <input placeholder="Nombre completo" />
      <input placeholder="Correo electronico" />
      <input placeholder="Telefono" />
      <input placeholder="Pais de origen" />
      <input placeholder="Contrasena" type="password" />
      <input placeholder="Confirmar contrasena" type="password" />
      <button className="primary-button" onClick={() => navigate('onboarding')}>Continuar</button>
    </section>
  );
}
