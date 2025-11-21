import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import IconNoLink from "@/components/ui/iconNoLink";
import Button from "@/components/ui/button";
import { 
  RiFocus3Line, 
  RiShakeHandsLine, 
  RiTimerFlashLine, 
  RiSettings2Line,
  RiUserHeartLine,
  RiEyeFill,
  RiMedalLine,
  RiAwardLine,
  RiTeamLine,
  RiStarFill,
  RiArrowRightLine,
  RiWhatsappFill
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  const valores = [
    {
      icon: <RiFocus3Line className="text-blue-500" size={32} />,
      title: "Qualidade",
      description: "Compromisso com a excelência em todos os serviços prestados",
      color: "blue"
    },
    {
      icon: <RiShakeHandsLine className="text-emerald-500" size={32} />,
      title: "Transparência",
      description: "Honestidade e clareza em todos os orçamentos e procedimentos",
      color: "emerald"
    },
    {
      icon: <RiTimerFlashLine className="text-amber-500" size={32} />,
      title: "Agilidade",
      description: "Atendimento rápido sem abrir mão da qualidade do serviço",
      color: "amber"
    },
    {
      icon: <RiSettings2Line className="text-purple-500" size={32} />,
      title: "Especialização",
      description: "Foco exclusivo em ar condicionado automotivo",
      color: "purple"
    }
  ];

  const equipe = [
    {
      nome: "Carlos Silva",
      cargo: "Técnico Especialista",
      experiencia: "12 anos",
      especialidade: "Compressores e Sistemas Elétricos",
      avatar: <RiUserHeartLine className="text-white" size={32} />
    },
    {
      nome: "Ana Rodrigues",
      cargo: "Técnica em Refrigeração",
      experiencia: "8 anos",
      especialidade: "Diagnóstico e Controle de Qualidade",
      avatar: <RiUserHeartLine className="text-white" size={32} />
    },
    {
      nome: "Roberto Santos",
      cargo: "Instalador Sênior",
      experiencia: "15 anos",
      especialidade: "Instalações Completas",
      avatar: <RiUserHeartLine className="text-white" size={32} />
    },
    {
      nome: "Mariana Lima",
      cargo: "Atendimento ao Cliente",
      experiencia: "6 anos",
      especialidade: "Agendamento e Suporte",
      avatar: <RiUserHeartLine className="text-white" size={32} />
    }
  ];

  const stats = [
    { number: "10+", label: "Anos no Mercado", color: "from-blue-500 to-blue-600" },
    { number: "5.000+", label: "Clientes Atendidos", color: "from-emerald-500 to-emerald-600" },
    { number: "98%", label: "Índice de Satisfação", color: "from-amber-500 to-amber-600" },
    { number: "12", label: "Meses de Garantia", color: "from-purple-500 to-purple-600" }
  ];

  const missaoVisaoValores = [
    {
      icon: <RiFocus3Line className="text-blue-400" size={32} />,
      title: "Missão",
      description: "Proporcionar conforto térmico e qualidade do ar através de serviços especializados em ar condicionado veicular, superando as expectativas dos nossos clientes.",
      color: "blue"
    },
    {
      icon: <RiEyeFill className="text-cyan-400" size={32} />,
      title: "Visão",
      description: "Ser referência nacional em serviços de ar condicionado automotivo, reconhecida pela excelência técnica e satisfação dos clientes.",
      color: "cyan"
    },
    {
      icon: <RiMedalLine className="text-amber-400" size={32} />,
      title: "Valores",
      description: "Qualidade, transparência, ética, inovação tecnológica e compromisso com a satisfação total do cliente.",
      color: "amber"
    }
  ];

  return (
    <>
      {/* Hero Section Sobre */}
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
              Sobre a{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                ClimaAuto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Há mais de 10 anos proporcionando conforto térmico e qualidade no ar condicionado do seu veículo
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <RiWhatsappFill className="mr-2" size={20} />
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Fundada em 2013, a <strong className="text-blue-600">ClimaAuto</strong> nasceu da paixão por automóveis e da 
                    necessidade de oferecer um serviço especializado em ar condicionado veicular 
                    com qualidade e transparência.
                  </p>
                  <p>
                    Começamos como uma pequena oficina no bairro e, através de muito trabalho 
                    e dedicação, nos tornamos referência em São Paulo para serviços de 
                    ar condicionado automotivo.
                  </p>
                  <p>
                    Ao longo dos anos, investimos constantemente em equipamentos de última 
                    geração e na capacitação da nossa equipe, sempre acompanhando as 
                    evoluções tecnológicas dos veículos.
                  </p>
                  <p>
                    Hoje, atendemos mais de <strong className="text-emerald-600">5.000 clientes satisfeitos</strong> e continuamos 
                    comprometidos com nossa missão de oferecer o melhor serviço do mercado.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{valor.title}</h3>
                <p className="text-slate-600 leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Profissionais qualificados e comprometidos com a excelência do serviço
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membro, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {membro.avatar}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{membro.nome}</h3>
                <p className="text-blue-600 font-semibold mb-3">{membro.cargo}</p>
                <div className="text-sm text-slate-600 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <RiAwardLine className="text-amber-500" size={16} />
                    <span>Experiência: {membro.experiencia}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <RiStarFill className="text-emerald-500" size={16} />
                    <span>{membro.especialidade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Essência
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Os pilares que sustentam nosso trabalho e nos guiam rumo à excelência
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missaoVisaoValores.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/contato">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                >
                  Fazer Parte Dessa História
                  <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}