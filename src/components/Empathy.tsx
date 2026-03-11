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
            Sabemos lo que se siente llegar a un punto en que subir escaleras duele, o que dependes de alguien para hacer cosas que antes hacías solo.
          </p>

          <p className="empathy-paragraph">
            Esa sensación de perder tu autonomía es una de las cosas más difíciles de aceptar. Y lo peor es creer que ya es inevitable
          </p>

          <p className="empathy-paragraph">
            No lo es. Por eso existe este centro, con fisioterapeutas especializados en adultos mayores que acompañan a cientos de personas a mantener exactamente eso — su independencia
          </p>
        </div>
      </div>
    </section>
  )
}

export default Empathy
