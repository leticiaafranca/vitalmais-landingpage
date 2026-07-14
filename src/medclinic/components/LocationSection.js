export default function LocationSection() {
  return (
    <section className="mc-section mc-location" id="localizacao">
      <div className="mc-container mc-location__grid">
        <div className="mc-location__content">
          <h2 className="mc-location__title">Onde estamos</h2>

          <div className="mc-location__items">
            <div className="mc-locationItem mc-reveal" style={{ '--reveal-delay': '0ms' }}>
              <div className="mc-locationItem__iconWrap">
                <span className="material-symbols-outlined mc-locationItem__icon">map</span>
              </div>
              <div>
                <p className="mc-locationItem__label">Endereço</p>
                <p className="mc-locationItem__value">Centro Comercial e Residencial Valdemar França</p>
                <p className="mc-locationItem__value">R. Gen. Clarindo de Queiroz, 800, Térreo e 1° Andar - Centro, Fortaleza</p>
              </div>
            </div>

            <div className="mc-locationItem mc-reveal" style={{ '--reveal-delay': '60ms' }}>
              <div className="mc-locationItem__iconWrap">
                <span className="material-symbols-outlined mc-locationItem__icon">phone_in_talk</span>
              </div>
              <div>
                <p className="mc-locationItem__label">Telefone</p>
                <p className="mc-locationItem__value">(85) xxxx-xxxxx</p>
              </div>
            </div>

            <div className="mc-locationItem mc-reveal" style={{ '--reveal-delay': '120ms' }}>
              <div className="mc-locationItem__iconWrap">
                <span className="material-symbols-outlined mc-locationItem__icon">calendar_month</span>
              </div>
              <div>
                <p className="mc-locationItem__label">Funcionamento</p>
                <p className="mc-locationItem__value">Segunda a Sexta: 07:00 - 16:00 | Sáb: 08:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mc-location__map">
          <iframe
            className="mc-location__mapIframe"
            title="Mapa - Centro Médico VitalMais"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.2477579983654!2d-38.531695889418394!3d-3.7322293488409795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749aa33d22a13%3A0x8accdbd84a8b387f!2sCentro%20Comercial%20e%20Residencial%20Valdemar%20Fran%C3%A7a!5e1!3m2!1spt-BR!2sbr!4v1772045016628!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
