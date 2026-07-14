import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SiteHeader({ logoSrc, brandName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="mc-header">
      <div className="mc-container mc-header__inner">
        <div className="mc-brand">
          <img className="mc-brand__logo" src={logoSrc} alt="VitalMais" />
          <h2 className="mc-brand__name">{brandName}</h2>
        </div>

        <button
          className={`mc-header__menuButton ${menuOpen ? "is-active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`mc-nav ${menuOpen ? "mc-nav--open" : ""}`} aria-label="Navegação principal">
          <HashLink smooth className="mc-nav__link" to="/#inicio" onClick={closeMenu}>
            Início
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#servicos" onClick={closeMenu}>
            Serviços
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#estrutura" onClick={closeMenu}>
            Estrutura
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#localizacao" onClick={closeMenu}>
            Localização
          </HashLink>
          <HashLink smooth className="mc-nav__link" to="/#contato" onClick={closeMenu}>
            Contato
          </HashLink>
          {/* <Link className="mc-nav__link" to="/especialistas" onClick={closeMenu}>
            Especialistas
          </Link> */}
        </nav>

        <div className="mc-header__actions" />
      </div>
    </header>
  );
}
