export default function ServicesSection({ items }) {
  return (
    <section className="mc-section mc-services" id="servicos">
      <div className="mc-container">
        <div className="mc-sectionHeading">
          <h2 className="mc-sectionTitle">Nossos serviços</h2>
          <p className="mc-sectionSubtitle">Cuidados especializados para todas as fases da sua vida</p>
        </div>

        <div className="mc-services__grid">
          {items.map((item, index) => {
            const isImageIcon = typeof item.icon === 'string' && item.icon.match(/\.(png|jpe?g|svg|webp)$/i);
            return (
              <div
                key={`${item.title}-${index}`}
                className="mc-card mc-card--service mc-reveal"
                style={{ '--reveal-delay': `${index * 60}ms` }}
              >
                <div className="mc-card__iconWrapper">
                  {isImageIcon ? (
                    <img src={item.icon} alt={item.title} className="mc-card__icon mc-card__icon--img" />
                  ) : (
                    <span className="material-symbols-outlined mc-card__icon">{item.icon}</span>
                  )}
                  {isImageIcon && <span className="mc-card__iconOverlay" />}
                </div>
                <h3 className="mc-card__title">{item.title}</h3>
                <p className="mc-card__desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
