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
              Es un espacio diseñado para que personas +60 recuperen y fortalezcan su movilidad, equilibrio y fuerza, mientras comparten y construyen comunidad.
            </p>

            <p className="program-paragraph">
              Las clases son grupales, guiadas por un fisioterapeuta especializado en esta etapa de la vida, y organizadas en grupos específicos según las necesidades y capacidades de cada persona. Así, cada participante entrena a su propio nivel, de forma segura y efectiva.
            </p>
            <p className="program-paragraph">
            Antes de integrarse, realizamos una evaluación física personalizada que nos permite conocer su condición y diseñar un plan adecuado a su perfil, asegurando avances reales y un acompañamiento cercano en cada paso.
            </p>
          </div>

          <button className="btn btn-primary" onClick={() => navigate('/formulario')} aria-label="Comenzar ahora — ir al formulario">
            Comenzar ahora
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
