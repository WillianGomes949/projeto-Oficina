import { RiCheckLine } from "@remixicon/react";
import IconNoLink from "../ui/iconNoLink";
import ScrollReveal from "../ScrollReveal";
import ScrollRevealContainer from "../ScrollRevealContainer";


export default function WhyChooseUs() {
  const features = [
    {
      number: "10+",
      title: "Anos de Experiência",
      description: "Mais de uma década servindo com excelência",
    },
    {
      number: "5.000+",
      title: "Clientes Satisfeitos",
      description: "Veículos atendidos com qualidade comprovada",
    },
    {
      number: "12",
      title: "Meses de Garantia",
      description: "Em todos os serviços realizados",
    },
    {
      number: "24h",
      title: "Atendimento",
      description: "Suporte e emergências",
    },
  ];

  return (
    <>
    <ScrollRevealContainer>
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="top" interval={200}>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Por que Escolher a{" "}
                <span className="text-blue-300">ClimaAuto</span>?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Somos especialistas em ar condicionado veicular com técnicos
                certificados e equipamentos de última geração para oferecer o
                melhor serviço.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <IconNoLink color="green">
                    <RiCheckLine />
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Técnicos Certificados
                    </h4>
                    <p className="text-blue-200">
                      Profissionais qualificados e treinados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconNoLink color="green">
                    <RiCheckLine />
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold text-lg">Peças Originais</h4>
                    <p className="text-blue-200">
                      Utilizamos apenas componentes de qualidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconNoLink color="green">
                    <RiCheckLine />
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Orçamento Sem Compromisso
                    </h4>
                    <p className="text-blue-200">
                      Avaliação gratuita do seu veículo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="bottom" interval={200}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    {feature.number}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
   </ScrollRevealContainer>
    </>
   
  );
}
