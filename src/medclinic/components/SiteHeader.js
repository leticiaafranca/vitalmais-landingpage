import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SiteHeader({ logoSrc, brandName }) {
  return (
    <header className="mc-header">
      <div className="mc-container mc-header__inner">
        <div className="mc-brand">
          <img className="mc-brand__logo" src={logoSrc} alt="VitalMais" />
          <h2 className="mc-brand__name">{brandName}</h2>
        </div>

        <nav className="mc-nav" aria-label="Navegação principal">
          <HashLink smooth className="mc-nav__link" to="/#inicio">
            Início
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#servicos">
            Serviços
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#estrutura">
            Estrutura
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#localizacao">
            Localização
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#localizacao">
            Contato
          </HashLink>
          {/* <Link className="mc-nav__link" to="/especialistas">
            Especialistas
          </Link> */}
        </nav>

        <div className="mc-header__actions" />
      </div>
    </header>
  );
}
