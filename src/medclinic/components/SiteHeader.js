import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Icon from './Icon';
export default function SiteHeader({ logoSrc }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="mc-header">
      <a className="mc-skip" href="#conteudo">Pular para o conteúdo</a>
      <div className="mc-container mc-header__inner">
        <Link className="mc-brand" to="/" aria-label="VitalMais — página inicial"><img className="mc-brand__logo" src={logoSrc} alt="" width="44" height="44" /><span className="mc-brand__name"><span>Centro Médico</span>VitalMais</span></Link>
        <button className={`mc-header__menuButton ${menuOpen ? 'is-active' : ''}`} type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="menu-principal" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav id="menu-principal" className={`mc-nav ${menuOpen ? 'mc-nav--open' : ''}`} aria-label="Navegação principal">
          {[['Início', 'inicio'], ['Serviços', 'servicos'], ['Estrutura', 'estrutura'], ['Localização', 'localizacao'], ['Contato', 'contato']].map(([label, id]) => <HashLink className="mc-nav__link" key={id} to={`/#${id}`} onClick={() => setMenuOpen(false)}>{label}</HashLink>)}
        </nav>
        <HashLink className="mc-header__cta mc-btn mc-btn--outline" to="/#localizacao">Visite a VitalMais <Icon /></HashLink>
      </div>
    </header>
  );
}
