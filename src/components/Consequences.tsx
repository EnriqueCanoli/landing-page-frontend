const preventItems = [
  'Mayor dependencia de familiares para actividades básicas',
  'Visitas médicas más frecuentes y costosas',
  'Pérdida de movilidad que se vuelve difícil de revertir',
]

const Consequences = () => {
  return (
    <section className="consequences" aria-label="Consecuencias de la inactividad física">
      <div className="consequences-inner">

        {/* Header */}
        <div className="consequences-header">
          <span className="section-label">Importante</span>
          <h2 className="consequences-title">
            Lo que pasa cuando se ignora este momento
          </h2>
        </div>

        {/* Párrafo narrativo — ancho 3/4, centrado */}
        <p className="consequences-narrative">
          Cada semana sin movimiento es una semana que el cuerpo pierde lo que ya tenía.
          No de golpe. Poco a poco. Hasta que un día cuesta trabajo levantarse del sillón,
          o cruzar la calle se siente peligroso, o necesitas llamarle a alguien para tareas
          que antes hacías solo.
        </p>

        {/* Estadística impactante */}
        <div className="consequences-stat-block">
          <span className="consequences-stat-number">+25%</span>
          <p className="consequences-stat-text">
            de adultos mayores ya está en ese punto — sin saberlo.
          </p>
        </div>

        {/* Lista de prevención */}
        <div className="consequences-prevent-block">
          <p className="consequences-prevent-label">Lo que se puede prevenir actuando hoy</p>
          <ul className="consequences-list" aria-label="Consecuencias prevenibles">
            {preventItems.map((item) => (
              <li key={item} className="consequences-list-item">
                <span className="consequences-list-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Consequences
