import ejercicioImg from '../assets/ejercicio.png'

const Empathy = () => {
  return (
    <section className="empathy" aria-label="Entendemos tu situación">
      <div className="empathy-inner">

        {/* Image column */}
        <div className="empathy-image-wrap">
          <img
            src={ejercicioImg}
            alt="Adulta mayor activa caminando en el parque"
            className="empathy-image"
          />

          {/* Floating badge */}
          <div className="empathy-badge-float" aria-label="Programa especializado en adultos mayores">
            <div className="empathy-badge-float-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="empathy-badge-float-text">
              <strong>Evaluación</strong>
              <span>personalizada</span>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="empathy-text-col">
          <span className="section-label">Nos preocupamos por ti</span>

          <p className="empathy-paragraph">
            Sabemos que con el paso del tiempo moverse puede volverse más desafiante.
          </p>

          <p className="empathy-paragraph">
            Aceptar apoyo no significa perder independencia, sino cuidarte y seguir avanzando.
          </p>

          <p className="empathy-paragraph">

            Por eso creamos un programa funcional para adultos +60, con seguimiento personalizado y evaluaciones periódicas que nos permiten acompañarte en cada paso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Empathy
