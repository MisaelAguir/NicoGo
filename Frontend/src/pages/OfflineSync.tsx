export function OfflineSync() {
  return (
    <section className="page">
      <h2>Sincronizacion Offline First</h2>
      <div className="sync-status"><i className="fa-solid fa-cloud-arrow-up" /><strong>3 cambios pendientes</strong><p>Favoritos, reseñas y rutas se enviaran cuando vuelva Internet.</p></div>
      <div className="info-list"><p>INSERT Favorito - Pendiente</p><p>UPDATE Ruta - Pendiente</p><p>INSERT Reseña - Pendiente</p></div>
      <button className="primary-button">Sincronizar ahora</button>
    </section>
  );
}
