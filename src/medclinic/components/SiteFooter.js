import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import ContactSection from './ContactSection';
export default function SiteFooter({ logoSrc, brandName = 'Centro Médico VitalMais' }) {
  return <footer className="mc-footer" id="contato"><div className="mc-container">
    <div className="mc-footer__top"><div><span className="mc-eyebrow"><Icon name="plus" /> Conte com a VitalMais</span><h2>Cuidado moderno,<br />humano de verdade.</h2></div><ContactSection /></div>
    <div className="mc-footer__middle"><Link className="mc-brand" to="/"><img className="mc-brand__logo" src={logoSrc} alt="" width="44" height="44" /><span className="mc-brand__name"><span>Centro Médico</span>VitalMais</span></Link><nav aria-label="Navegação do rodapé"><HashLink to="/#servicos">Serviços</HashLink><HashLink to="/#estrutura">Estrutura</HashLink><HashLink to="/#localizacao">Localização <Icon /></HashLink></nav></div>
    <div className="mc-footer__bottom"><p>© {new Date().getFullYear()} {brandName}</p><span>Centro, Fortaleza · CE</span></div>
  </div></footer>;
}
