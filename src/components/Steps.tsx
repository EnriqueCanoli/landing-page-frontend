interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Completa el formulario',
    description: '',
  },
  {
    number: 2,
    title: 'Hablamos personalmente contigo',
    description:
      'Te contactamos por WhatsApp o correo electrónico para resolver tus dudas antes de que vengas',
  },
  {
    number: 3,
    title: 'Tu evaluación con el fisioterapeuta',
    description:
      'Un profesional realizará una evaluación para conocer tu condición actual.',
  },
  {
    number: 4,
    title: '2 días de prueba — tú decides',
    description:
      'Ven, muévete, conoce el ambiente. Sin pagar nada. Si no es para ti, no hay problema',
  },
]

import { useNavigate } from 'react-router-dom'

const Steps = () => {
  const navigate = useNavigate()

  return (
    <section className="steps" aria-label="Cómo empezar con nosotros">
      <div className="steps-inner">
        <div className="steps-header">
          <span className="section-label">Proceso simple</span>
          <h2 className="steps-title">¿Cómo empezar con nosotros?</h2>
          <p className="steps-subtitle">Recupera tu independencia en 4 pasos simples</p>
        </div>

        <div className="steps-grid" role="list">
          {steps.map((step) => (
            <article key={step.number} className="step-card" role="listitem">
              <div className="step-number" aria-label={`Paso ${step.number}`}>
                {step.number}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                {step.description && (
                  <p className="step-description">{step.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="steps-cta-wrap">
          <button className="btn btn-primary" onClick={() => navigate('/formulario')} aria-label="Comenzar ahora — ir al formulario">
            Quiero mis 2 días de prueba gratis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Steps
