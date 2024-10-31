"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Fade } from "react-awesome-reveal";

const faqs = [
  {
    question: "¿Ofreces servicios de mantenimiento y soporte post-desarrollo?",
    answer:
      "Sí, ofrezco mantenimiento y soporte continuo para asegurar que la aplicación o sitio web siga funcionando de manera óptima. Esto incluye actualizaciones de seguridad, mejoras de rendimiento y la implementación de nuevas funcionalidades.",
  },
  {
    question:
      "¿Tienes experiencia trabajando en proyectos grandes y colaborando con equipos?",
    answer:
      "He trabajado en proyectos de diversos tamaños, desde aplicaciones individuales hasta plataformas empresariales complejas. En equipos, utilizo herramientas como Git, Jira y Slack para colaborar eficientemente con otros desarrolladores, diseñadores y gerentes de proyecto.",
  },
  {
    question:
      "¿Puedes integrar APIs y servicios de terceros en mis aplicaciones?",
    answer:
      "Claro, tengo experiencia integrando APIs externas, como pasarelas de pago (Stripe, PayPal), servicios de autenticación (OAuth, JWT) y otras API RESTful o GraphQL para mejorar la funcionalidad de las aplicaciones.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar una aplicación o sitio web?",
    answer:
      "El tiempo varía dependiendo de la complejidad del proyecto y sus requisitos. Un proyecto básico puede tardar entre 2 y 4 semanas, mientras que un sistema más complejo puede requerir varios meses. Siempre ofrezco un plan detallado y plazos estimados después de discutir los requisitos.",
  },
  {
    question:
      "¿Ofreces servicios de diseño o solo te enfocas en el desarrollo?",
    answer:
      "Aunque me especializo en el desarrollo, colaboro con diseñadores profesionales para asegurar que los productos tengan un diseño atractivo y funcional. También tengo conocimientos básicos de herramientas como Figma y Adobe XD, que me permiten trabajar directamente en diseños simples.",
  },
  {
    question: "¿Cuáles son tus tarifas?",
    answer:
      "Mis tarifas dependen del tipo y la complejidad del proyecto. Ofrezco tarifas por hora o presupuestos cerrados basados en las necesidades específicas de cada cliente. Después de una consulta inicial, proporciono un desglose claro de costos.",
  },
];

const Faq = () => {
  return (
    <section>
      <div className="w-full max-w-3xl lg:max-w-[1400px] mx-auto px-8 pt-[6rem]">
        <div className="w-full pt-12 mb-6 xl:mb-24 ">
          <Fade direction="up" triggerOnce cascade damping={1e-1} delay={400}>
            <h2 className="section-title mb-6 xl:mb-12 text-center mx-auto">
              Frequently Asked Questions
            </h2>
          </Fade>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <Fade
                  direction="left"
                  triggerOnce
                  cascade
                  damping={1e-1}
                  delay={(index + 1) * 200}
                  key={index}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <div className="ms-3 text-start pr-4 lg:pr-0">
                        {`0${index + 1}. `}
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 p-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Fade>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
