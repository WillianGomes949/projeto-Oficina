import { RiCheckLine, RiAwardLine, RiShieldCheckLine, RiTimeLine } from "@remixicon/react";
import IconNoLink from "../ui/iconNoLink";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "10+",
      title: "Anos de Experiência",
      description: "Mais de uma década servindo com excelência",
      icon: <RiAwardLine className="text-blue-400" size={24} />,
    },
    {
      number: "5.000+",
      title: "Clientes Satisfeitos",
      description: "Veículos atendidos com qualidade comprovada",
      icon: <RiCheckLine className="text-green-400" size={24} />,
    },
    {
      number: "12",
      title: "Meses de Garantia",
      description: "Em todos os serviços realizados",
      icon: <RiShieldCheckLine className="text-amber-400" size={24} />,
    },
    {
      number: "24h",
      title: "Atendimento",
      description: "Suporte e emergências",
      icon: <RiTimeLine className="text-purple-400" size={24} />,
    },
  ];

  const benefits = [
    {
      title: "Técnicos Certificados",
      description: "Profissionais qualificados e constantemente treinados",
    },
    {
      title: "Peças Originais",
      description: "Utilizamos apenas componentes de qualidade premium",
    },
    {
      title: "Orçamento Sem Compromisso",
      description: "Avaliação gratuita e transparente do seu veículo",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <Image
          src="/images/topography.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Por que escolher a{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">
                  ClimaAuto
                </span>
                ?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Somos especialistas em ar condicionado veicular com técnicos 
                certificados e equipamentos de última geração para oferecer o 
                melhor serviço.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <RiCheckLine className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-white">
                    {feature.number}
                  </div>
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}