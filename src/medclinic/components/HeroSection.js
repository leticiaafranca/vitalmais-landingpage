export default function HeroSection({ heroImageUrl }) {
  return (
    <section className="mc-section mc-hero" id="inicio">
      <div className="mc-container mc-hero__grid">
        <div className="mc-hero__content">
          <div className="mc-hero__intro">
            <span className="mc-pill mc-reveal mc-reveal--onload" style={{ '--reveal-delay': '0ms' }}>
              Inovação em Saúde
            </span>
            <h1 className="mc-hero__title mc-reveal mc-reveal--onload" style={{ '--reveal-delay': '60ms' }}>
              Um novo conceito de <span className="mc-textSecondary">saúde</span> em Fortaleza
            </h1>
            <p className="mc-hero__subtitle mc-reveal mc-reveal--onload" style={{ '--reveal-delay': '120ms' }}>
              Cuidamos de você com inovação e humanização no coração da cidade. Equipamentos modernos e uma equipe
              altamente qualificada.
            </p>
          </div>

          <div className="mc-hero__buttons mc-reveal mc-reveal--onload" style={{ '--reveal-delay': '180ms' }}>
            <button className="mc-btn mc-btn--heroPrimary" type="button">
              Agendamento em breve
            </button>
          </div>
        </div>

        <div className="mc-hero__visual">
          <div className="mc-hero__glow" aria-hidden="true" />
          <div
            className="mc-hero__image mc-reveal mc-reveal--onload"
            data-alt="Equipe médica profissional em ambiente hospitalar moderno"
            style={{ backgroundImage: `url('${heroImageUrl}')`, '--reveal-delay': '240ms' }}
          />
        </div>
      </div>
    </section>
  );
}
