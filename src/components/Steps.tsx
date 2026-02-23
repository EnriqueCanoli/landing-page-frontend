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
    title: 'Te contactamos personalmente',
    description:
      'Nuestro equipo se comunicará contigo por WhatsApp o correo electrónico para resolver tus dudas y explicarte como funciona el programa.',
  },
  {
    number: 3,
    title: 'Realiza tu evaluación física personalizada',
    description:
      'Un fisioterapeuta especializado en adultos mayores realizará una evaluación profesional para conocer tu condición actual.',
  },
  {
    number: 4,
    title: 'Asiste a tus 2 días de prueba gratis',
    description:
      'Ven, conoce el ambiente, prueba las sesiones y experimenta cómo se siente comenzar a recuperar tu energía y confianza.',
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
            Comenzar ahora
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
