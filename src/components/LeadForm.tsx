import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LeadFormData {
  seniorNombre: string
  seniorApellidos: string
  seniorEdad: string
  seniorZona: string
  contactoNombre: string
  contactoTelefono: string
  contactoCorreo: string
}

const initialData: LeadFormData = {
  seniorNombre: '',
  seniorApellidos: '',
  seniorEdad: '',
  seniorZona: '',
  contactoNombre: '',
  contactoTelefono: '',
  contactoCorreo: '',
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

const LeadForm = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<LeadFormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [zonaSelect, setZonaSelect] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleZonaSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setZonaSelect(value)
    if (value !== 'otra') {
      setData(prev => ({ ...prev, seniorZona: value }))
    } else {
      setData(prev => ({ ...prev, seniorZona: '' }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const edad = parseInt(data.seniorEdad, 10)

    if (!data.seniorNombre.trim()) {
      setError('El nombre del adulto mayor es obligatorio.')
      return
    }
    if (!data.seniorApellidos.trim()) {
      setError('Los apellidos del adulto mayor son obligatorios.')
      return
    }
    if (!data.seniorEdad || isNaN(edad) || edad < 50 || edad > 110) {
      setError('Ingresa una edad válida entre 50 y 110 años.')
      return
    }
    if (!data.seniorZona.trim()) {
      setError('La zona o colonia es obligatoria.')
      return
    }
    if (!data.contactoNombre.trim()) {
      setError('El nombre del contacto es obligatorio.')
      return
    }
    if (!data.contactoTelefono.trim()) {
      setError('El teléfono del contacto es obligatorio.')
      return
    }

    setLoading(true)

    try {
      await axios.post(`${API_URL}/api/leads`, {
        seniorNombre: data.seniorNombre.trim(),
        seniorApellidos: data.seniorApellidos.trim(),
        seniorEdad: edad,
        seniorZona: data.seniorZona.trim(),
        contactoNombre: data.contactoNombre.trim(),
        contactoTelefono: data.contactoTelefono.trim(),
        ...(data.contactoCorreo ? { contactoCorreo: data.contactoCorreo.trim() } : {}),
      })
      setSubmitted(true)
    } catch {
      setError('Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="lead-form-section" aria-label="Formulario de inscripción">
      <div className="lead-form-inner">

        <div className="lead-form-header">
          <span className="section-label">Primer paso</span>
          {submitted ? (
            <h2 className="lead-form-title">¡Gracias por comenzar tu proceso!</h2>
          ) : (
            <>
              <h2 className="lead-form-title">Empieza hoy tu proceso</h2>
              <p className="lead-form-subtitle">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </>
          )}
        </div>

        {submitted ? (
          <div className="lead-form-success" role="alert">
            <p className="lead-form-success-text">
              Hemos recibido correctamente tu información. Nuestro equipo se comunicará contigo
              dentro de las próximas 24 horas.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate('/')}
              aria-label="Regresar a la página principal"
            >
              Regresar al inicio
            </button>
          </div>
        ) : (
          <form className="lead-form-card" onSubmit={handleSubmit} noValidate>

            {/* ── Datos del adulto mayor ── */}
            <div className="lead-form-group">
              <p className="lead-form-group-title">Ingresa la información del adulto mayor</p>

              <div className="lead-form-fields">
                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="seniorNombre">Nombre</label>
                  <input
                    id="seniorNombre"
                    name="seniorNombre"
                    type="text"
                    required
                    className="lead-form-input"
                    value={data.seniorNombre}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="Ej. María"
                  />
                </div>

                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="seniorApellidos">Apellidos</label>
                  <input
                    id="seniorApellidos"
                    name="seniorApellidos"
                    type="text"
                    required
                    className="lead-form-input"
                    value={data.seniorApellidos}
                    onChange={handleChange}
                    autoComplete="family-name"
                    placeholder="Ej. García López"
                  />
                </div>

                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="seniorEdad">Edad</label>
                  <input
                    id="seniorEdad"
                    name="seniorEdad"
                    type="number"
                    required
                    min={50}
                    max={110}
                    className="lead-form-input"
                    value={data.seniorEdad}
                    onChange={handleChange}
                    placeholder="Ej. 68"
                    inputMode="numeric"
                  />
                </div>

                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="seniorZona">Zona / Colonia</label>
                  <div className="lead-form-select-wrap">
                    <select
                      id="seniorZona"
                      className="lead-form-input lead-form-select"
                      value={zonaSelect}
                      onChange={handleZonaSelect}
                    >
                      <option value="">Selecciona una zona</option>
                      <option value="Centro Histórico">Centro Histórico</option>
                      <option value="Carretas">Carretas</option>
                      <option value="Lomas del Marqués">Lomas del Marqués</option>
                      <option value="Álamos">Álamos</option>
                      <option value="Cimatario">Cimatario</option>
                      <option value="Colinas del Cimatario">Colinas del Cimatario</option>
                      <option value="Jardines de la Hacienda">Jardines de la Hacienda</option>
                      <option value="Milenio III">Milenio III</option>
                      <option value="El Refugio">El Refugio</option>
                      <option value="Zákia">Zákia</option>
                      <option value="La Pradera">La Pradera</option>
                      <option value="Paseos del Pedregal">Paseos del Pedregal</option>
                      <option value="Colinas de Santa Cruz">Colinas de Santa Cruz</option>
                      <option value="Hacienda Santa Rosa">Hacienda Santa Rosa</option>
                      <option value="Centro Sur">Centro Sur</option>
                      <option value="Candiles">Candiles</option>
                      <option value="Vista Alegre">Vista Alegre</option>
                      <option value="Casa Blanca">Casa Blanca</option>
                      <option value="Presidentes">Presidentes</option>
                      <option value="Lázaro Cárdenas">Lázaro Cárdenas</option>
                      <option value="Felipe Carrillo Puerto">Felipe Carrillo Puerto</option>
                      <option value="otra">Otra</option>
                    </select>
                    <span className="lead-form-select-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </div>
                  {zonaSelect === 'otra' && (
                    <input
                      name="seniorZona"
                      type="text"
                      className="lead-form-input lead-form-input--mt"
                      value={data.seniorZona}
                      onChange={handleChange}
                      placeholder="Escribe tu zona o colonia"
                      autoFocus
                    />
                  )}
                </div>
              </div>
            </div>

            <hr className="lead-form-divider" />

            {/* ── Datos de la persona de contacto ── */}
            <div className="lead-form-group">
              <p className="lead-form-group-title">Ingresa la información de la persona de contacto</p>

              <div className="lead-form-fields">
                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="contactoNombre">Nombre</label>
                  <input
                    id="contactoNombre"
                    name="contactoNombre"
                    type="text"
                    required
                    className="lead-form-input"
                    value={data.contactoNombre}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="Ej. Carlos"
                  />
                </div>

                <div className="lead-form-field">
                  <label className="lead-form-label" htmlFor="contactoTelefono">Teléfono</label>
                  <input
                    id="contactoTelefono"
                    name="contactoTelefono"
                    type="tel"
                    required
                    className="lead-form-input"
                    value={data.contactoTelefono}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Ej. 461 130 1372"
                    inputMode="tel"
                  />
                </div>

                <div className="lead-form-field lead-form-field--full">
                  <label className="lead-form-label" htmlFor="contactoCorreo">
                    Correo electrónico{' '}
                    <span className="lead-form-optional">(opcional)</span>
                  </label>
                  <input
                    id="contactoCorreo"
                    name="contactoCorreo"
                    type="email"
                    className="lead-form-input"
                    value={data.contactoCorreo}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Ej. correo@ejemplo.com"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="lead-form-error" role="alert">
                {error}
              </p>
            )}

            <div className="lead-form-submit-wrap">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar información'}
                {!loading && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
  )
}

export default LeadForm
