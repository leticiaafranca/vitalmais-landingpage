import Icon from './Icon';
export default function ServicesSection({ items, id = 'servicos' }) {
  return (
    <section className="mc-section mc-services" id={id}>
      <div className="mc-container">
        <div className="mc-sectionHeading">
          <div><span className="mc-eyebrow"><Icon name="plus" /> Cuidado que acompanha você</span><h2 className="mc-sectionTitle">Sua saúde,<br />por inteiro</h2></div>
          <p className="mc-sectionSubtitle">Da avaliação médica aos exames, encontre o cuidado de que precisa com a comodidade de estar em um só lugar.</p>
        </div>
        <div className="mc-services__featured">
          {items.slice(0, 2).map((item, index) => <article key={item.title} className={`mc-serviceFeatured mc-serviceFeatured--${index === 0 ? 'consultas' : 'exames'}`}><span className="mc-service__number">0{index + 1} / {index === 0 ? 'Acompanhamento médico' : 'Análises laboratoriais'}</span><h3>{item.title}</h3><p>{item.desc}</p><a className="mc-textLink" href="#contato">Informações de atendimento <Icon name="right" /></a></article>)}
        </div>
        <div className="mc-services__list">
          {items.slice(2).map((item, index) => <article key={item.title} className="mc-serviceRow"><span className="mc-service__number">{String(index + 3).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
