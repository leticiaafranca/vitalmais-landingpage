export default function ContactSection() {
  return (
    <section className="mc-section mc-contact" id="contato">
      <div className="mc-container">
        <div className="mc-contactCard mc-reveal" style={{ '--reveal-delay': '0ms' }}>
          <div className="mc-contactCard__heading mc-reveal" style={{ '--reveal-delay': '60ms' }}>
            <h2 className="mc-contactCard__title">Agende sua consulta</h2>
            <p className="mc-contactCard__subtitle">
              Preencha o formulário e nossa equipe entrará em contato em menos de 24 horas.
            </p>
          </div>

          <form className="mc-contactForm" onSubmit={(event) => event.preventDefault()}>
            <div className="mc-field mc-reveal" style={{ '--reveal-delay': '120ms' }}>
              <label className="mc-label" htmlFor="contact-name">
                Nome Completo
              </label>
              <input id="contact-name" className="mc-input" placeholder="Seu nome" type="text" />
            </div>

            <div className="mc-field mc-reveal" style={{ '--reveal-delay': '180ms' }}>
              <label className="mc-label" htmlFor="contact-email">
                E-mail
              </label>
              <input id="contact-email" className="mc-input" placeholder="email@exemplo.com" type="email" />
            </div>

            <div className="mc-field mc-reveal" style={{ '--reveal-delay': '240ms' }}>
              <label className="mc-label" htmlFor="contact-phone">
                WhatsApp
              </label>
              <input id="contact-phone" className="mc-input" placeholder="(11) 99999-9999" type="tel" />
            </div>

            <div className="mc-field mc-reveal" style={{ '--reveal-delay': '300ms' }}>
              <label className="mc-label" htmlFor="contact-specialty">
                Especialidade
              </label>
              <select id="contact-specialty" className="mc-select" defaultValue="Clínica Geral">
                <option>Clínica Geral</option>
                <option>Pediatria</option>
                <option>Cardiologia</option>
                <option>Ginecologia</option>
                <option>Outra</option>
              </select>
            </div>

            <div className="mc-field mc-field--full mc-reveal" style={{ '--reveal-delay': '360ms' }}>
              <label className="mc-label" htmlFor="contact-message">
                Mensagem (opcional)
              </label>
              <textarea
                id="contact-message"
                className="mc-textarea"
                placeholder="Como podemos ajudar?"
                rows={4}
              />
            </div>

            <div className="mc-field mc-field--full mc-reveal" style={{ '--reveal-delay': '420ms' }}>
              <button className="mc-btn mc-btn--cta" type="submit">
                Enviar Solicitação
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
