export function SmartProfile() {
  const prefs = [['Naturaleza', 95], ['Playa', 90], ['Gastronomia', 85], ['Aventura', 70], ['Museos', 10]];
  return (
    <section className="page">
      <h2>Perfil inteligente</h2>
      <div className="avatar large"><i className="fa-solid fa-user" /></div>
      {prefs.map(([name, value]) => <div className="pref" key={name as string}><span>{name}</span><strong>{value}%</strong><div><i style={{ width: `${value}%` }} /></div></div>)}
      <button className="secondary-button">Actualizar preferencias</button>
    </section>
  );
}
