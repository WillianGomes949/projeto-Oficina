"use client";

import {
  RiCarLine,
  RiRepeat2Line,
  RiSearch2Line,
  RiSettings5Line,
  RiArrowRightLine,
} from "@remixicon/react";
import Button from "../ui/button";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <RiSettings5Line size={32} className="text-blue-500" />,
      title: "Manutenção Preventiva",
      description: "Limpeza e verificação completa do sistema para evitar problemas futuros",
      features: ["Limpeza de componentes", "Verificação de pressão", "Troca de filtros"],
    },
    {
      icon: <RiSearch2Line size={32} className="text-cyan-500" />,
      title: "Diagnóstico Eletrônico",
      description: "Identificação precisa de problemas com equipamentos modernos",
      features: ["Scanner profissional", "Teste de compressão", "Análise de vazamentos"],
    },
    {
      icon: <RiCarLine size={32} className="text-indigo-500" />,
      title: "Instalação Completa",
      description: "Instalação de ar condicionado em veículos que não possuem o sistema",
      features: ["Kit completo", "Compressor novo", "Garantia de 1 ano"],
    },
    {
      icon: <RiRepeat2Line size={32} className="text-emerald-500" />,
      title: "Recarga de Gás",
      description: "Recarga com gás refrigerante de qualidade e procedência",
      features: ["Gás R134a", "Procedimento seguro", "Teste de eficiência"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Soluções completas em ar condicionado automotivo com 
            <span className="text-blue-500 font-medium"> qualidade e garantia</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-6 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/servicos" className="inline-block">
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-center mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    Saiba Mais
                    <RiArrowRightLine className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}