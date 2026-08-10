import { BackHeader } from '../components/BackHeader';
import { Page } from '../main';

export function BusinessRegister({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="page form-page map-form-bg">
      <BackHeader title="Registro negocio / lugar" navigate={navigate} back="role" />
      <div className="avatar"><i className="fa-solid fa-store" /></div>
      <input placeholder="Nombre del lugar" />
      <select defaultValue=""><option value="" disabled>Categoria</option><option>Hotel</option><option>Restaurante</option><option>Tour</option><option>Transporte</option><option>Destino turistico</option></select>
      <textarea placeholder="Descripcion del lugar" />
      <input placeholder="Departamento" />
      <input placeholder="Municipio" />
      <input placeholder="Direccion exacta" />
      <div className="two-cols">
        <input placeholder="Latitud automatica" defaultValue="12.136389" />
        <input placeholder="Longitud automatica" defaultValue="-86.251389" />
      </div>
      <button className="secondary-button"><i className="fa-solid fa-location-crosshairs" /> Obtener ubicacion actual</button>
      <button className="primary-button" onClick={() => navigate('home')}>Guardar lugar</button>
    </section>
  );
}
