import { useNavigate } from 'react-router-dom'
import funcionalImg from '../assets/funcionales.jpg'

const Program = () => {
  const navigate = useNavigate()

  return (
    <section className="program" aria-label="Programa Funcional Senior">
      <div className="program-inner">

        {/* Columna izquierda: texto + CTA */}
        <div className="program-text-col">
          <span className="section-label">Lo que ofrecemos</span>

          <h2 className="program-title">Programa Funcional Senior</h2>

          <div className="program-paragraphs">
            <p className="program-paragraph">
              Antes de que empieces el programa, un fisioterapeuta especializado en adultos mayores hace algo que ningún gimnasio hace: te evalúa a ti. No tu edad. No tu peso. A ti — tu movilidad real, tu equilibrio, tus puntos de dolor, tu historial.
            </p>
            <p className="program-paragraph">
              A partir de ahí te asigna al grupo que mejor se adapta a tu condición — personas en tu mismo nivel, trabajando a tu mismo ritmo, con el fisioterapeuta guiando cada sesión
            </p>
            <div className="program-benefits">
              <p className="program-benefits-label">Beneficios</p>
              <ul className="program-benefits-list">
                <li className="program-benefit-item">
                  <span className="program-benefit-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Clases en grupos pequeños donde todos están en tu mismo nivel</span>
                </li>
                <li className="program-benefit-item">
                  <span className="program-benefit-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Avances medibles: en semanas sabrás exactamente qué mejoró en tu movilidad</span>
                </li>
                <li className="program-benefit-item">
                  <span className="program-benefit-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Un espacio donde se construyen amistades reales</span>
                </li>
              </ul>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => navigate('/formulario')} aria-label="Comenzar ahora — ir al formulario">
            Quiero mis 2 días de prueba gratis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Columna derecha: imagen */}
        <div className="program-image-wrap">
          <img
            src={funcionalImg}
            alt="Adultos mayores en clase grupal de entrenamiento funcional"
            className="program-image"
          />
        </div>

      </div>
    </section>
  )
}

export default Program
