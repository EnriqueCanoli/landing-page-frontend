const Contact = () => {
  return (
    <section className="contact" aria-label="Información de contacto">
      <div className="contact-inner">

        {/* Left: text + contact info */}
        <div className="contact-text-col">
          <span className="section-label">Información de contacto</span>

          <h2 className="contact-title">Estamos aquí para acompañarte</h2>
          <p className="contact-subtitle">
            Comunícate con nosotros para resolver tus dudas y dar el primer paso hacia tu bienestar.
          </p>

          <ul className="contact-info-list" aria-label="Datos de contacto">
          {/* <li className="contact-info-item">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Nombre</span>
                <span className="contact-info-value">Luis Enrique Canales</span>
              </div>
            </li>*/}

            <li className="contact-info-item">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Teléfono</span>
                <a href="tel:4611301372" className="contact-info-value" aria-label="Llamar al 461 130 1372">
                  4611301372
                </a>
              </div>
            </li>

            <li className="contact-info-item">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Correo electrónico</span>
                <a href="mailto:enrique_canoli@hotmail.com" className="contact-info-value" aria-label="Enviar correo a enrique_canoli@hotmail.com">
                  enrique_canoli@hotmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: location card */}
        <div className="contact-location-card" aria-label="Ubicación del centro">
          <div>
            <p className="contact-location-detail" style={{ marginBottom: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Ubicación
            </p>
            <p className="contact-location-name">Santiago de Querétaro, Qro.</p>
          </div>

          <hr className="contact-divider" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p className="contact-location-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Evaluación física personalizada incluida
            </p>
            <p className="contact-location-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              2 días de prueba gratis sin compromiso
            </p>
          </div>

          <hr className="contact-divider" />

          <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
            Comunícate por WhatsApp o correo electrónico y nuestro equipo te atenderá personalmente.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact
