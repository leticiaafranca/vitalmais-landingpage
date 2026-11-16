import Icon from './Icon';
import medicoImage from '../../img/medico-hero.png';
export default function HeroSection({ id = 'inicio' }) {
  return (
    <section className="mc-hero" id={id}>
      <div className="mc-container mc-hero__grid">
        <div className="mc-hero__content">
          <span className="mc-eyebrow"><Icon name="plus" /> Centro Médico VitalMais · Fortaleza</span>
          <h1 className="mc-hero__title">Mais cuidado.<br />Mais perto<br />de você</h1>
          <p className="mc-hero__subtitle">Consultas, exames e acompanhamento em um só lugar, no Centro de Fortaleza. Um espaço para cuidar da sua saúde com atenção e acolhimento.</p>
          <div className="mc-hero__buttons">
            <a className="mc-btn mc-btn--primary" href="#servicos">Conheça nossos serviços <Icon name="right" /></a>
            <a className="mc-textLink" href="#localizacao">Como chegar <Icon /></a>
          </div>
        </div>
        <figure className="mc-hero__visual">
          <div className="mc-hero__photo"><img src={medicoImage} alt="Médica conversando com um paciente durante uma consulta" width="1024" height="1024" fetchPriority="high" /></div>
        </figure>
      </div>
      <div className="mc-container mc-hero__footnote"><span>Da consulta ao acompanhamento</span><span>Cuidado e atenção em cada etapa <Icon name="plus" /></span></div>
    </section>
  );
}
