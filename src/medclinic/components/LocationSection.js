import Icon from './Icon';
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Centro+Comercial+e+Residencial+Valdemar+Franca+Clarindo+de+Queiroz+800+Fortaleza';
export default function LocationSection() {
  return <section className="mc-section mc-location" id="localizacao"><div className="mc-container">
    <div className="mc-sectionHeading"><div><span className="mc-eyebrow"><Icon name="plus" /> Perto de você</span><h2 className="mc-sectionTitle">No coração<br />de Fortaleza</h2></div><p className="mc-sectionSubtitle">Estamos no Centro, em um endereço de fácil acesso para o seu próximo cuidado.</p></div>
    <div className="mc-location__grid"><div className="mc-location__content">
      <div className="mc-locationItem"><Icon name="pin" /><div><h3>Venha nos conhecer</h3><p>Centro Comercial e Residencial<br />Valdemar França</p><address>Rua General Clarindo de Queiroz, 800<br />Térreo e 1º andar · Centro<br />Fortaleza, Ceará</address></div></div>
      <div className="mc-locationItem"><Icon name="clock" /><div><h3>Horário de funcionamento</h3><dl className="mc-hours"><div><dt>Segunda a sexta</dt><dd>07h às 16h</dd></div><div><dt>Sábado</dt><dd>08h às 14h</dd></div></dl></div></div>
      <a className="mc-btn mc-btn--primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">Traçar rota no Google Maps <Icon /></a>
    </div><div className="mc-location__map"><iframe title="Localização do Centro Médico VitalMais" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.2477579983654!2d-38.531695889418394!3d-3.7322293488409795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749aa33d22a13%3A0x8accdbd84a8b387f!2sCentro%20Comercial%20e%20Residencial%20Valdemar%20Fran%C3%A7a!5e1!3m2!1spt-BR!2sbr!4v1772045016628!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
  </div></section>;
}
