import React, { useEffect } from "react";

const especialistas = [
  {
    nome: "Dr. Carlos Alberto Moraes",
    especialidade: "Gardiologista",
    crm: "CRM 12345-SP",
    descricao: "Especialista em Insuficiência Cardíaca e Hipertensão.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBifH21jpQToFCzo85CK3ndhM1f5p7w65bbz8AJzL3v7O7ag-1aycaSZv3NvYk3HMVDEUmEWUD32ZWmPACSN59zDBbDfXcQepvDQXlJ_vsq_Sv8hNqROSaZuVZxGRXsAjL7NrOMfalc2d24ThAxsXQqEWTAtqzV3u6S4Kv_Wvt5OJjQwkzrvq5UhRUimjBbGgMW1Kqy4L2FCGytPKuQtbG2c0c-smzkGiuIwUBrtk7h1EqBKwbHhusYRnch65VYe3PiaT2If0h-_g_8",
  },
  {
    nome: "Dra. Juliana Mendes",
    especialidade: "Dermatologia",
    crm: "CRM 67890-SP",
    descricao: "Doutorado em Estética Avançada e Rejuvenescimento.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dAWpfrIW5M9n5X0gObC2Jdyp0RkLU2r9Jid8PuW4l-14NE8QIbrlaNhe2JtCqSnOGMZU7R2s90Kilcv51aDOfwzYzAtUTUOjgJfHJc4JO2wx-GHFwwXZwBTRWkgi7m6rPcJfnTm7sl67QAWSuit2jrVge2ZG7hmh9CdjzXMkLxYC9AaSTheXsXfUygOAQFySGhRZ-poAozPif1JUFnIftgkR2lxqAhmq9whw6TYSIC-CQOrsGzsXbmxcmiUNNVbxng1I2g5waeEk",
  },
  {
    nome: "Dr. Lucas Marques",
    especialidade: "Generalista",
    crm: "CRM 67890-SP",
    descricao: "Doutorado em Estética Avançada e Rejuvenescimento.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dAWpfrIW5M9n5X0gObC2Jdyp0RkLU2r9Jid8PuW4l-14NE8QIbrlaNhe2JtCqSnOGMZU7R2s90Kilcv51aDOfwzYzAtUTUOjgJfHJc4JO2wx-GHFwwXZwBTRWkgi7m6rPcJfnTm7sl67QAWSuit2jrVge2ZG7hmh9CdjzXMkLxYC9AaSTheXsXfUygOAQFySGhRZ-poAozPif1JUFnIftgkR2lxqAhmq9whw6TYSIC-CQOrsGzsXbmxcmiUNNVbxng1I2g5waeEk",
  },
  {
    nome: "Dr. Carlos Alberto Moraes",
    especialidade: "Gardiologista",
    crm: "CRM 12345-SP",
    descricao: "Especialista em Insuficiência Cardíaca e Hipertensão.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBifH21jpQToFCzo85CK3ndhM1f5p7w65bbz8AJzL3v7O7ag-1aycaSZv3NvYk3HMVDEUmEWUD32ZWmPACSN59zDBbDfXcQepvDQXlJ_vsq_Sv8hNqROSaZuVZxGRXsAjL7NrOMfalc2d24ThAxsXQqEWTAtqzV3u6S4Kv_Wvt5OJjQwkzrvq5UhRUimjBbGgMW1Kqy4L2FCGytPKuQtbG2c0c-smzkGiuIwUBrtk7h1EqBKwbHhusYRnch65VYe3PiaT2If0h-_g_8",
  },
  {
    nome: "Dra. Juliana Mendes",
    especialidade: "Dermatologia",
    crm: "CRM 67890-SP",
    descricao: "Doutorado em Estética Avançada e Rejuvenescimento.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dAWpfrIW5M9n5X0gObC2Jdyp0RkLU2r9Jid8PuW4l-14NE8QIbrlaNhe2JtCqSnOGMZU7R2s90Kilcv51aDOfwzYzAtUTUOjgJfHJc4JO2wx-GHFwwXZwBTRWkgi7m6rPcJfnTm7sl67QAWSuit2jrVge2ZG7hmh9CdjzXMkLxYC9AaSTheXsXfUygOAQFySGhRZ-poAozPif1JUFnIftgkR2lxqAhmq9whw6TYSIC-CQOrsGzsXbmxcmiUNNVbxng1I2g5waeEk",
  },
  {
    nome: "Dr. Lucas Marques",
    especialidade: "Generalista",
    crm: "CRM 67890-SP",
    descricao: "Doutorado em Estética Avançada e Rejuvenescimento.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dAWpfrIW5M9n5X0gObC2Jdyp0RkLU2r9Jid8PuW4l-14NE8QIbrlaNhe2JtCqSnOGMZU7R2s90Kilcv51aDOfwzYzAtUTUOjgJfHJc4JO2wx-GHFwwXZwBTRWkgi7m6rPcJfnTm7sl67QAWSuit2jrVge2ZG7hmh9CdjzXMkLxYC9AaSTheXsXfUygOAQFySGhRZ-poAozPif1JUFnIftgkR2lxqAhmq9whw6TYSIC-CQOrsGzsXbmxcmiUNNVbxng1I2g5waeEk",
  },
];

export default function Especialistas() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".mc-reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, idx * 0);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));
  }, []);

  return (
    <div className="mc-especialistas-page">
      <section className="mc-especialistas-hero mc-reveal">
        <span className="mc-especialistas-hero__subtitle">Excelência Médica</span>
        <h2 className="mc-estrutura__title">Nossos especialistas</h2>
        <p className="mc-especialistas-hero__desc">
          Conheça a equipe de profissionais altamente qualificados do Centro Médico VitalMais,
          dedicados ao seu bem-estar e saúde integral.
        </p>
      </section>

      <section className="mc-especialistas-grid">
        {especialistas.map((esp, idx) => (
          <div className="mc-especialistas-card mc-reveal" key={idx}>
            <div
              className="mc-especialistas-card__image"
              style={{ backgroundImage: `url('${esp.imagem}')` }}
            />
            <div className="mc-especialistas-card__info">
              <span className="mc-especialistas-card__especialidade">{esp.especialidade}</span>
              <h3 className="mc-especialistas-card__nome">{esp.nome}</h3>
              <p className="mc-especialistas-card__crm">{esp.crm}</p>
              <p className="mc-especialistas-card__desc">{esp.descricao}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mc-especialistas-cta mc-reveal">
        <h2 className="mc-especialistas-cta__title">Precisa de um atendimento especializado?</h2>
        <p className="mc-especialistas-cta__desc">
          Agende sua consulta com um de nossos profissionais agora mesmo através do WhatsApp.
        </p>
        <div className="mc-especialistas-cta__actions">
          <button className="mc-especialistas-cta__whatsapp">Agendamento em breve</button>
        </div>
      </section>
    </div>
  );
}
