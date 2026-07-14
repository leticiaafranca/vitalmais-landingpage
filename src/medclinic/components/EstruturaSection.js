export default function EstruturaSection({ images }) {
  return (
    <section className="mc-section mc-estrutura" id="estrutura">
      <div className="mc-container mc-estrutura__grid">
        <div className="mc-estrutura__images">
          {images.map((image, index) => (
            <div
              key={image.url}
              className={`${image.className} mc-reveal`}
              data-alt={image.alt}
              aria-label={image.alt}
              role="img"
              style={{ backgroundImage: `url('${image.url}')`, '--reveal-delay': `${index * 60}ms` }}
            />
          ))}
        </div>

        <div className="mc-estrutura__content">
          <h2 className="mc-estrutura__title">Nossa estrutura</h2>
          <p className="mc-estrutura__lead">
            Oferecemos um ambiente projetado para o seu conforto e segurança. Nossa estrutura conta com o que há de mais
            moderno na medicina diagnóstica.
          </p>

          <div className="mc-estrutura__features">
            <div className="mc-feature">
              <span className="material-symbols-outlined mc-feature__icon">verified</span>
              <div>
                <h4 className="mc-feature__title">Equipamentos de Ponta</h4>
                <p className="mc-feature__desc">Tecnologia de última geração.</p>
              </div>
            </div>

            <div className="mc-feature">
              <span className="material-symbols-outlined mc-feature__icon">diversity_3</span>
              <div>
                <h4 className="mc-feature__title">Atendimento Humanizado</h4>
                <p className="mc-feature__desc">Você em primeiro lugar.</p>
              </div>
            </div>

            <div className="mc-feature">
              <span className="material-symbols-outlined mc-feature__icon">location_on</span>
              <div>
                <h4 className="mc-feature__title">Localização Premium</h4>
                <p className="mc-feature__desc">Fácil acesso no centro.</p>
              </div>
            </div>

            <div className="mc-feature">
              <span className="material-symbols-outlined mc-feature__icon">schedule</span>
              <div>
                <h4 className="mc-feature__title">Horário Flexível</h4>
                <p className="mc-feature__desc">Atendimento das 07h às 16h.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
