import { Link } from 'react-router-dom';
import SiteFooter from '../medclinic/components/SiteFooter';
import Icon from '../medclinic/components/Icon';
import logo from '../img/vitalmais-logo.png';
import medicoImage from '../img/medico-hero.png';
export default function Especialistas() {
  return <div className="mc-root"><main className="mc-specialists" id="conteudo"><div className="mc-container"><Link className="mc-textLink" to="/">Voltar para a página inicial</Link><div className="mc-specialists__grid"><div><span className="mc-eyebrow"><Icon name="plus" /> Equipe VitalMais</span><h1 className="mc-sectionTitle">Conheça quem<br />cuida de você</h1><p className="mc-specialists__lead">Em breve, você poderá conhecer aqui os profissionais, suas especialidades e informações de atendimento.</p><a className="mc-btn mc-btn--primary" href="https://www.instagram.com/clinicavitalmais" target="_blank" rel="noopener noreferrer">Acompanhe as novidades <Icon /></a></div><figure><img src={medicoImage} alt="Médica conversando com um paciente em uma consulta ilustrativa" width="1024" height="1024" /><figcaption>Atenção e acolhimento · Imagem ilustrativa</figcaption></figure></div></div></main><SiteFooter logoSrc={logo} /></div>;
}
