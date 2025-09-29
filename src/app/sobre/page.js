import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Sobre() {
  const valores = [
    {
      icon: "🎯",
      title: "Qualidade",
      description: "Compromisso com a excelência em todos os serviços prestados"
    },
    {
      icon: "🤝",
      title: "Transparência",
      description: "Honestidade e clareza em todos os orçamentos e procedimentos"
    },
    {
      icon: "⚡",
      title: "Agilidade",
      description: "Atendimento rápido sem abrir mão da qualidade do serviço"
    },
    {
      icon: "🔧",
      title: "Especialização",
      description: "Foco exclusivo em ar condicionado automotivo"
    }
  ];

  const equipe = [
    {
      nome: "Carlos Silva",
      cargo: "Técnico Especialista",
      experiencia: "12 anos",
      especialidade: "Compressores e Sistemas Elétricos"
    },
    {
      nome: "Ana Rodrigues",
      cargo: "Técnica em Refrigeração",
      experiencia: "8 anos",
      especialidade: "Diagnóstico e Controle de Qualidade"
    },
    {
      nome: "Roberto Santos",
      cargo: "Instalador Sênior",
      experiencia: "15 anos",
      especialidade: "Instalações Completas"
    },
    {
      nome: "Mariana Lima",
      cargo: "Atendimento ao Cliente",
      experiencia: "6 anos",
      especialidade: "Agendamento e Suporte"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section Sobre */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a ClimaAuto</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Há mais de 10 anos proporcionando conforto térmico e qualidade no ar condicionado do seu veículo
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Fundada em 2013, a <strong>ClimaAuto</strong> nasceu da paixão por automóveis e da 
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
                  Hoje, atendemos mais de 5.000 clientes satisfeitos e continuamos 
                  comprometidos com nossa missão de oferecer o melhor serviço do mercado.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-blue-100">Anos no Mercado</div>
                  </div>
                  <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">5.000+</div>
                    <div className="text-green-100">Clientes Atendidos</div>
                  </div>
                  <div className="bg-orange-600 text-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-orange-100">Índice de Satisfação</div>
                  </div>
                  <div className="bg-purple-600 text-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-purple-100">Meses de Garantia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profissionais qualificados e comprometidos com a excelência do serviço
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  👨‍🔧
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{membro.nome}</h3>
                <p className="text-blue-600 font-semibold mb-2">{membro.cargo}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Experiência: {membro.experiencia}</p>
                  <p>Especialidade: {membro.especialidade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-blue-100">
                Proporcionar conforto térmico e qualidade do ar através de serviços 
                especializados em ar condicionado veicular, superando as expectativas 
                dos nossos clientes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-blue-100">
                Ser referência nacional em serviços de ar condicionado automotivo, 
                reconhecida pela excelência técnica e satisfação dos clientes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-blue-100">
                Qualidade, transparência, ética, inovação tecnológica e compromisso 
                com a satisfação total do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}