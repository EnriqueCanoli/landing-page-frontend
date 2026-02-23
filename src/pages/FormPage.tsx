import { useNavigate } from 'react-router-dom'
import LeadForm from '../components/LeadForm'

const FormPage = () => {
  const navigate = useNavigate()

  return (
    <div className="form-page">

      {/* Header de navegación */}
      <header className="form-page-header">
        <button
          className="form-page-back"
          onClick={() => navigate('/')}
          aria-label="Volver a la página principal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Volver
        </button>

        <span className="form-page-brand">Centro de Entrenamiento Físico Senior</span>
      </header>

      {/* Formulario */}
      <main>
        <LeadForm />
      </main>

    </div>
  )
}

export default FormPage
