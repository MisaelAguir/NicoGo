import { Page } from '../main';
import logo from '../assets/logo-nicogo.png';

export function Login({ navigate }: { navigate: (page: Page) => void }) {
  return <section className="page auth-page figma-auth">
    <div className="auth-card">
      <img src={logo} className="auth-logo" alt="NicoGo" />
      <h2>Bienvenido</h2><p>Descubre Nicaragua a tu manera.</p>
      <label>Correo electrónico</label><input type="email" placeholder="tu@email.com" />
      <label>Contraseña</label><div className="password-field"><input type="password" placeholder="••••••••" /><i className="fa-regular fa-eye-slash" /></div>
      <button className="forgot">Olvidé mi contraseña</button>
      <button className="primary-button" onClick={() => navigate('home')}>Iniciar sesión</button>
      <p className="register-copy">¿No tienes cuenta? <button onClick={() => navigate('role')}>Regístrate</button></p>
      <div className="auth-divider"><span>o continúa con</span></div>
      <div className="social-row"><button><i className="fa-brands fa-google" /></button><button><i className="fa-brands fa-facebook" /></button><button><i className="fa-brands fa-apple" /></button></div>
      <button className="guest-link" onClick={() => navigate('home')}>Continuar como invitado</button>
    </div>
  </section>;
}
