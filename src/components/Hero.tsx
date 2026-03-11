import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="hero" aria-label="Sección principal">
      <div className="hero-inner">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Centro de Movimiento Funcional Senior
        </div>

        {/* Título full-width — fuera del bloque restringido */}
        <h1 className="hero-title">
          Los años no te quitaron tu independencia. La inactividad sí
        </h1>

        {/* Subtítulo y CTA — restringidos */}
        <div className="hero-content">
          <p className="hero-subtitle">
          Ayudamos a personas +60 a mantener la movilidad, el equilibrio y la fuerza  — con un plan diseñado para sus necesidades específicas, guiado por un fisioterapeuta
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('/formulario')} aria-label="Comenzar ahora — ir al formulario">
              Quiero mis 2 días de prueba gratis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
