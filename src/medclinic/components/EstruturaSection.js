import Icon from './Icon';
const features = [
  ['Ambiente preparado', 'Consultórios e espaços dedicados a consultas e exames'],
  ['Atendimento humanizado', 'Escuta e atenção às suas necessidades'],
  ['No Centro de Fortaleza', 'Fácil acesso para incluir o cuidado na sua rotina'],
  ['Cuidado na sua rotina', 'Atendimento de segunda a sábado'],
];
export default function EstruturaSection() {
  return <section className="mc-section mc-estrutura" id="estrutura"><div className="mc-container">
    <div className="mc-estrutura__grid">
      <figure className="mc-estrutura__photo"><img src="/consultorio1.png" alt="Perspectiva ilustrativa de um consultório VitalMais" width="1254" height="1254" loading="lazy" /><figcaption>Projeto do consultório <span>Imagem ilustrativa</span></figcaption></figure>
      <div className="mc-estrutura__content"><span className="mc-eyebrow"><Icon name="plus" /> Nossa estrutura</span><h2 className="mc-sectionTitle">O cuidado começa<br />no acolhimento</h2><p className="mc-estrutura__lead">Um ambiente tranquilo faz parte de uma boa experiência de cuidado. Nossos espaços são pensados para receber você com conforto e atenção.</p><dl className="mc-estrutura__features">{features.map(([title, desc]) => <div className="mc-feature" key={title}><dt><Icon name="check" />{title}</dt><dd>{desc}</dd></div>)}</dl><a className="mc-textLink" href="#localizacao">Encontre a clínica <Icon /></a></div>
    </div>
  </div></section>;
}
