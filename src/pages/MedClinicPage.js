import vitalmaisLogo from '../img/vitalmais-logo.png';
import medicoHeroImage from '../img/medico-hero.png';
import holterIcon from '../img/holter 1.png';
import ecgIcon from '../img/heart-rate-monitor 1.png';
import bloodTestIcon from '../img/blood-test 1.png';
import ultrassoundIcon from '../img/ventilation 1.png';
import mapaIcon from '../img/blood-pressure 1.png';
import pequenosIcon from '../img/scalpel 1.png';
import terapiaIcon from '../img/therapy 1.png';
import plusIcon from '../img/plus.webp';

import useRevealOnScroll from '../hooks/useRevealOnScroll';
import EstruturaSection from '../medclinic/components/EstruturaSection';
import HeroSection from '../medclinic/components/HeroSection';
import LocationSection from '../medclinic/components/LocationSection';
import ServicesSection from '../medclinic/components/ServicesSection';
import SiteFooter from '../medclinic/components/SiteFooter';

export default function MedClinicPage() {
  const heroImageUrl = medicoHeroImage;

  useRevealOnScroll();

  const estruturaImages = [
    {
      alt: 'Recepção moderna e limpa da clínica',
      url: '/consultorio1.png',
      className: 'mc-estrutura__image',
    },
    {
      alt: 'Consultório médico equipado com tecnologia',
      url: '/recepcao.jpeg',
      className: 'mc-estrutura__image mc-estrutura__image--offset',
    },
  ];

  const especialidades = [
    {
      icon: holterIcon,
      title: 'Consultas',
      desc: 'Atendimento médico completo para avaliação e orientação de sua saúde.',
    },
    {
      icon: bloodTestIcon,
      title: 'Exames de Sangue',
      desc: 'Coleta e análise laboratorial com resultados rápidos e confiáveis.',
    },
    {
      icon: ultrassoundIcon,
      title: 'Ultrassom',
      desc: 'Exame de imagem de alta definição para diagnóstico preciso.',
    },
    {
      icon: ecgIcon,
      title: 'ECG',
      desc: 'Avaliação do ritmo cardíaco com eletrocardiograma moderno.',
    },
    {
      icon: mapaIcon,
      title: 'Mapa',
      desc: 'Monitoramento ambulatorial da pressão arterial por 24 horas.',
    },
    {
      icon: holterIcon,
      title: 'Holter',
      desc: 'Registro contínuo do coração para detecção de arritmias.',
    },
    {
      icon: pequenosIcon,
      title: 'Pequenos Procedimentos',
      desc: 'Atendimentos rápidos e seguros para procedimentos ambulatoriais.',
    },
    {
      icon: terapiaIcon,
      title: 'Terapia',
      desc: 'Acompanhamento terapêutico para seu bem-estar físico e emocional.',
    },
    {
      icon: plusIcon,
      title: 'E mais!',
      desc: 'Serviços adicionais para cuidar de você com atenção especializada.',
    },
  ];

  return (
    <div className="mc-root">
      <main className="mc-main">
        <HeroSection heroImageUrl={heroImageUrl} id="inicio" />
        <ServicesSection items={especialidades} id="servicos" />
        <EstruturaSection images={estruturaImages} id="estrutura" />
        <LocationSection id="localizacao" />
        {/* <ContactSection id="contato" /> */}
      </main>
      <SiteFooter logoSrc={vitalmaisLogo} brandName="Centro Médico VitalMais" />
    </div>
  );
}
