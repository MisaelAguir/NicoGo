import { Page } from '../main';

export function Login({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page auth-page">
      <h2>Bienvenido</h2>
      <p>Inicia sesion para personalizar tus viajes.</p>
      <button className="social google"><i className="fa-brands fa-google" /> Continuar con Google</button>
      <button className="social facebook"><i className="fa-brands fa-facebook" /> Continuar con Facebook</button>
      <button className="social"><i className="fa-brands fa-apple" /> Continuar con Apple</button>
      <button className="social"><i className="fa-solid fa-envelope" /> Continuar con correo</button>
      <button className="primary-button" onClick={() => navigate('role')}>Crear cuenta</button>
      <button className="link-button center" onClick={() => navigate('home')}>Entrar como invitado</button>
    </section>
  );
}
