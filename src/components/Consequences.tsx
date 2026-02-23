const consequences = [
  'Mayor dependencia a familiares.',
  'Costosas visitas al médico.',
  'Deterioro irreversible en su calidad de vida.',
]

const Consequences = () => {
  return (
    <section className="consequences" aria-label="Consecuencias de la inactividad física">
      <div className="consequences-inner">

        {/* Header */}
        <div className="consequences-header">
          <span className="section-label">Importante</span>
          <h2 className="consequences-title">
            ¡La inactividad física tiene consecuencias graves!
          </h2>
        </div>

        {/* Two-card grid */}
        <div className="consequences-cards-grid">

          {/* Tarjeta izquierda — estadística */}
          <div className="consequences-card">
            <span className="consequences-stat-number">Más del 25%</span>
            <p className="consequences-card-text">
              de adultos mayores no cumple la actividad física recomendada, lo que{' '}
              <strong>aumenta el riesgo de cardiopatías, diabetes tipo 2, demencia y algunos cánceres.</strong>
            </p>
          </div>

          {/* Tarjeta derecha — lista de consecuencias */}
          <div className="consequences-card">
            <p className="consequences-lead">
              La inactividad acelera la pérdida de movilidad, limita funciones básicas
              como caminar o levantarse y desencadena una{' '}
              <strong>consecuencia crítica:</strong>
            </p>
            <ul className="consequences-list" aria-label="Consecuencias de la inactividad">
              {consequences.map((item) => (
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
      </div>
    </section>
  )
}

export default Consequences
