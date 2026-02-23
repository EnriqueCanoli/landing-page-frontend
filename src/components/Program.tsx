import { useNavigate } from 'react-router-dom'
import funcionalImg from '../assets/funcionales.jpg'

const Program = () => {
  const navigate = useNavigate()

  return (
    <section className="program" aria-label="Programa Progresivo Senior">
      <div className="program-inner">

        {/* Columna izquierda: texto + CTA */}
        <div className="program-text-col">
          <span className="section-label">Lo que ofrecemos</span>

          <h2 className="program-title">Programa Progresivo Senior</h2>

          <div className="program-paragraphs">
            <p className="program-paragraph">
              Es un espacio dedicado a que las personas adultas mayores entrenen y construyan comunidad
              para mejorar su calidad de vida. Asisten a clases grupales diseñadas por un fisioterapeuta
              especializado en esta etapa de la vida, enfocadas en fortalecer la movilidad, el equilibrio
              y la fuerza.
            </p>

            <p className="program-paragraph">
              Antes de integrarse a un grupo, a cada persona se le realiza una evaluación física. Esta
              valoración nos permite conocer su condición y necesidades específicas, para asignarle
              ejercicios adecuados a su perfil, garantizando así un entrenamiento seguro y efectivo.
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
