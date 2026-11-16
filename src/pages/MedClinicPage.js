import vitalmaisLogo from '../img/vitalmais-logo.png';
import EstruturaSection from '../medclinic/components/EstruturaSection';
import HeroSection from '../medclinic/components/HeroSection';
import LocationSection from '../medclinic/components/LocationSection';
import ServicesSection from '../medclinic/components/ServicesSection';
import SiteFooter from '../medclinic/components/SiteFooter';
const services = [
  { title: 'Consultas', desc: 'Avaliação médica e orientação para cuidar da sua saúde em cada etapa.' },
  { title: 'Exames de sangue', desc: 'Coleta e análise laboratorial para apoiar sua avaliação médica.' },
  { title: 'Ultrassom', desc: 'Exames de imagem que auxiliam o diagnóstico e o acompanhamento.' },
  { title: 'Eletrocardiograma', desc: 'Registro da atividade elétrica do coração para avaliação do ritmo cardíaco.' },
  { title: 'MAPA', desc: 'Monitoramento ambulatorial da pressão arterial ao longo de 24 horas.' },
  { title: 'Holter', desc: 'Registro contínuo dos batimentos cardíacos para investigação de arritmias.' },
  { title: 'Pequenos procedimentos', desc: 'Cuidados e procedimentos ambulatoriais em um ambiente preparado.' },
  { title: 'Terapia', desc: 'Acompanhamento terapêutico voltado ao seu bem-estar físico e emocional.' },
  { title: 'Outros cuidados', desc: 'Conheça as demais opções de atendimento disponíveis na VitalMais.' },
];
export default function MedClinicPage() {
  return <div className="mc-root"><main id="conteudo"><HeroSection /><ServicesSection items={services} /><EstruturaSection /><LocationSection /></main><SiteFooter logoSrc={vitalmaisLogo} brandName="Centro Médico VitalMais" /></div>;
}
