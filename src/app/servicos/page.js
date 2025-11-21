import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Button from "@/components/ui/button";
import {
  RiCarLine,
  RiCarWashingLine,
  RiFlashlightLine,
  RiRepeat2Line,
  RiSearch2Line,
  RiSettings5Line,
  RiTimeLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiWhatsappFill,
  RiPhoneFill,
  RiArrowRightLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Servicos() {
  const servicosDetalhados = [
    {
      icon: <RiSettings5Line className="text-blue-500" size={32} />,
      title: "Manutenção Preventiva",
      description: "Serviço completo de manutenção para evitar problemas futuros e garantir o bom funcionamento do seu ar condicionado.",
      detalhes: [
        "Limpeza completa do sistema",
        "Troca de filtro de cabine",
        "Verificação de pressão do gás",
        "Inspeção de correias e polias",
        "Teste de temperatura e performance",
      ],
      preco: "A partir de R$ 150,00",
      tempo: "1-2 horas",
      garantia: "3 meses",
      color: "blue",
    },
    {
      icon: <RiSearch2Line className="text-cyan-500" size={32} />,
      title: "Diagnóstico Eletrônico",
      description: "Identificação precisa de problemas utilizando equipamentos de última geração e scanner profissional.",
      detalhes: [
        "Scan completo do sistema eletrônico",
        "Teste de compressão do compressor",
        "Detecção de vazamentos com ultravioleta",
        "Análise de sensores e atuadores",
        "Relatório detalhado do diagnóstico",
      ],
      preco: "R$ 80,00",
      tempo: "30-60 minutos",
      garantia: "Não aplicável",
      color: "cyan",
    },
    {
      icon: <RiCarLine className="text-indigo-500" size={32} />,
      title: "Instalação Completa",
      description: "Instalação de kit completo de ar condicionado em veículos que não possuem o sistema original.",
      detalhes: [
        "Kit completo original/qualidade",
        "Compressor novo",
        "Condensador e evaporador",
        "Todos os componentes necessários",
        "Teste final de funcionamento",
      ],
      preco: "Sob consulta",
      tempo: "1 dia",
      garantia: "12 meses",
      color: "indigo",
    },
    {
      icon: <RiRepeat2Line className="text-emerald-500" size={32} />,
      title: "Recarga de Gás",
      description: "Recarga completa com gás refrigerante R134a de alta qualidade e procedência garantida.",
      detalhes: [
        "Gás R134a puro",
        "Verificação de vazamentos",
        "Limpeza do sistema",
        "Teste de performance",
        "Medição de temperatura final",
      ],
      preco: "A partir de R$ 120,00",
      tempo: "45 minutos",
      garantia: "6 meses",
      color: "emerald",
    },
    {
      icon: <RiFlashlightLine className="text-amber-500" size={32} />,
      title: "Reparo de Compressores",
      description: "Reparo especializado em compressores de ar condicionado com peças de qualidade.",
      detalhes: [
        "Diagnóstico do compressor",
        "Reparo ou substituição",
        "Troca de embreagem quando necessário",
        "Teste de pressão e vedação",
        "Regulagem do sistema",
      ],
      preco: "Sob consulta",
      tempo: "2-4 horas",
      garantia: "6 meses",
      color: "amber",
    },
    {
      icon: <RiCarWashingLine className="text-purple-500" size={32} />,
      title: "Higienização Completa",
      description: "Limpeza e higienização profunda do sistema para eliminar odores e bactérias.",
      detalhes: [
        "Limpeza do evaporador",
        "Higienização dos dutos",
        "Aplicação de bactericida",
        "Troca do filtro de ar",
        "Eliminação de odores",
      ],
      preco: "R$ 90,00",
      tempo: "1 hora",
      garantia: "1 mês",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    cyan: "from-cyan-500 to-cyan-600", 
    indigo: "from-indigo-500 to-indigo-600",
    emerald: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
    purple: "from-purple-500 to-purple-600",
  };

  return (
    <>
      {/* Hero Section Serviços */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/topography.svg"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nossos{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Serviços
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Soluções completas em ar condicionado automotivo com qualidade e garantia
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contato">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  <RiWhatsappFill className="mr-2" size={20} />
                  Solicitar Orçamento
                </Button>
              </Link>
              <Link href="tel:11999999999">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <RiPhoneFill className="mr-2" size={20} />
                  Ligar Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços para manter o ar
              condicionado do seu veículo em perfeito estado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicosDetalhados.map((servico, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 group flex flex-col"
              >
                {/* Header com gradiente */}
                <div className={`bg-gradient-to-r ${colorClasses[servico.color]} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {servico.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{servico.preco}</div>
                      <div className="text-white/80 text-sm">{servico.tempo}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{servico.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {servico.description}
                  </p>
                </div>

                <div className="p-6 flex-1">
                  {/* Detalhes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 text-lg">
                      Inclui:
                    </h4>
                    <ul className="space-y-2">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-slate-600 text-sm"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses[servico.color]} rounded-full mr-3 flex-shrink-0`}></div>
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info Footer */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <RiTimeLine className="text-slate-400" size={16} />
                        <div>
                          <div className="font-semibold text-slate-900">Tempo</div>
                          <div className="text-slate-600">{servico.tempo}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <RiShieldCheckLine className="text-slate-400" size={16} />
                        <div>
                          <div className="font-semibold text-slate-900">Garantia</div>
                          <div className="text-green-600 font-medium">{servico.garantia}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão */}
                <div className="px-6 pb-6">
                  <Link href="/contato">
                    <Button 
                      className={`w-full bg-gradient-to-r ${colorClasses[servico.color]} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      Agendar Serviço
                      <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Resolver o Problema do seu Ar Condicionado?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Entre em contato agora mesmo e agende uma avaliação gratuita do seu veículo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  <RiWhatsappFill className="mr-2" size={20} />
                  Solicitar Orçamento
                </Button>
              </Link>
              <Link href="tel:11999999999">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <RiPhoneFill className="mr-2" size={20} />
                  Ligar Agora
                </Button>
              </Link>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex items-center justify-center gap-3">
                <RiTimeLine className="text-blue-400" size={20} />
                <span>Atendimento Rápido</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <RiPriceTag3Line className="text-green-400" size={20} />
                <span>Orçamento Grátis</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <RiShieldCheckLine className="text-amber-400" size={20} />
                <span>Garantia em Todos os Serviços</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}